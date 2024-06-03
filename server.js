import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes.js';
import connectDB from './db.js';

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
