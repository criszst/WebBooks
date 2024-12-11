
import express, {Request, Response} from 'express';
import {SearchController} from '../../controllers/SearchController';
import exp from 'constants';

const bookRouter = express.Router();

const searchController = new SearchController();

bookRouter.get('/book/categories/', (req: Request, res: Response) => {
    res.send('pagina nao implementada -> all categories');
  });

bookRouter.get('/book/categories/:category', (req: Request, res: Response) => {
    res.send(`pagina nao implementada -> ${req.params.category}`);
  });

bookRouter.get('/book/details/:id', (req: Request, res: Response) => {
    searchController.GetBookDetailsById(req, res);
  });

export default bookRouter;