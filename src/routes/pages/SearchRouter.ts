
import express, {Request, Response} from 'express';
import {SearchController} from '../../controllers/SearchController';


const searchRouter = express.Router();
const searchController = new SearchController();


searchRouter.get('/search', searchController.SearchBook);


export default searchRouter;
