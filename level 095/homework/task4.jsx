//4) თქვენი სიტყვებით ახსენით შემდეგი ცნებები:
//- state
//- hook
//- built-in hook
//- useState
//- setter function
//- component re-render
import React, { useState } from "react";

function ReactConceptsExplanation() {
    /*
    state
    State არის კომპონენტის შიდა მონაცემი, რომელიც გამოიყენება
    ინფორმაციის შესანახად და შეუძლია შეიცვალოს დროთა განმავლობაში.
    state-ის შეცვლისას React ახდენს კომპონენტის ხელახლა რენდერს.
    */

    /*
    hook
    Hook არის სპეციალური ფუნქცია React-ში, რომელიც გვაძლევს საშუალებას
    ფუნქციურ კომპონენტებში გამოვიყენოთ React-ის შესაძლებლობები
    (state, lifecycle და სხვა ლოგიკა).
    */

    /*
    built-in hook
    Built-in hook არის React-ში უკვე ჩაშენებული hook.
    ისინი მზადაა გამოსაყენებლად.
    მაგალითები: useState, useEffect, useRef, useContext
    */

    /*
    useState
    useState არის built-in hook, რომელიც გამოიყენება
    კომპონენტის state-ის შესაქმნელად და სამართავად.
    */

    /*
    setter function
    Setter function არის ფუნქცია, რომელსაც useState გვიბრუნებს.
    მისი საშუალებით ვცვლით state-ის მნიშვნელობას.
    setter-ის გამოძახება იწვევს კომპონენტის re-render-ს.
    */

    /*
    component re-render
    Component re-render ნიშნავს, რომ React თავიდან იძახებს
    კომპონენტის ფუნქციას და თავიდან აგენერირებს JSX-ს.
    ეს ხდება მაშინ, როცა იცვლება state ან props.
    */

    // useState მაგალითი
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>React ძირითადი ცნებები</h1>

            <p>Counter value: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default ReactConceptsExplanation;
