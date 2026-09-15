const express = require('express');
const router = express.Router();
const {
    getProfile,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userControllers');

// GET /users/profile/:userId for user profile by Id
router.get('/profile/:userId', getProfile);

// GET /users for all users
router.get('/', getAllUsers);

// POST /users
router.post('/', createUser);

// GET /users/:userId
router.get('/:userId', getUserById);

// PATCH /users/:userId
router.patch('/:userId', updateUser);

// DELETE /users/:userId
router.delete('/:userId', deleteUser);

module.exports = router;