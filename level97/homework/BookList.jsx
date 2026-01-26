import BookCard from "./BookCard";

function BookList({ books, onAdd }) {
    return (
        <div>
            {books.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    onAdd={onAdd}
                    showAdd
                />
            ))}
        </div>
    );
}

export default BookList;
