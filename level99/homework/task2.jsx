//3) App.jsx-ში შექმენით ფორმა ორი input-ით:
//- username (uncontrolled)
//- password (controlled)
//password-ისთვის გამოიყენეთ useState.
//კომენტარებში დაწერეთ რომელი input არის controlled და რომელი uncontrolled და რატომ
import { useState, useRef } from "react";

function App() {
    // password არის controlled  მისი მნიშვნელობა ინახება React-ის state-ში
    const [password, setPassword] = useState("");

    // username არის uncontrolled  მისი მნიშვნელობა ინახება DOM-ში
    const usernameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // uncontrolled input-ის მნიშვნელობას ვიღებთ ref-ით
        const username = usernameRef.current.value;

        // controlled input-ის მნიშვნელობა მოდის state-დან
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* 
        Uncontrolled input
        არ აქვს value და onChange
        მნიშვნელობას ინახავს DOM და ვიღებთ ref-ით
      */}
            <input
                type="text"
                placeholder="Username"
                ref={usernameRef}
            />

            {/* 
        Controlled input
        აქვს value და onChange
        მნიშვნელობა ინახება React-ის state-ში
      */}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
