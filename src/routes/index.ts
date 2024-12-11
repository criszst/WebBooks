import express from 'express';

import HomePageRouter from './pages/HomePageRouter';
import BookRouter from './pages/BookRouter';
import SearchRouter  from './pages/SearchRouter';


export const routes = express.Router();

routes.use(HomePageRouter);
routes.use(BookRouter);
routes.use(SearchRouter);

