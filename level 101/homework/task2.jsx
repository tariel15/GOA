//2) handler ფუნქციამ უნდა გამოიძახოს საჯარო API (Google Books API) და მოიტანოს წიგნების სია შეყვანილი ტექსტის მიხედვით
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
            setBooks(data.items || []);
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

            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.volumeInfo.title}</strong>
                        {book.volumeInfo.authors && (
                            <span> — {book.volumeInfo.authors.join(", ")}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
