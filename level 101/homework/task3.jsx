//3) მიღებული წიგნები შეინახეთ state-ში და დაარენდერეთ ცხრილის სახით (title, authors, published date)
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
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
        } catch (err) {
            setError("შეცდომა მოხდა მონაცემების მიღებისას");
        } finally {
            setLoading(false);
        }
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
                <table border="1" cellPadding="8">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>Published Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.authors}</td>
                                <td>{book.publishedDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;
