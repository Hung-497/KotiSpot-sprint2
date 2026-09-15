const express = require('express');
const app = express();
const connectDB = require('./config/db');
const propertyRouter = require('./routes/propertyRouter');
const favouritesRouter = require('./routes/favouritesRouter')
const userRouter = require('./routes/userRouter')
const loginRouter = require('./routes/loginRouter')
const verificationRouter = require('./routes/verificationRouter')
const session = require('express-session');
require('dotenv').config();


// Middleware to parse JSON
app.use(express.json());

connectDB();

app.use(session({
  secret: process.env.SESSION_SECRET,
}));

// Use the propertyRouter for all /properties routes
app.use('/api/properties', propertyRouter);
app.use('/api/favourites', favouritesRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/verif', verificationRouter);

const port = process.env.PORT || 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
