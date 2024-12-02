import { Request, Response } from 'express';
import { getBooks } from '../service/GoogleBooksService';

export class SearchController {
  async search(req: Request, res: Response) {
    try {
      let query = req.query.q;

      if (query === "" || query === undefined || query === null) {
          res.render('search/render', { books: [] });
      }

      const books = await getBooks(query);

      res.render('search/render', { books: books, query: query });

      query = '';
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar livros');
    }
  }
}