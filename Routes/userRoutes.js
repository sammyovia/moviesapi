const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/user'); // Adjust the path as needed

const users = [
  new User(1, 'user1', 'user1@example.com', 'password1'),
  new User(2, 'user2', 'user2@example.com', 'password2'),
];

// POST - Create a new user
router.post('/users', [
  check('username').notEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newUser = new User(
    users.length + 1,
    req.body.username,
    req.body.email,
    req.body.password
  );

  users.push(newUser);
  res.json(newUser);
});

// GET - Retrieve all users
router.get('/users', (req, res) => {
  res.json(users);
});

// GET - Retrieve a user by ID
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// ... Other user-related routes

module.exports = router;

