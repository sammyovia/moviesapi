const express = require('express');
const app = express();
const cors = require('cors'); // Import the 'cors' package
const moviesRoutes = require('./Routes/moviesRoutes');//import Routes
const userRoutes = require('./Routes/userRoutes'); //import user routes


app.use(express.json()); // Middleware for JSON request body parsing
// Use CORS middleware to enable cross-origin requests
app.use(cors());
// Mount the movie routes
app.use('/api', moviesRoutes);
// Mount the user routes
app.use('/api', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

