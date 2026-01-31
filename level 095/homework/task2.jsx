//2) თქვენი სიტყვებით ახსენით useEffect კაუჭი.
//აღწერეთ:
//- რა არის გვერდითი ეფექტი (side effect) React-ში
//- რა განსხვავებაა ჩვეულებრივ ლოგიკასა და useEffect-ში მოთავსებულ ლოგიკას შორის
//- როდის იძახება useEffect კომპონენტის სიცოცხლის ციკლში
//დამატებით განიხილეთ useEffect კაუჭის არგუმენტები:
//- პირველი არგუმენტი (callback ფუნქცია) – რას აკეთებს და როდის სრულდება
//- მეორე არგუმენტი (dependency array) – რისთვის გამოიყენება
//- რა მოხდება თუ dependency array საერთოდ არ გადაეცემა
//- რა მოხდება თუ dependency array ცარიელია
//ასევე დაწერეთ თუ:
//- რას აკეთებს useState
//- როდის იძახება useState
//- ჩამოწერეთ მინიმუმ 2 მაგალითი useState-ის გამოყენებაზე
// useEffect კაუჭის ახსნა JSX ფორმატში

import React, { useState, useEffect } from "react";

function Explanation() {
    /*
    რა არის useEffect?
    useEffect არის React-ის კაუჭი, რომელიც გამოიყენება
    გვერდითი ეფექტების (side effects) სამართავად ფუნქციურ კომპონენტებში.
    */

    /*
    რა არის გვერდითი ეფექტი (Side Effect) React-ში?
    გვერდითი ეფექტი არის ისეთი ლოგიკა, რომელიც არ ეხება JSX-ის დახატვას,
    მაგალითად:
    - API-დან მონაცემების წამოღება
    - document.title-ის შეცვლა
    - event listener-ების დამატება
    - localStorage-თან მუშაობა
    */

    /*
    განსხვავება ჩვეულებრივ ლოგიკასა და useEffect-ში მოთავსებულ ლოგიკას შორის

    ჩვეულებრივი ლოგიკა:
    - სრულდება ყოველ render-ზე
    - არ არის რეკომენდებული გვერდითი ეფექტებისთვის

    useEffect-ში მოთავსებული ლოგიკა:
    - სრულდება render-ის შემდეგ
    - შეგვიძლია ვაკონტროლოთ როდის გაეშვას
    - გამოიყენება გვერდითი ეფექტებისთვის
    */

    /*
    როდის იძახება useEffect კომპონენტის სიცოცხლის ციკლში?
    - კომპონენტის mount-ზე
    - კომპონენტის update-ზე
    - კომპონენტის unmount-ზე (cleanup ფუნქციის საშუალებით)
    */

    // useEffect-ის მაგალითი
    useEffect(() => {
        console.log("Effect შესრულდა");

        // cleanup ფუნქცია
        return () => {
            console.log("Cleanup შესრულდა");
        };
    }, []);

    /*
    useEffect-ის არგუმენტები

    1) callback ფუნქცია
    - შეიცავს გვერდით ეფექტს
    - სრულდება render-ის შემდეგ

    2) dependency array
    - განსაზღვრავს როდის შესრულდეს effect
    */

    /*
    თუ dependency array არ გადაეცემა:
    useEffect შესრულდება ყოველ render-ზე
    */
    useEffect(() => {
        console.log("ყოველ render-ზე");
    });

    /*
    თუ dependency array ცარიელია:
    useEffect შესრულდება მხოლოდ ერთხელ (mount-ზე)
    */
    useEffect(() => {
        console.log("მხოლოდ ერთხელ");
    }, []);

    /*
    თუ dependency array-ში არის მნიშვნელობა:
    useEffect შესრულდება მაშინ, როცა ეს მნიშვნელობა შეიცვლება
    */
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count შეიცვალა");
    }, [count]);

    /*
    ------------------------------------------------
    useState კაუჭი
    */

    /*
    რა არის useState?
    useState გამოიყენება კომპონენტის მდგომარეობის (state) შესანახად.
    */

    /*
    როდის იძახება useState?
    - კომპონენტის პირველ render-ზე
    - აბრუნებს state-ს და setter ფუნქციას
    */

    // useState მაგალითი 1: Counter
    const [number, setNumber] = useState(0);

    // useState მაგალითი 2: Input-ის კონტროლი
    const [text, setText] = useState("");

    // useState მაგალითი 3: Boolean toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1>useEffect და useState ახსნა</h1>

            <h2>Counter</h2>
            <p>{number}</p>
            <button onClick={() => setNumber(number + 1)}>+</button>

            <h2>Controlled Input</h2>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>

            <h2>Toggle</h2>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Open"}
            </button>
        </div>
    );
}

export default Explanation;
