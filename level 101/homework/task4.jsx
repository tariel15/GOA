//4) თითოეულ წიგნს უნდა ჰქონდეს "Save" ღილაკი, რომელზე დაჭერისას წიგნი დაემატება შენახულ წიგნების სიას
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [savedBooks, setSavedBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`
            );
            const data = await response.json();

            const formattedBooks = (data.items || []).map((item) => ({
                id: item.id,
                title: item.volumeInfo.title || "N/A",
                authors: item.volumeInfo.authors?.join(", ") || "N/A",
                publishedDate: item.volumeInfo.publishedDate || "N/A",
            }));

            setBooks(formattedBooks);
        } catch {
            setError("შეცდომა მოხდა მონაცემების მიღებისას");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = (book) => {
        const alreadySaved = savedBooks.find((b) => b.id === book.id);
        if (alreadySaved) return;

        setSavedBooks([...savedBooks, book]);
    };

    return (
        <div>
            <h1>წიგნების ძიება</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="შეიყვანეთ წიგნის სახელწოდება"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">ძებნა</button>
            </form>

            {loading && <p>იტვირთება...</p>}
            {error && <p>{error}</p>}

            {books.length > 0 && (
                <>
                    <h2>ძიების შედეგები</h2>
                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Published Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.authors}</td>
                                    <td>{book.publishedDate}</td>
                                    <td>
                                        <button onClick={() => handleSave(book)}>
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {savedBooks.length > 0 && (
                <>
                    <h2>შენახული წიგნები</h2>
                    <table border="1" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Published Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedBooks.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.authors}</td>
                                    <td>{book.publishedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default App;
