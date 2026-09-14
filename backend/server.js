const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();
const propertyRouter = require('./routes/propertyRouter');
const favouritesRouter = require('./routes/favouritesRouter')
const moderationRouter = require('./routes/moderationRouter');

// Middleware to parse JSON
app.use(express.json());

connectDB();

// Use the propertyRouter for all /properties routes
app.use('/api/properties', propertyRouter);
app.use('/api/favourites', favouritesRouter);
app.use('/api/moderation', moderationRouter);

const port = process.env.PORT || 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
