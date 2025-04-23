import express from 'express';
import cors from 'cors';

const app = express();

// Define allowed origins
const allowedOrigins = ['http://localhost:5173'];

// Configure CORS
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Your existing middleware and routes
app.use(express.json());

// ... other configurations and route handlers

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
