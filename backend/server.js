const express = require('express');
const app = express();
const propertyRouter = require('./routes/propertyRouter');
const favouritesRouter = require('./routes/favouritesRouter')

// Middleware to parse JSON
app.use(express.json());

// Use the propertyRouter for all /properties routes
app.use('/properties', propertyRouter);
app.use('/favourites', favouritesRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});