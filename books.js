function isBookRead(books, titleToSearch) {
    const book = books.find((element) => element.title == titleToSearch);
    return book ? book.isRead : false;
}

var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books,"Devastación")); // true
console.log(isBookRead(books,"Canción de hielo y fuego")); // false
console.log(isBookRead(books,"Los Pilares de la Tierra")); // false
