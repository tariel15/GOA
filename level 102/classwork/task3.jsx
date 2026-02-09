//კომენტარებით რა არის custom hook, რა კონვეციებს და პრინციპებს უნდა მიყვეს, რაში შეიძლება გამოვიყენოთ და ახსენით კაუჭა კომენტარებით

// useToggle.js
//export const useToggle = (initialState = false) => {
    // Use the `initialState` argument to initialize the state
//    const [state, setState] = useState(initialState);

    // Perform an animation each time the state changes
//    useEffect(() => {
//        performToggleAnimation(state);
//    }, [state])

    // Create an easy-to-use toggle function
//    const toggle = () => { setState(state => !state) }

    // Return the state value and the toggle function
//    return [state, toggle]
//}

import { useState, useEffect } from "react";

/*
    Custom Hook:
    - არის ფუნქცია, რომელიც იყენებს React hook-ებს
    - გამოიყენება ლოგიკის ხელახლა გამოყენებისთვის
    - არ აბრუნებს JSX-ს
*/

/*
    წესები:
    1) სახელი იწყება "use"-ით
    2) იძახება მხოლოდ component-იდან ან სხვა hook-იდან
*/

export const useToggle = (initialState = false) => {
  // boolean state (true / false)
    const [state, setState] = useState(initialState);

  // გაეშვება როცა state შეიცვლება (side effect)
    useEffect(() => {
    performToggleAnimation(state);
    }, [state]);

  // ცვლის state-ს საპირისპირო მნიშვნელობაზე
    const toggle = () => {
    setState(prev => !prev);
    };

  // ვაბრუნებთ state-ს და toggle ფუნქციას
    return [state, toggle];
};
