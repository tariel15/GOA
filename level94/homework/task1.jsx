//2) თქვენი სიტყვებით ახსენით რა არის useEffect hook. დაწერეთ როდის იძახება იგი კომპონენტში და რა განსხვავებაა useEffect-ის გარეშე და useEffect-ით შესრულებულ ლოგიკას შორის
// useEffect არის React hook, რომელიც გამოიყენება side effect-ების შესასრულებლად
// side effect ნიშნავს ისეთ ლოგიკას, რომელიც არ ეხება პირდაპირ JSX-ის რენდერს
// მაგალითად: API-დან მონაცემების წამოღება, timer-ები, DOM-ზე მუშაობა და ა.შ.

import { useEffect, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component rendered ან count შეიცვალა");
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Example;

/*
განსხვავება useEffect-ის გარეშე და useEffect-ით:

- ლოგიკა კომპონენტის body-ში შესრულდება ყოველ რენდერზე
- შეიძლება გამოიწვიოს ზედმეტი API call-ები და infinite loop

- ლოგიკა შესრულდება კონტროლირებადად
- dependency array განსაზღვრავს როდის უნდა გაეშვას effect
*/
