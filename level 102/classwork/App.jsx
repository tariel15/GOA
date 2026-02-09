import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useLogUpdate from "./hooks/useLogUpdate";
// import './App.css'


function App() { 
    // const [name, setName] = useLocalStorage('usernameField', '');
    const [name, setName] = useLogUpdate('');
    // custom hook - კაუჭა რომელსაც ვქმნი ჩემით

    return (
        // controlled component
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
            <h2>{name}</h2>
        </>
    )
}

export default App;
