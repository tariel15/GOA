//4) შექმენით CounterAlert კომპონენტი. შექმენით count მდგომარეობა. ღილაკზე დაჭერისას გაზარდეთ count 1-ით. useEffect-ის დახმარებით გამოიტანეთ alert ტექსტით "Lucky number", როდესაც count გაუტოლდება 7-ს. კომენტარებში ახსენით რატომ უნდა იყოს ეს ლოგიკა useEffect-
import { useState, useEffect } from "react";

function CounterAlert() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // ეს არის გვერდითი ეფექტი (side effect),
        // რადგან alert არ არის JSX-ის რენდერის ნაწილი
        // და პირდაპირ ახდენს გავლენას browser-ის ქცევაზე
        if (count === 7) {
            alert("Lucky number");
        }
    }, [count]);

    return (
        <div>
            <h2>Counter Alert</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default CounterAlert;

/*
რატომ უნდა იყოს ეს ლოგიკა useEffect-ში?
- alert არის გვერდითი ეფექტი და არა UI-ის რენდერი
- თუ alert ლოგიკა პირდაპირ JSX-ში ან კომპონენტის body-ში იქნება,
ის შეიძლება გაეშვას ყოველ რენდერზე
- useEffect გვაძლევს კონტროლს, როდის უნდა შესრულდეს ეს ლოგიკა
- dependency array [count] უზრუნველყოფს, რომ alert გაეშვას
მხოლოდ მაშინ, როცა count შეიცვლება და კონკრეტულ პირობას აკმაყოფილებს
*/
