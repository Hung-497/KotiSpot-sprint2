const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');
const {
  getAllFavourites,
  addFavourite,
  deleteFavourite,
} = require('../controllers/favouriteControllers');

// Add to favorites
router.post('/:propertyId', isAuthenticated, addFavourite);

// Remove from favorites
router.delete('/:propertyId', isAuthenticated, deleteFavourite);

// View all favorites
router.get('/', isAuthenticated, getAllFavourites);

module.exports = router;
