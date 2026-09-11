const express = require('express');
const router = express.Router();
const {
  getAllFavourites,
  addFavourite,
  deleteFavourite,
} = require('../controllers/favouriteControllers');

// GET /favourites
router.get('/', getAllFavourites);

// POST /favourites/:propertyId
router.post('/:propertyId', addFavourite);

// DELETE /favourites/:propertyId
router.delete('/:propertyId', deleteFavourite);

module.exports = router;
