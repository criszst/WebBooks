import axios from 'axios';

const googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';

export async function getBooks(query) {
    console.log(query)

    // ${googleBooksApiUrl}?q=${query}&key=${apiKey}&langRestrict=pt
    const url = `${googleBooksApiUrl}?q=${query}&key=${apiKey}`;
    const response = await axios.get(url);

    console.log(response.data.items)

    // removendo livros sem categorias (e, possivelmente, capas)
    // .filter(item => item.volumeInfo.categories !== undefined)
    return response.data.items
    .slice(0, 8);

}
