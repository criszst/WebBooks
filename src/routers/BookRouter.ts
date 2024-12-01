
import express from 'express';
import BookController from '../controllers/BookController';

const router = express.Router();

router.get('/:id', BookController.getBookModelById);

router.get('/', BookController.getBook);

router.post('/', BookController.postBook);

router.patch('/:id', BookController.patchBook);

router.delete('/:id', BookController.deleteBook);

export default router;
