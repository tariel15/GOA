//11) App.jsx-ში შექმენით isLoggedIn ცვლადი ( (true ან false).
//- გადასცით props-ად Header კომპონენტს
//- Header-იდან Nav კომპონენტს
//- Nav-იდან User კომპონენტს
//User კომპონენტში:
//- თუ isLoggedIn === true → დააბრუნეთ "Hello User"
//- სხვა შემთხვევაში → "Please log in to your account"
import React from "react";
import Header from "./Header";

function App() {
    const isLoggedIn = true;

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
        </div>
    );
}

export default App;
