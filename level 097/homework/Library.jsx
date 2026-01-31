import BookCard from "./BookCard";

function Library({ books, onToggle }) {
    return (
        <div>
            {books.length === 0 && <p>No saved books</p>}
            {books.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    onToggle={onToggle}
                    showStatus
                />
            ))}
        </div>
    );
}

export default Library;
