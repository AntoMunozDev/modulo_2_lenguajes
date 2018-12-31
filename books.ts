interface Book {
    title: string,
    isRead: boolean,
}
   
const isBookRead = (books: Array<Book>, titleToSearch: string): boolean => {
    const book = books.find((element) => element.title == titleToSearch);
    return book ? book.isRead : false;
}

const books: Array<Book> = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];

console.log(isBookRead(books,"Devastación")); // true
console.log(isBookRead(books,"Canción de hielo y fuego")); // false
console.log(isBookRead(books,"Los Pilares de la Tierra")); // false