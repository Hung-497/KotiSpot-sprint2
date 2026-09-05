const express = require('express');
const router = express.Router();
const {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
} = require('../controllers/propertyControllers');

// GET /properties
router.get('/', getAllProperties);

// POST /properties
router.post('/', createProperty);

// GET /properties/:propertyId
router.get('/:propertyId', getPropertyById);

// PUT /properties/:propertyId
router.put('/:propertyId', updateProperty);

// DELETE /properties/:propertyId
router.delete('/:propertyId', deleteProperty);

module.exports = router;