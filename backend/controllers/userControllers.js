const User = require("../models/userModel");
const Property = require("../models/propertyModel");
const mongoose = require("mongoose");

const getProfile = async (req, res) => {
    const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    const properties = await Property.find({ ownerId: userId })
      .sort({ createdAt: -1 });

    res.json({ user, properties });
  } catch (error) {
    res.status(500).json({ error: 'Error loading profile' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

const createUser = async (req, res) => {
    try {
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(400)
        .json({ message: "Invalid user data", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Failed to create user", error: error.message });
    }
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...req.body },
    );

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(400)
        .json({ message: "Invalid user data", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Failed to update user", error: error.message });
    }
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};

module.exports = {
    getProfile,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
