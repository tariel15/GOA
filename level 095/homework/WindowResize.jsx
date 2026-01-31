//12) შექმენით WindowResize კომპონენტი.
//გამოიყენეთ useState და useEffect.
//დავალება:
//- შექმენით მდგომარეობა windowWidth, რომლის საწყისი მნიშვნელობა იქნება window.innerWidth
//- შექმენით handleResize ფუნქცია, რომელიც განაახლებს windowWidth მდგომარეობას
//- useEffect-ში დაამატეთ resize eventListener
//- useEffect-ის cleanup ფუნქციის გამოყენებით წაშალეთ eventListener
//ეკრანზე გამოიტანეთ მიმდინარე ეკრანის სიგანე.
//კომენტარებში ახსენით:
//- რატომ არის resize eventListener გვერდითი ეფექტი (side effect)
//- როდის იძახება cleanup ფუნქცია
//- რა პრობლემა შეიძლება წარმოიშვას cleanup-ის გარეშე
import React, { useState, useEffect } from "react";

function WindowResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        //resize eventListener არის გვერდითი ეფექტი,
        // რადგან ვუსმენთ გარე გარემოს (window) ცვლილებებს
        window.addEventListener("resize", handleResize);
        return () => {

            window.removeEventListener("resize", handleResize);
        };
    }, []);
    /*
    resize eventListener გვერდითი ეფექტია, რადგან:
        - ის არ ეხება უშუალოდ JSX-ის დახატვას
        - ურთიერთქმედებს გარე გარემოსთან (window object)

    cleanup ფუნქცია იძახება:
        - component-ის unmount-ზე
        - ან თუ dependency array შეიცვლება (აქ ცარიელია, ამიტომ მხოლოდ unmount)

    პრობლემა cleanup-ის გარეშე:
        - listener დარჩება memory-ში (memory leak)
        - შეიძლება გამოიწვიოს არასწორი re-render-ები
        - CPU-ს გადატვირთვა, რადგან ფუნქცია იყენებს state-ს ყოველ resize-ზე
    */

    return (
        <div>
            <h2>Window Resize Example</h2>
            <p>Current window width: {windowWidth}px</p>
        </div>
    );
}

export default WindowResize;
