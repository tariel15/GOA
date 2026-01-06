//4) შექმენით App კომპონენტი, სადაც state-ში იქნება ტექსტი. შექმენით Input კომპონენტი, რომელსაც props-ით გადასცემთ:- value- onChange ფუნქციას input-ში ჩაწერილი ტექსტი უნდა აისახოს ეკრანზე პარაგრაფში.
import { useState } from "react";
import Input from "./Input";

function App() {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <Input value={text} onChange={handleChange} />
            <p>შეყვანილი ტექსტი: {text}</p>
        </div>
    );
}

export default App;
