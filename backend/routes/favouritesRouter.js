const express = require('express');
const router = express.Router();
const {
  getAllFavourites,
  addFavourite,
  deleteFavourite,
} = require('../controllers/propertyControllers');

// GET /properties
router.get('/', getAllFavourites);

// POST /properties
router.post('/:propertyId', addFavourite);

// GET /properties/:propertyId
// router.get('/:propertyId', getPropertyById);

// PUT /properties/:propertyId
// router.put('/:propertyId', updateProperty);

// DELETE /properties/:propertyId
router.delete('/:propertyId', deleteFavourite);

module.exports = router;