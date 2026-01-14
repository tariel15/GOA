//6) შექმენით RandomDog კომპონენტი. კომპონენტის ჩატვირთვისას useEffect-ის გამოყენებით წამოიღეთ შემთხვევითი ძაღლის სურათი API-დან და გამოიტანეთ <img> ელემენტში
//https://dog.ceo/api/breeds/image/random
import { useState, useEffect } from "react";

function RandomDog() {
    const [dogImage, setDogImage] = useState("");
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogImage(data.message);
            });
    }, []);

    return (
        <div>
            <h2>Random Dog</h2>
            {dogImage && <img src={dogImage} alt="Random Dog" width="300" />}
        </div>
    );
}

export default RandomDog;

/*
რატომ ვიყენებთ useEffect-ს?
- API call არის გვერდითი ეფექტი (side effect)
- არ უნდა გაეშვას ყოველ რენდერზე
- useEffect + [] უზრუნველყოფს, რომ მონაცემი წამოვიღოთ
მხოლოდ კომპონენტის ჩატვირთვისას
*/
