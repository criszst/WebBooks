import express, { NextFunction, Request, Response } from 'express';
import path from 'path';


import { SearchController } from './src/controllers/SearchController';

const searchController = new SearchController();

const app = express();
const router = express.Router();

const port = 3000;

// express to ejs
app.set('view engine', 'ejs');

// definindo as views
app.set('views', path.join(__dirname, 'src', 'views'));

// definindo as pastas do css
app.use(express.static(path.join(__dirname, 'src', 'public')));

// app.use('/books/', BookRouter);

// rotas

router.get('/', (req, res) => res.render('index'));
router.get('/index', (req, res) => res.redirect('/'));


router.get('/search', searchController.search);


app.use(router);
app.listen(port, () => console.log(`Server: http://localhost:${port}`));
