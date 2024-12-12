
import express, {Request, Response} from 'express';
import {SearchController} from '../../controllers/SearchController';


const searchRouter = express.Router();
const searchController = new SearchController();


searchRouter.get('/search', searchController.SearchBook);

searchRouter.get('/search/order/:order/:query', searchController.BookFilter);


export default searchRouter;
