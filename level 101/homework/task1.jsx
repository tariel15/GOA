//1) შექმენით მთავარი კომპონენტი, სადაც იქნება საძიებო ფორმა (input + button). input-ში მომხმარებელი შეიყვანს წიგნის სახელწოდებას და ფორმის დადასტურებისას უნდა გამოიძახოთ handler ფუნქცია
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("მომხმარებელმა მოძებნა წიგნი:", query);
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
        </div>
    );
}

export default App;
