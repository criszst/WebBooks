import { Request, Response } from 'express';
import { getBooks, getBookById } from '../services/GoogleBooksService';

export class SearchController {
  async SearchBook(req: Request, res: Response) {
      const query = req.query.q;
      const books = query === undefined ? await getBooks('Clean Code') : await getBooks(query);

      res.render('search/render', { books, query });
  }

  async GetBookDetailsById(req: Request, res: Response) {
    const bookId = req.params.id;
    const book = await getBookById(bookId);

    res.render('bookdetail/detail', { book });
  }
}
