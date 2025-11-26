console.log("===== TASK 15: Map books to 'Title by Author' =====");
const books = [
    {title: "The Hobbit", author: "J.R.R. Tolkien"},
    {title: "1984", author: "George Orwell"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"}
];
const booksStrings = books.map(book => `${book.title} by ${book.author}`);

console.log("Books strings:", booksStrings);