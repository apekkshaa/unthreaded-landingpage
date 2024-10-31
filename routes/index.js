const express = require('express');
const router = express.Router();
const User = require('./users');

// Example route to add a user
router.post('/addUser', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.send('User added successfully');
  } catch (err) {
    console.log('Error:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
