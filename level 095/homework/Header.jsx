import React from "react";
import Nav from "./Nav";

function Header({ isLoggedIn }) {
    return (
        <header>
            <h1>Header Component</h1>
            <Nav isLoggedIn={isLoggedIn} />
        </header>
    );
}

export default Header;
