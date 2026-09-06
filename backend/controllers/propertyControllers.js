const Property = require('../models/propertyModel');

// GET /properties
const getAllProperties = (req, res) => {
  const properties = Property.getAll();
  res.json(properties);
};

// POST /properties
const createProperty = (req, res) => {
  const newProperty = Property.addOne({ ...req.body }); // Spread the req.body object

  if (newProperty) {
    res.json(newProperty);
  } else {
    // Handle error (e.g., failed to create property)
    res.status(400).json({ message: "Invalid property data" });
  }
};

// GET /properties/:propertyId
const getPropertyById = (req, res) => {
  const propertyId = req.params.propertyId;
  const property = Property.findById(propertyId);
  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
};

// PUT /properties/:propertyId
const updateProperty = (req, res) => {
  const propertyId = req.params.propertyId;
  const updatedProperty = Property.updateOneById(propertyId, { ...req.body }); // Spread the req.body object

  if (updatedProperty) {
    res.json(updatedProperty);
  } else {
    // Handle update failure (e.g., property not found)
    res.status(404).json({ message: "Property not found" });
  }
};

// DELETE /properties/:propertyId
const deleteProperty = (req, res) => {
  const propertyId = req.params.propertyId;
  const isDeleted = Property.deleteOneById(propertyId);

  if (isDeleted) {
    res.json({ message: "Property deleted successfully" });
  } else {
    // Handle deletion failure (e.g., property not found)
    res.status(404).json({ message: "Property not found" });
  }
};

// GET Filter 
const filterProperties = (req, res) => {
  const properties = Property.findByFilter({...req.body}); // Spread the req.body object
  if (properties) {
    res.json(properties);
  } else {
    // Handle update failure (e.g., properties not found)
    res.status(404).json({ message: "Properties not found" });
  }
};

// GET keyword
const getPropertyByKeyword = (req, res) => {
  const keyword = req.params.keyword;
  const property = Property.findByKeyword(keyword);
  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
};

module.exports = {
  getAllProperties,
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
  filterProperties,
  getPropertyByKeyword,
};