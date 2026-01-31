//8) შექმენით მდგომარეობა მომხმარებლის ობიექტისთვის:
//{name: "Your name", password: "123"}
//- ღილაკზე დაჭერისას შეცვალეთ name მნიშვნელობა
//- მეორე ღილაკზე დაჭერისას დააბრუნეთ ობიექტი საწყის მდგომარეობაში
import React, { useState } from "react";

function UserObject() {
    const initialState = { name: "Your name", password: "123" };
    const [user, setUser] = useState(initialState);
    const changeName = () => {
        setUser({ ...user, name: "New Name" });
    };
    const resetUser = () => {
        setUser(initialState);
    };

    return (
        <div>
            <h2>User Object</h2>

            <p>Name: {user.name}</p>
            <p>Password: {user.password}</p>

            <button onClick={changeName}>Change Name</button>
            <button onClick={resetUser}>Reset User</button>
        </div>
    );
}

export default UserObject;
