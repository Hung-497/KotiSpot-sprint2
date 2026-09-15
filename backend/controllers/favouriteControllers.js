const mongoose = require("mongoose");
const Favorite = require("../models/favouriteModel");

// GET /favourites
const getAllFavourites =  async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.session.userId })
      .populate({
        path: 'property',
        populate: { path: 'owner', select: 'username' }
      })
      .sort({ createdAt: -1 });

    res.json({ favorites });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error loading favorites' });
  }
}

// POST /favourites/:propertyId
const addFavourite = async (req, res) => {
  try {
    await Favorite.findOneAndUpdate(
      { user: req.session.userId, property: req.params.propertyId },
      { user: req.session.userId, property: req.params.propertyId },
      { upsert: true }
    );
    res.json({ success: true, favorited: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not add favorite' });
  }
}

// DELETE /favourites/:propertyId
const deleteFavourite = async (req, res) => {
  try {
    await Favorite.findOneAndDelete({
      user: req.session.userId,
      property: req.params.propertyId
    });
    res.json({ success: true, favorited: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not remove favorite' });
  }
}

module.exports = {
  getAllFavourites,
  addFavourite,
  deleteFavourite,
};
