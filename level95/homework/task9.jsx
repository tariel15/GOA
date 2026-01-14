//9) შექმენით მდგომარეობა isLightMode (საწყისი მნიშვნელობა false).
//- შექმენით toggleTheme ფუნქცია
//- ღილაკზე დაჭერისას შეცვალეთ isLightMode
//- თუ isLightMode === false → background შავი
//- თუ true → background თეთრი
//გამოიყენეთ ternary operator და style ატრიბუტი
import React, { useState } from "react";

function ThemeToggle() {
    const [isLightMode, setIsLightMode] = useState(false);
    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div
            style={{
                backgroundColor: isLightMode ? "white" : "black",
                color: isLightMode ? "black" : "white",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            <h1>Theme Toggle Example</h1>
            <p>Current mode: {isLightMode ? "Light" : "Dark"}</p>

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemeToggle;
