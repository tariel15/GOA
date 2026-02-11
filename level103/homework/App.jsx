//3) შექმენით კომპონენტების ჯაჭვი:
//App → Component1 → Component2 → Component3
//App.jsx-ში შექმენით state:
//const [user, setUser] = useState({ name: "Luka", age: 20 });
//props-ით გადააწოდეთ user Component3-მდე.
//Component3-ში გამოიტანეთ user.name და user.age.
//ომენტარებში ახსენით რატომ არის ეს props drilling

import { useState } from "react";
import Component1 from "./Component1";

function App() {
    const [user, setUser] = useState({ name: "Luka", age: 20 });

    return (
        <div>
            <Component1 user={user} />
        </div>
    );
}

export default App;
