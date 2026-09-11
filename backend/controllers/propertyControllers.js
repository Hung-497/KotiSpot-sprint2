const Property = require("../models/propertyModel");
const mongoose = require("mongoose");
const {
  addNumericRangeFilter,
  addBooleanFilter,
} = require("../utils/propertyQueryHelpers");

// GET /properties
const getActiveProperties = async (req, res) => {
  try {
    const properties = await Property.find({ status: "active" });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve properties" });
  }
};

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({});
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve properties" });
  }
};

// POST /properties
const createProperty = async (req, res) => {
  try {
    const newProperty = await Property.create({ ...req.body });
    res.status(201).json(newProperty);
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(400)
        .json({ message: "Invalid property data", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Failed to create property", error: error.message });
    }
  }
};

// GET /properties/:propertyId
const getPropertyById = async (req, res) => {
  const { propertyId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(propertyId)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  try {
    const property = await Property.findById(propertyId);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve property" });
  }
};

// PATCH /properties/:propertyId
const updateProperty = async (req, res) => {
  const { propertyId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(propertyId)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { ...req.body },
      { new: true, runValidators: true },
    );

    if (updatedProperty) {
      res.status(200).json(updatedProperty);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(400)
        .json({ message: "Invalid property data", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Failed to update property", error: error.message });
    }
  }
};

// DELETE /properties/:propertyId
const deleteProperty = async (req, res) => {
  const { propertyId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(propertyId)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  try {
    const deletedProperty = await Property.findByIdAndDelete(propertyId);

    if (deletedProperty) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete property", error: error.message });
  }
};

const filterProperties = async (req, res) => {
  try {
    const query = {
      status: "active",
    };

    const validListingTypes = ["sale", "rent", "any"];
    const validPropertyTypes = ["residential", "any"];
    const validPropertySubTypes = [
      "apartment",
      "detached-house",
      "studio",
      "semi-detached-house",
      "terraced-house",
      "any",
    ];

    // listingType validation
    if (
      req.query.listingType !== undefined &&
      !validListingTypes.includes(req.query.listingType)
    ) {
      return res.status(400).json({
        message: "Invalid listing type",
      });
    }

    // propertyType validation
    if (
      req.query.propertyType !== undefined &&
      !validPropertyTypes.includes(req.query.propertyType)
    ) {
      return res.status(400).json({
        message: "Invalid property type",
      });
    }

    // propertySubType validation
    if (
      req.query.propertySubType !== undefined &&
      !validPropertySubTypes.includes(req.query.propertySubType)
    ) {
      return res.status(400).json({
        message: "Invalid property subtype",
      });
    }

    if (req.query.listingType !== undefined && req.query.listingType !== "any") {
      query.listingType = req.query.listingType;
    }

    if (req.query.propertyType !== undefined && req.query.propertyType !== "any") {
      query.propertyType = req.query.propertyType;
    }

    if (
      req.query.propertySubType !== undefined &&
      req.query.propertySubType !== "any"
    ) {
      query.propertySubType = req.query.propertySubType;
    }

    const numericRanges = [
      ["price", "minPrice", "maxPrice"],
      ["rooms", "minRooms", "maxRooms"],
      ["bedrooms", "minBedrooms", "maxBedrooms"],
      ["bathrooms", "minBathrooms", "maxBathrooms"],
      ["size", "minSize", "maxSize"],
    ];

    for (const [field, minParameter, maxParameter] of numericRanges) {
      const validationMessage = addNumericRangeFilter(
        query,
        field,
        req.query[minParameter],
        req.query[maxParameter],
      );

      if (validationMessage) {
        return res.status(400).json({ message: validationMessage });
      }
    }

    for (const feature of [
      "balcony",
      "elevator",
      "parking",
      "furnished",
      "petsAllowed",
      "sauna",
    ]) {
      const validationMessage = addBooleanFilter(
        query,
        feature,
        req.query[feature],
      );

      if (validationMessage) {
        return res.status(400).json({ message: validationMessage });
      }
    }

    for (const field of ["city", "currency"]) {
      if (req.query[field] !== undefined) {
        if (typeof req.query[field] !== "string" || req.query[field].trim() === "") {
          return res.status(400).json({ message: `Invalid ${field} value` });
        }

        if (req.query[field].trim() !== "any") {
          query[field] = req.query[field].trim();
        }
      }
    }

    const properties = await Property.find(query);

    res.status(200).json(properties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to filter properties", error: error.message });
  }
};

// GET keyword
const getPropertyByKeyword = async (req, res) => {
  const { keyword } = req.query;

  if (typeof keyword !== "string" || keyword.trim() === "") {
    return res.status(400).json({ message: "Keyword is required" });
  }

  const escapedKeyword = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  try {
    const property = await Property.findOne({
      status: "active",
      $or: [
        { title: { $regex: escapedKeyword } },
        { description: { $regex: escapedKeyword } },
      ],
    });

    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to search properties",
      error: error.message,
    });
  }
};

module.exports = {
  getActiveProperties,
  getAllProperties,
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
  filterProperties,
  getPropertyByKeyword,
};
