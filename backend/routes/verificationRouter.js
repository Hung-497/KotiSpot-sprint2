const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const {
    getLatestVerif,
    createVerif,
    getApplications,
    reviewApplication,
} = require('../controllers/verificationControllers');

// Get the current user's latest verification request
router.get('/me', isAuthenticated, getLatestVerif);

// Submit a verification application (multipart/form-data with file uploads)
router.post('/', isAuthenticated, createVerif);

// --- Admin endpoints ---

// List applications (default: pending)
router.get('/admin', isAdmin,  getApplications);

// Approve or reject an application
router.put('/admin/:id', isAdmin, reviewApplication);

module.exports = router;
