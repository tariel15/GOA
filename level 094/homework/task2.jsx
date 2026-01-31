//3) შექმენით BackgroundColor კომპონენტი. გამოიყენეთ useState და useEffect. შექმენით მდგომარეობა სახელად color საწყისი მნიშვნელობით "white". შექმენით რამდენიმე ღილაკი (Red, Green, Blue, Pink). useEffect-ის გამოყენებით შეცვალეთ document.body-ის backgroundColor ყოველ ჯერზე, როდესაც color მდგომარეობა შეიცვლება. კომენტარებით ახსენით რატომ არის ეს გვერდითი ეფექტი
import { useState, useEffect } from "react";

function BackgroundColor() {
    const [color, setColor] = useState("white");

    useEffect(() => {
        // ეს არის გვერდითი ეფექტი (side effect),
        // რადგან ჩვენ ვცვლით browser-ის DOM-ს (document.body),
        // რაც არ არის React-ის JSX რენდერის ნაწილი
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div>
            <h2>Background Color Changer</h2>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("pink")}>Pink</button>
        </div>
    );
}

export default BackgroundColor;

/*
რატომ არის ეს გვერდითი ეფექტი?
- ჩვენ პირდაპირ ვმუშაობთ browser-ის DOM-ზე (document.body)
- ეს ცვლილება ხდება React-ის რენდერის გარეთ
- React არ აკონტროლებს document.body-ის backgroundColor-ს
- ამიტომ ასეთი ლოგიკა აუცილებლად უნდა იყოს useEffect-ში
*/
