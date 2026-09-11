const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;
