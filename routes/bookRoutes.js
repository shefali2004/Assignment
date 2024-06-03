import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/bookController.js';

const router = express.Router();

// Routes
router.post('/addbooks', createBook);
router.get('/getallbooks', getAllBooks);
router.get('/getbook/:id', getBookById);
router.put('/editbook/:id', updateBook);
router.delete('/deletebook/:id', deleteBook);

export default router;
