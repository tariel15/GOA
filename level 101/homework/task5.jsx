//5) შენახული წიგნები უნდა ინახებოდეს localStorage-ში და გვერდის გადატვირთვის შემდეგ არ იკარგებოდეს

//პროექტის პირობა
//შექმენი ერთგვერდიანი React აპლიკაცია ფუნქციური კომპონენტებით
//გამოიყენე useState და useEffect
//მონაცემები წამოიღე fetch-ის გამოყენებით
//გამოიყენე API:https://www.googleapis.com/books/v1/volumes?q=SEARCH_TEXT
//მოძებნილი წიგნები გამოჩნდეს ცხრილში
//შენახული წიგნების სია ცალკე state-ში უნდა ინახებოდეს
//localStorage გამოიყენე JSON.stringify და JSON.parse-ით
//refresh-ის შემდეგ შენახული წიგნები ავტომატურად უნდა ჩაიტვირთოს
//კოდი დაწერე სუფთად, ლოგიკურად და შეცდომების გარეშე

//ამ დავალების შეფასების კრიტერიუმები
//ან hint-ები მოსწავლეებისთვის
//ან სხვა ანალოგიური API-დავალება (movies, users, weather)
import { useEffect, useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [savedBooks, setSavedBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedBooks = localStorage.getItem("savedBooks");
        if (storedBooks) {
            setSavedBooks(JSON.parse(storedBooks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    }, [savedBooks]);

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
            setError("მონაცემების მიღება ვერ მოხერხდა");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = (book) => {
        const exists = savedBooks.some((b) => b.id === book.id);
        if (!exists) {
            setSavedBooks([...savedBooks, book]);
        }
    };

    return (
        <div>
            <h1>Google Books Search</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="შეიყვანეთ წიგნის სახელი"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
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
                                        <button onClick={() => handleSave(book)}>Save</button>
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
