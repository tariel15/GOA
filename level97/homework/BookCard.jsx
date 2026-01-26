function BookCard({ book, onAdd, onToggle, showAdd, showStatus }) {
    const info = book.volumeInfo;

    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{info.title}</h3>
            <p><strong>Author:</strong> {info.authors?.join(", ")}</p>

            {info.imageLinks && (
                <img src={info.imageLinks.thumbnail} alt={info.title} />
            )}

            <p>{info.description?.slice(0, 100)}...</p>

            {showAdd && (
                <button onClick={() => onAdd(book)}>Add to Library</button>
            )}

            {showStatus && (
                <>
                    <p>Status: {book.status}</p>
                    <button onClick={() => onToggle(book.id)}>
                        Mark as {book.status === "read" ? "Unread" : "Read"}
                    </button>
                </>
            )}
        </div>
    );
}

export default BookCard;
