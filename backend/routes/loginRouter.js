const express = require('express');
const router = express.Router();
const {
  getCurrentUser,
  requestCode,
  verifyCode,
  logout,
} = require('../controllers/loginControllers');

// GET /me for current user
router.get('/me', getCurrentUser);

// POST /request-code to request a login code
router.post('/request-code', requestCode);

// POST /verify-code to verify the code — creates the account on first login
// New accounts must provide firstName and lastName
router.post('/verify-code', verifyCode);

// POST /logout to Logout
router.post('/logout', logout);

module.exports = router;
