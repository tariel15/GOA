//5) შექმენით LoginForm კომპონენტი, სადაც:
//- username იქნება uncontrolled input
//- password იქნება controlled input
//password-ის ცვლილებაზე მოახდინეთ ვალიდაცია useEffect-ის გამოყენებით.
//კომენტარებში ახსენით რატომ ჯობს პაროლის კონტროლი state-ით
import { useState, useRef, useEffect } from "react";

function LoginForm() {
    // password არის controlled  ინახება React-ის state-ში
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // username არის uncontrolled  ინახება DOM-ში
    const usernameRef = useRef(null);

    // password-ის ვალიდაცია useEffect-ით
    useEffect(() => {
        if (password.length > 0 && password.length < 8) {
            setError("Password must contain at least 8 characters");
        } else {
            setError("");
        }
    }, [password]); // ეშვება ყოველთვის, როცა password იცვლება

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;

        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* 
        Uncontrolled input
        username ინახება DOM-ში და არ საჭიროებს მუდმივ კონტროლს
      */}
            <input
                type="text"
                placeholder="Username"
                ref={usernameRef}
            />

            {/* 
        Controlled input
        password ინახება state-ში და იცვლება onChange-ით
      */}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* ვალიდაციის შედეგი */}
            {error && <p>{error}</p>}

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
