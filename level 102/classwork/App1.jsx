//2) შექმენით useToggle კაუჭა რომელიც დააბრუნებს თავის მდგომარეობას და setter-ის ნაცვლად toggle ფუქნციას რომელიც თვითონ გამოიძახებს setter-ს და state-ის ! უარყოფით მნიშვნელობით განაახლებს ამჟამინდელს. გამოიყენეთ ეს კაუჭა საიტზე dark-mode/light-mode-ის სამართავად
import React from "react";
import useToggle from "./useToggle";
import "./styles.css";

function App() {
    const [isDarkMode, toggleDarkMode] = useToggle(false);

    return (
        <div className={isDarkMode ? "dark" : "light"}>
            <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>

            <button onClick={toggleDarkMode}>
                Switch Mode
            </button>
        </div>
    );
}

export default App;
