import express from 'express';

import SearchRouter  from './pages/SearchRouter';
import HomePageRouter from './pages/HomePageRouter';

export const routes = express.Router();

routes.use(HomePageRouter);
routes.use(SearchRouter);
