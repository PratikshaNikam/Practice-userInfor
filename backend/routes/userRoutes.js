// routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST route to submit form
router.post('/submit', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: 'User saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }
});

export default router;
