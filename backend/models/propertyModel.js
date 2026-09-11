const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const featuresSchema = new Schema(
  {
    balcony: { type: Boolean, default: false },
    elevator: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    furnished: { type: Boolean, default: false },
    petsAllowed: { type: Boolean, default: false },
    sauna: { type: Boolean, default: false },
  },
  { _id: false },
);

const rentalDetailsSchema = new Schema(
  {
    availableFrom: {
      type: String,
      required: true,
      validate: {
        validator: (value) =>
          /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)),
        message: "availableFrom must be a valid date in YYYY-MM-DD format",
      },
    },
    deposit: {
      type: Number,
      min: [0, "deposit cannot be negative"],
    },
    minimumRentalPeriod: {
      type: Number,
      required: true,
      min: [1, "minimumRentalPeriod must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "minimumRentalPeriod must be a positive integer",
      },
    },
    additionalCosts: {
      type: String,
      validate: {
        validator: (value) => value === undefined || value.trim() !== "",
        message: "additionalCosts must not be empty",
      },
    },
  },
  { _id: false },
);

const imageSchema = new Schema(
  {
    id: Number,
    url: String,
    description: String,
    isMain: Boolean,
  },
  { _id: false },
);

const propertySchema = new Schema(
  {
    ownerId: {
      type: Number,
      required: true,
      min: [1, "ownerId must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "ownerId must be a positive integer",
      },
    },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    listingType: {
      type: String,
      required: true,
      enum: ["sale", "rent"],
    },
    propertyType: { type: String, required: true, trim: true },
    propertySubType: { type: String, required: true, trim: true },
    price: {
      type: Number,
      required: true,
      min: [0, "price must be positive"],
      validate: {
        validator: (value) => value > 0,
        message: "price must be positive",
      },
    },
    currency: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    postalCode: { type: String, required: true, trim: true },
    rooms: {
      type: Number,
      required: true,
      min: [1, "rooms must be a positive integer"],
      validate: {
        validator: Number.isInteger,
        message: "rooms must be a positive integer",
      },
    },
    bedrooms: {
      type: Number,
      required: true,
      min: [0, "bedrooms cannot be negative"],
      validate: {
        validator: Number.isInteger,
        message: "bedrooms must be a non-negative integer",
      },
    },
    bathrooms: {
      type: Number,
      required: true,
      min: [0, "bathrooms cannot be negative"],
      validate: {
        validator: Number.isInteger,
        message: "bathrooms must be a non-negative integer",
      },
    },
    size: {
      type: Number,
      required: true,
      min: [0, "size must be positive"],
      validate: {
        validator: (value) => value > 0,
        message: "size must be positive",
      },
    },
    features: {
      type: featuresSchema,
      default: () => ({}),
    },
    rentalDetails: {
      type: rentalDetailsSchema,
      required: function () {
        return this.listingType === "rent";
      },
      validate: {
        validator: function (value) {
          return this.listingType === "rent" || value === undefined;
        },
        message: "rentalDetails are only valid for rental properties",
      },
    },
    images: [imageSchema],
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive", "sold", "rented"],
    },
  },
  { timestamps: true },
);

propertySchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
