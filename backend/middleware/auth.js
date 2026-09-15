const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Please log in to access this resource' });
};

const isOwner = async (req, res, next) => {
  const Property = require('../models/Property');
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    if (property.owner.toString() !== req.session.userId) {
      return res.status(403).json({ error: 'You are not authorized to perform this action' });
    }
    req.property = property;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const isAdmin = async (req, res, next) => {
  const User = require('../models/User');
  try {
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Please log in to access this resource' });
    }
    const user = await User.findById(req.session.userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { isAuthenticated, isOwner, isAdmin };
