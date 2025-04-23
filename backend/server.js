import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import User from './models/User.js';
const allowedOrigins = ['http://localhost:5500'];

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// TEMP: log to verify .env is working
console.log('MongoDB URI:', process.env.MONGODB_URI); 

app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.post('/submit', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: 'User saved successfully!' });
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ error: 'Failed to save user.' });
  }
});

  

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
