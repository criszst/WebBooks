
import { Request, Response, NextFunction } from 'express';
import BookModel from '../models/BookModel';
import BookRepository from '../repositories/BookRepository';


async function getBookModelById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = await BookRepository.getBookModelById(parseInt(id));
    if (customer)
        res.json(customer);
    else
        res.sendStatus(404);
}

async function getBook(req: Request, res: Response, next: NextFunction) {
    const customers = await BookRepository.getBookModels();
    res.json(customers);
}


async function postBook(req: Request, res: Response, next: NextFunction) {
    const customer = req.body as BookModel;
    const result = await BookRepository.addBookModel(customer);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

async function patchBook(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = req.body as BookModel;
    const result = await BookRepository.updateBookModel(parseInt(id), customer);
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}

async function deleteBook(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await BookRepository.deleteBookModel(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getBookModelById,
    getBook,
    postBook,
    patchBook,
    deleteBook
}

