import express from 'express';
import path from 'path';

import { routes } from './src/routes';


const app = express();
const port = 8081;


// express to ejs
app.set('view engine', 'ejs');

// definindo as views
app.set('views', path.join(__dirname, 'src', 'views'));

// definindo as pastas do css
app.use(express.static(path.join(__dirname, 'src', 'public')));



app.use('/', routes);
app.listen(port, () => console.log(`Server: http://localhost:${port}`));
