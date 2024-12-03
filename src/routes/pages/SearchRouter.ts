
import express, {Request, Response} from 'express';
import {SearchController} from '../../controllers/SearchController';


const searchRouter = express.Router();
const searchController = new SearchController();


searchRouter.get('/search', searchController.SearchBook);
searchRouter.get('/book/details/:id', (req: Request, res: Response) => {
    searchController.GetBookDetailsById(req, res);
  });


export default searchRouter;
