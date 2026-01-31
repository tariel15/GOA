//9) მოცემული კოდის მიხედვით შექმენით ფუნქციური კომპონენტი info, რომელიც აბრუნებს <p> ტექსტით "Hello React". შემდეგ გამოიყენეთ ReactDOM.createRoot და root.render ისე, რომ ეკრანზე გამოჩნდეს info კომპონენტი info() გამოძახებით. კომენტარებში ახსენით რას აკეთებს createRoot და render
import React from "react";
import ReactDOM from "react-dom/client";

function info() {
    return <p>Hello React</p>;
}

// createRoot ქმნის React-ის root-ს,
// რომელიც აკავშირებს React-ს რეალურ DOM ელემენტთან (მაგ. <div id="root"></div>)
const root = ReactDOM.createRoot(document.getElementById("root"));

// render მეთოდი არენდერებს (აჩვენებს) React კომპონენტს ეკრანზე
// აქ ვიძახებთ info() ფუნქციას, რომელიც აბრუნებს JSX-ს
root.render(info());
