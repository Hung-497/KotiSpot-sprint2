const { sendLoginCode } = require('../services/email');
const User = require('../models/userModel');
const LoginCode = require('../models/loginModel');
const crypto = require('crypto');

const CODE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const MAX_ATTEMPTS = 5;

function publicUser(user) {
  if (!user) return null;
  return {
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    bio: user.bio,
    verifiedRole: user.verifiedRole,
    verifiedAt: user.verifiedAt,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt
  };
};

const getCurrentUser = async (req, res) => {
  try {
    if (!req.session.userId) return res.json({ user: null });
    const user = await User.findById(req.session.userId);
    res.json({ user: publicUser(user) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching current user' });
  }
};

const requestCode = async (req, res) => {
  try {
    const email = (req.body.email || '').trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Invalidate any previous codes for this email
    await LoginCode.deleteMany({ email });

    const code = crypto.randomInt(100000, 999999).toString();
    await LoginCode.create({
      email,
      code,
      expiresAt: new Date(Date.now() + CODE_TTL_MS)
    });

    await sendLoginCode(email, code);

    // Let the frontend know whether this is a new email (needs name) or returning user
    const existingUser = await User.findOne({ email });
    res.json({ success: true, isNewUser: !existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending login code' });
  }
};

const verifyCode = async (req, res) => {
  try {
    const email = (req.body.email || '').trim().toLowerCase();
    const code = (req.body.code || '').trim();
    const firstName = (req.body.firstName || '').trim();
    const lastName = (req.body.lastName || '').trim();

    const record = await LoginCode.findOne({ email });
    if (!record || record.expiresAt < new Date()) {
      return res.status(400).json({ error: 'Code expired or not requested — please request a new one' });
    }

    if (record.attempts >= MAX_ATTEMPTS) {
      await LoginCode.deleteOne({ _id: record._id });
      return res.status(400).json({ error: 'Too many attempts — please request a new code' });
    }

    if (record.code !== code) {
      record.attempts += 1;
      await record.save();
      return res.status(400).json({ error: 'Incorrect code' });
    }

    // Code is valid — single use, delete it
    await LoginCode.deleteOne({ _id: record._id });

    // Find or create the user
    let user = await User.findOne({ email });
    if (!user) {
      // New account — full name is required
      if (!firstName || !lastName) {
        // Re-issue the code so the user can retry with their name filled in
        const newCode = crypto.randomInt(100000, 999999).toString();
        await LoginCode.create({
          email,
          code: newCode,
          expiresAt: new Date(Date.now() + CODE_TTL_MS)
        });
        return res.status(400).json({
          error: 'Please enter your first and last name to create your account',
          code: 'NAME_REQUIRED'
        });
      }

      user = await User.create({
        email,
        firstName,
        lastName
      });
    }

    req.session.userId = user._id;
    res.json({ user: publicUser(user) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error verifying code' });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error logging out' });
    }
    res.json({ success: true });
  });
};

module.exports = {
  getCurrentUser,
  requestCode,
  verifyCode,
  logout,
}