import axios from 'axios';

const googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';

export async function getBooks(query) {
    console.log(query)
    if (query === undefined || query === null || query === '') {
        return [];
    }

    else {

        const url = `${googleBooksApiUrl}?q=${query}&key=${apiKey}`;
        const response = await axios.get(url);
        console.log(response.data.items)
        return response.data.items.slice(0, 6);
    }
}
