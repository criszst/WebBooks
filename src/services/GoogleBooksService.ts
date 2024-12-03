import axios from 'axios';

const googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes';

const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';

/**
     * Retorna uma lista de livros com base na busca realizada,
     * porém apenas livros que possuem preços e uma capa/thumbnail
     * Limitado a 8 resultados.
     *
     * Parãmetro:
     *  - `query`     Um livro para pesquisar no Google Book Api.
*/

export async function getBooks(query) {
    const url = `${googleBooksApiUrl}?q=${query}&key=${apiKey}`;
    const response = await axios.get(url);

    //  filtrando apenas os livros que possuem preços 
    // (por algum motivo, tem vários livros duplicados que nao possuem preço e nem uma capa/thumbnail)
    return response.data.items
    .filter(item => item.saleInfo.listPrice !== undefined)
    .slice(0, 8);

}


/**
     * Retorna os detalhes do livro com base no ID,
     *
     * Parãmetro:
     *  - `id`     O id do livro
*/
export async function getBookById(id) {
    const url = `${googleBooksApiUrl}/${id}?key=${apiKey}`;
    const response = await axios.get(url);

    return response.data;
}
