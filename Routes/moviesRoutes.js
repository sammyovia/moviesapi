const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Import  existing movie model
const Movie = require('./models/movie');

// Sample movie data
const movies = [
  new Movie(1, 'Movie 1', 'Description 1', new Date(), 4, 10.99, 'Country 1', ['Genre 1'], 'movie1.jpg'),
  // ... Add more movie instances as needed
];

// GET - Retrieve all movies
router.get('/movies', (req, res) => {
  res.json(movies);
});

POST - Create a new movie
router.post('/movies', Movie.validate(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
router.post('/movies', (req, res) => {
  const newMovieData = req.body;
  const newMovie = new Movie(
    movies.length + 1,
    newMovieData.name,
    newMovieData.description,
    newMovieData.releaseDate,
    newMovieData.rating,
    newMovieData.ticketPrice,
    newMovieData.country,
    newMovieData.genre,
    newMovieData.photo
  );

  movies.push(newMovie);
  res.json(newMovie);
});

// PUT - Update a movie by ID
router.put('/movies/:id', Movie.validate(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const movieId = parseInt(req.params.id);
  const movieToUpdate = movies.find((movie) => movie.id === movieId);

  if (!movieToUpdate) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  // Update movie properties as needed
  // For example: movieToUpdate.name = req.body.name;

  res.json(movieToUpdate);
});

// DELETE - Delete a movie by ID
router.delete('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  // Find and delete the movie with the given ID
  const index = movies.findIndex((movie) => movie.id === movieId);

  if (index === -1) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  movies.splice(index, 1);
  res.json({ message: 'Movie deleted' });
});

module.exports = router;

