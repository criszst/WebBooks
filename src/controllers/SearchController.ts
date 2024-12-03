import { Request, Response } from 'express';
import { getBooks, getBookById } from '../service/GoogleBooksService';

export class SearchController {
  async search(req: Request, res: Response) {
    try {
      let query = req.query.q;
      let books = await getBooks('Clean Code');

      if (query === "" || query === undefined || query === null) {
        res.render('search/render', { books: books, query: 'INSIRA UM LIVRO NA BARRA DE PESQUISA' });
      }

      books = await getBooks(query);

      res.render('search/render', { books: books, query: query });

      query = '';
    } catch (err) {
      console.error(err);
      res.render('search/render', { books: [], query: 'Não foi possivel achar esse livro slk' });
    }
  }

  async getBookDetailsById(req: Request, res: Response) {
    const bookId = req.params.id;

    console.log(bookId)

    if (!bookId) return [];

    const book = await getBookById(bookId);

    res.render('search/detail/detail', { book: book });
  }
}