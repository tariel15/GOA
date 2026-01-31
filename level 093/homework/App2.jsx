//5) შექმენით List და ListItem კომპონენტები. App კომპონენტში შექმენით სია (array) state-ის გამოყენებით. List კომპონენტს props-ით გადასეცით სია, ხოლო ListItem კომპონენტს თითო ელემენტი ცალ-ცალკე. სია უნდა დარენდერდეს map-ის გამოყენებით.
import { useState } from "react";
import List from "./List";

function App() {
    const [items, setItems] = useState([
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ]);

    return (
        <div>
            <h2>Technology List</h2>
            <List items={items} />
        </div>
    );
}

export default App;
