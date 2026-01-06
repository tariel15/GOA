//8) შექმენით Counter კომპონენტი, რომელიც მიიღებს props-ით:- count- increment ფუნქციას App კომპონენტში გამოიყენეთ useState და გადასცით ეს მნიშვნელობები Counter-ს. Counter კომპონენტში ღილაკზე დაჭერისას უნდა იმატებდეს რიცხვი.
import { useState } from "react";
import Counter from "./Counter";

function App() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Counter count={count} increment={increment} />
        </div>
    );
}

export default App;
