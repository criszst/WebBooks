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

    const order = {
      '1': (a, b) => a.title.localeCompare(b.title),
      '2': (a, b) => b.title.localeCompare(a.title),

      '3': async (a, b) => 
            parseFloat(await getBooks(book).then(c => c.saleInfo.listPrice.amount)) 
           - parseFloat(await getBooks(book).then(c => c.saleInfo.listPrice.amount)),
      '4': (a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.'))
  };


    const sortedBooks = order[req.params.order](book);

    res.send('Test -> BookFilter: ' + req.params.order + ' ' + req.params.query);
  }
}
