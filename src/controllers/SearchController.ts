import { Request, Response } from 'express';
import { getBooks } from '../service/GoogleBooksService';

export class SearchController {
  async search(req: Request, res: Response) {
    try {
      let query = req.query.q;
      
      const books = await getBooks(query);

      res.render('search/render', { books: books });

      query = '';
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar livros');
    }
  }
}