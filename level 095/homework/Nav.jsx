import React from "react";
import User from "./User";

function Nav({ isLoggedIn }) {
    return (
        <nav>
            <h2>Nav Component</h2>
            <User isLoggedIn={isLoggedIn} />
        </nav>
    );
}

export default Nav;
