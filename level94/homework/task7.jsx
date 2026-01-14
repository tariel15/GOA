//9) შექმენით AdviceGenerator კომპონენტი. კომპონენტის ჩატვირთვისას useEffect-ის გამოყენებით წამოიღეთ რჩევა API-დან და გამოიტანეთ ტექსტი <p> ელემენტში. დაამატეთ ღილაკი "New advice", რომელზე დაჭერისას შეიცვლება მდგომარეობა და გამოიძახება useEffect ხელახლა
//https://api.adviceslip.com/advice
import { useState, useEffect } from "react";

function AdviceGenerator() {
    const [advice, setAdvice] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                setAdvice(data.slip.advice);
            });
    }, [refresh]);

    return (
        <div>
            <h2>Advice Generator</h2>
            <p>{advice}</p>
            <button onClick={() => setRefresh(refresh + 1)}>
                New advice
            </button>
        </div>
    );
}

export default AdviceGenerator;

/*
რატომ მუშაობს ეს ასე?
- API call არის გვერდითი ეფექტი, ამიტომ useEffect-ში უნდა იყოს
- refresh state გამოიყენება მხოლოდ იმისთვის,
რომ useEffect ხელახლა გაეშვას
- state-ის ცვლილება იწვევს კომპონენტის re-render-ს
- useEffect dependency array [refresh] აკონტროლებს,
როდის უნდა შესრულდეს effect
*/
