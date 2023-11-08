const { check, validationResult } = require('express-validator');

class Movie {
  constructor(id, name, description, releaseDate, rating, ticketPrice, country, genres, photo) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.ticketPrice = ticketPrice;
    this.country = country;
    this.genres = genres;
    this.photo = photo;
  }

  // Validation method to check if all fields are required
  static validate(movie) {
    return [
      check('name').notEmpty().withMessage('Name is required'),
      check('description').notEmpty().withMessage('Description is required'),
      check('releaseDate').notEmpty().withMessage('Release Date is required'),
      check('rating').notEmpty().withMessage('Rating is required'),
      check('ticketPrice').notEmpty().withMessage('Ticket Price is required'),
      check('country').notEmpty().withMessage('Country is required'),
      check('genres').isArray({ min: 1 }).withMessage('At least one genre is required'),
      check('photo').notEmpty().withMessage('Photo is required'),
    ];
  }
}

module.exports = Movie;

