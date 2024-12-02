import { Request, Response } from 'express';
import { getBooks } from '../service/GoogleBooksService';

export class SearchController {
  async search(req: Request, res: Response) {
    try {
      let query = req.query.q;

      if (query === "" || query === undefined || query === null) {
          res.render('search/render', { books: [], query: 'O campo precisa ser preenchido ne fio' });
      }

      const books = await getBooks(query);

      res.render('search/render', { books: books, query: query });

      query = '';
    } catch (err) {
      console.error(err);
      res.render('search/render', { books: [], query: 'Não foi possivel achar esse livro slk' });
    }
  }
}