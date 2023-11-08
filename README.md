# Implementing a Movies RESTFUL API and User API Documentation

This documentation provides an overview of the Movie API and User API, built using Node.js and Express.

## Table of Contents

- [Movie API](#movie-api)
  - [Movie Model](#movie-model)
  - [Routes](#routes)
- [User API](#user-api)
  - [User Model](#user-model)
  - [Routes](#user-routes)

## Movie API

### Movie Model

The Movie API manages movie data with the following fields:

- `id`: A unique identifier for the movie.
- `name`: The name of the movie.
- `description`: A brief description of the movie.
- `releaseDate`: The release date of the movie.
- `rating`: The rating of the movie on a scale from 1 to 5.
- `ticketPrice`: The ticket price for the movie.
- `country`: The country of origin of the movie.
- `genres`: An array of genres associated with the movie.
- `photo`: A photo URL for the movie.

### Routes

- `GET /api/movies`: Retrieve a list of all movies.
- `POST /api/movies`: Create a new movie.
- `PUT /api/movies/:id`: Update a movie by its ID.
- `DELETE /api/movies/:id`: Delete a movie by its ID.

Validation is used to ensure that all fields are required and that the provided data meets the necessary criteria.

## User API

### User Model

The User API manages user data with the following fields:

- `id`: A unique identifier for the user.
- `username`: The username of the user.
- `email`: The email address of the user.
- `password`: The user's password.

### User Routes

- `GET /api/users`: Retrieve a list of all users.
- `GET /api/users/:id`: Retrieve a user by their ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by their ID.
- `DELETE /api/users/:id`: Delete a user by their ID.

Validation is used to ensure that all required fields are provided, and the email and password meet specific criteria.

## Getting Started

To run the API locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sammyovia/moviesapi.git
   cd moviesapi

install dependencies

npm install

Set environment variables if neccessary such as PORT.

Start the API
node server.js

The API will be accessible at http://localhost:3000 by default (or as configured).

Usage
Use tools like Postman, cURL, or make HTTP requests from your applications to interact with the API.
Refer to the API routes listed above for creating, retrieving, updating, and deleting movies and users.
Make sure to provide valid data and adhere to the validation rules.

Contributions
Contributions to this project are welcome. Feel free to submit issues, feature requests, or pull requests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

<h3>Author</h3> : <b>Samuel Igbinovia</b>
