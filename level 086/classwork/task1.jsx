//1) React-ში შექმენით ცვლადი username თქვენი სახელით, შემდეგ შეამომწეთ თუ არსებობს ეს სახელი react-ით გამოიტანეთ პარაგრაფი რომელშიც ეწერება hello [username] სხვა შემთხევაში hello world
import React from 'react';

function App() {

    const name = 'tariel'

    if (name) {
        return (<p>Hello ${name}</p>)
    } else {
        return (<p>Hello world</p>)
    }
}

export default App