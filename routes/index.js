const express = require('express');
const router = express.Router();
const User = require('./users');
const path = require('path');

//landing page route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

// Signup page route
router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/signup.html'));
});

//login route
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/login.html'));
});
module.exports = router;
