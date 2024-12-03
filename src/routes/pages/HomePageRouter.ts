import  express, {Response, Request} from 'express';

const HomePageRouter = express.Router();

HomePageRouter.get('/', (req: Request, res: Response) => res.render('index'));

HomePageRouter.get('/index', (req: Request, res: Response) => res.redirect('/'));

export default HomePageRouter;