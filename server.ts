import express, { NextFunction, response } from 'express';
const path = require('path');

import { Router, Request, Response } from 'express';
import BookRouter from './src/routers/BookRouter';

import { getBooks } from './src/service/GoogleBooksService';

const router = express.Router();


const app = express();
const route = Router();

const port = 9091


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, './src/public')));


 
app.use('/books/', BookRouter);

route.get('/', (req: Request, res: Response) => {
    res.render('index');
})

route.get('/index', (req: Request, res: Response) => {
    res.render('index');
})

route.get('/search', async (req: Request, res: Response) => {
  try {
    let query = req.query.q;
    const books = await getBooks(query);

    res.render('search/render', { books: books });
    
    query = '';

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar livros');
  }
});

app.use(route)

app.listen(port, () => console.log(`Server: http://localhost:${port}`))