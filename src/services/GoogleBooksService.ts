import axios from 'axios';

const googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes';

const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';

export async function getBooks(query) {
    const url = `${googleBooksApiUrl}?q=${query}&key=${apiKey}`;
    const response = await axios.get(url);

    //  filtrando apenas os livros que possuem preços 
    // (por algum motivo, tem vários livros duplicados que nao possuem preço e nem uma capa/thumbnail)
    return response.data.items
    .filter(item => item.saleInfo.listPrice !== undefined)
    .slice(0, 8);

}

export async function getBookById(id) {
    const url = `${googleBooksApiUrl}/${id}?key=${apiKey}`;
    const response = await axios.get(url);

    return response.data;
}
