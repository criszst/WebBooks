import express, { NextFunction, Request, Response } from 'express';
import path from 'path';


import { SearchController } from './src/controllers/SearchController';

const searchController = new SearchController();

const app = express();
const router = express.Router();

const port = 8081;

// express to ejs
app.set('view engine', 'ejs');

// definindo as views
app.set('views', path.join(__dirname, 'src', 'views'));

// definindo as pastas do css
app.use(express.static(path.join(__dirname, 'src', 'public')));

// app.use('/books/', BookRouter);

// index
router.get('/', (req, res) => res.render('index'));
router.get('/index', (req, res) => res.redirect('/'));


// search
router.get('/search', searchController.search);

router.get('/search/details/:id', (req: Request, res: Response) => {
    searchController.getBookDetailsById(req, res);
  });


app.use(router);
app.listen(port, () => console.log(`Server: http://localhost:${port}`));
