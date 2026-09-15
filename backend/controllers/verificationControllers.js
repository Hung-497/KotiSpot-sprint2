const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const multer = require('multer');
const VerificationRequest = require('../models/verificationModel');
const User = require('../models/userModel');


const UPLOAD_DIR = path.join(__dirname, '..', 'public', 'uploads', 'verification');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
const EXT_BY_MIME = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'application/pdf': '.pdf'
};

const upload = multer({
    storage: multer.diskStorage({
        destination: UPLOAD_DIR,
        filename: (req, file, cb) => {
            const ext = EXT_BY_MIME[file.mimetype] || '.bin';
            cb(null, `${req.session.userId}-${Date.now()}-${crypto.randomBytes(4).toString('hex')}${ext}`);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB per file
    fileFilter: (req, file, cb) => {
        if (!ALLOWED_MIME.includes(file.mimetype)) {
            return cb(new Error('Only JPG, PNG, WebP, or PDF files are allowed'));
        }
        cb(null, true);
    }
});

const uploadFields = upload.fields([
    { name: 'idDocument', maxCount: 1 },
    { name: 'licenseDocument', maxCount: 1 }
]);

const getLatestVerif = async (req, res) => {
    try {
        const request = await VerificationRequest.findOne({ user: req.session.userId })
            .sort({ createdAt: -1 });
        const user = await User.findById(req.session.userId).select('verifiedRole verifiedAt');
        res.json({ request, verifiedRole: user.verifiedRole, verifiedAt: user.verifiedAt });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error loading verification status' });
    }
};

const createVerif = (req, res) => {
    uploadFields(req, res, async (uploadErr) => {
        try {
            if (uploadErr) {
                const msg = uploadErr.code === 'LIMIT_FILE_SIZE'
                    ? 'Files must be 5 MB or smaller'
                    : uploadErr.message;
                return res.status(400).json({ error: msg });
            }

            const { role, fullName, companyName, phone, email, areas, yearsExperience, licenseNumber, bio } = req.body;

            if (!['seller', 'agent'].includes(role)) {
                return res.status(400).json({ error: 'Please select a valid role' });
            }
            if (!fullName || !phone || !email || !bio) {
                return res.status(400).json({ error: 'Full name, phone, email, and description are required' });
            }
            if (!req.files?.idDocument?.[0]) {
                return res.status(400).json({ error: 'Identification document is required' });
            }
            if (role === 'agent' && !req.files?.licenseDocument?.[0]) {
                return res.status(400).json({ error: 'Licence/certification document is required for agents' });
            }

            // Only one open application at a time
            const pending = await VerificationRequest.findOne({ user: req.session.userId, status: 'pending' });
            if (pending) {
                return res.status(400).json({ error: 'You already have a pending application' });
            }

            // Already verified users can't re-apply for the same role
            const user = await User.findById(req.session.userId);
            if (user.verifiedRole) {
                return res.status(400).json({ error: `You are already a verified ${user.verifiedRole}` });
            }

            const request = await VerificationRequest.create({
                user: req.session.userId,
                role,
                fullName,
                companyName: role === 'agent' ? companyName : undefined,
                phone,
                email,
                areas: role === 'agent' ? areas : undefined,
                yearsExperience: role === 'agent' && yearsExperience ? parseInt(yearsExperience, 10) : undefined,
                licenseNumber: role === 'agent' ? licenseNumber : undefined,
                bio,
                idDocument: `/uploads/verification/${req.files.idDocument[0].filename}`,
                licenseDocument: req.files?.licenseDocument?.[0]
                    ? `/uploads/verification/${req.files.licenseDocument[0].filename}`
                    : undefined
            });

            res.status(201).json({ request });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error submitting application' });
        }
    });
};

// --- Admin controllers ---

//query -> default: pending
const getApplications = async (req, res) => {
    try {
        const status = ['pending', 'approved', 'rejected'].includes(req.query.status)
            ? req.query.status
            : 'pending';
        const requests = await VerificationRequest.find({ status })
            .populate('user', 'username email')
            .sort({ createdAt: -1 });
        res.json({ requests });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error loading applications' });
    }
};

const reviewApplication = async (req, res) => {
    try {
        const { action, reviewNote } = req.body;
        if (!['approve', 'reject'].includes(action)) {
            return res.status(400).json({ error: 'Invalid action' });
        }

        const request = await VerificationRequest.findById(req.params.id);
        if (!request) {
            return res.status(404).json({ error: 'Application not found' });
        }
        if (request.status !== 'pending') {
            return res.status(400).json({ error: 'This application has already been reviewed' });
        }

        request.status = action === 'approve' ? 'approved' : 'rejected';
        request.reviewedBy = req.session.userId;
        request.reviewNote = reviewNote || undefined;
        request.reviewedAt = new Date();
        await request.save();

        if (action === 'approve') {
            await User.findByIdAndUpdate(request.user, {
                verifiedRole: request.role,
                verifiedAt: new Date()
            });
        }

        res.json({ request });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error reviewing application' });
    }
};

module.exports = {
    getLatestVerif,
    createVerif,
    getApplications,
    reviewApplication,
}