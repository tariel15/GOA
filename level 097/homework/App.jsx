//პროექტი – Book Library App
//შექმენით React აპლიკაცია Book Library App, რომელიც მომხმარებელს მისცემს საშუალებას მოძებნოს წიგნები ინტერნეტში და დაამატოს ისინი საკუთარ ბიბლიოთეკაში. წიგნების მოძიებისთვის გამოიყენეთ Google Books API შემდეგი მისამართით:
//https://www.googleapis.com/books/v1/volumes?q=${e.target.name.value}
//მომხმარებლის მიერ ინფუთში შეყვანილი ტექსტი უნდა გადაეცეს q პარამეტრს.

//აპლიკაციაში უნდა იყოს:

//საძიებო ინფუთი და ღილაკი, რომლის დაჭერისას იგზავნება მოთხოვნა API-ზე
//მოძიებული წიგნების სია (სათაური, ავტორი, სურათი, აღწერა)
//ღილაკი თითოეულ წიგნზე, რომლითაც ის დაემატება პირად ბიბლიოთეკაში
//შენახული წიგნების ცალკე სია
//შესაძლებლობა წიგნის სტატუსის მონიშვნის (read / unread)
//ყველა შენახული მონაცემი უნდა ინახებოდეს localStorage-ში, რათა გვერდის გადატვირთვის შემდეგაც დარჩეს ინფორმაცია
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Library from "./components/Library";

function App() {
    const [books, setBooks] = useState([]);
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("library"));
        if (saved) {
            setLibrary(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("library", JSON.stringify(library));
    }, [library]);

    const searchBooks = async (query) => {
        const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        const data = await res.json();
        setBooks(data.items || []);
    };

    const addToLibrary = (book) => {
        const exists = library.find(item => item.id === book.id);
        if (!exists) {
            setLibrary([...library, { ...book, status: "unread" }]);
        }
    };

    const toggleStatus = (id) => {
        setLibrary(
            library.map(book =>
                book.id === id
                    ? { ...book, status: book.status === "read" ? "unread" : "read" }
                    : book
            )
        );
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>📚 Book Library App</h1>

            <SearchBar onSearch={searchBooks} />

            <h2>Search Results</h2>
            <BookList books={books} onAdd={addToLibrary} />

            <h2>My Library</h2>
            <Library books={library} onToggle={toggleStatus} />
        </div>
    );
}

export default App;
