import React from "react";

function User({ isLoggedIn }) {
    return (
        <div>
            <h3>User Component</h3>
            <p>
                {isLoggedIn
                    ? "Hello User"
                    : "Please log in to your account"}
            </p>
        </div>
    );
}

export default User;
