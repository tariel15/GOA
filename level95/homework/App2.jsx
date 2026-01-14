//10) App.jsx-ში შექმენით handleClick ფუნქცია.
//- გადასცით props-ად Parent კომპონენტს
//- Parent კომპონენტში გამოიძახეთ Child კომპონენტი
//- Child კომპონენტში ღილაკზე დაჭერისას გამოიძახეთ props-ით მიღებული handleClick ფუნქცია
import React from "react";
import Parent from "./Parent";

function App() {
    const handleClick = () => {
        alert("Button clicked from Child!");
    };

    return (
        <div>
            <h1>Props Function Example</h1>
            <Parent handleClick={handleClick} />
        </div>
    );
}

export default App;
