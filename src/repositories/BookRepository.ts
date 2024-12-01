import BookModel from '../models/BookModel';

const books: BookModel[] = [];

async function getBookModelById(id: number): Promise<BookModel | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(books.find(c => c.id === id));
    })
}

async function getBookModels(): Promise<BookModel[]> {
    return new Promise((resolve, reject) => {
        return resolve(books);
    })
}


async function addBookModel(bookParam: BookModel): Promise<BookModel> {
    return new Promise((resolve, reject) => {
        if (!bookParam.title || !bookParam.author)
            return reject(new Error(`Invalid BookModel.`));

        const newBookModel = new BookModel(bookParam.title, bookParam.author);
        books.push(newBookModel);

        return resolve(newBookModel);
    })
}

async function updateBookModel(id: number, newBookModel: BookModel): Promise<BookModel | undefined> {
    return new Promise((resolve, reject) => {
        const index = books.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newBookModel.title && books[index].title !== newBookModel.title)
                books[index].title = newBookModel.title;

            if (newBookModel.author && books[index].author !== newBookModel.author)
                books[index].author = newBookModel.author;

            return resolve(books[index]);
        }

        return resolve(undefined);
    })
}

async function deleteBookModel(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = books.findIndex(c => c.id === id);
        if (index >= 0) {
            books.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getBookModelById,
    getBookModels,
    deleteBookModel,
    addBookModel,
    updateBookModel
}

