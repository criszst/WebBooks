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

    res.render('book/detail/detail', { book });
  }

  async BookFilter(req: Request, res: Response) {
    const query = req.params.query
    const book = query === undefined ? await getBooks('Clean Code') : await getBooks(query);

    const orderSelected = {
      '1': (a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title),
      '2': (a, b) => b.volumeInfo.title.localeCompare(a.volumeInfo.title),

      // preços maiores
      '3':  (a, b) => parseFloat(b.saleInfo.retailPrice.amount) 
                    - parseFloat(a.saleInfo.retailPrice.amount),

      // preços menores
      '4': (a, b) => parseFloat(a.saleInfo.retailPrice.amount) 
                    - parseFloat(b.saleInfo.retailPrice.amount)
  };

  const books = book.sort((a, b) => orderSelected[req.params.order](a, b));

  res.render('search/render', { books, query });
  }
}
