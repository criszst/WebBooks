export default class BookModel {
    id: number;
    title: string;
    author: string;
    
    private static nextId = 1;
 
    constructor(title: string, author: string) {
        this.id = BookModel.nextId++;
        this.title = title;
        this.author = author;
    }
}