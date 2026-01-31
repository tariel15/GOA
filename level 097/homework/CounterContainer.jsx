//2) შექმენით CounterContainer და CounterView კომპონენტები.CounterContainer-ში გამოიყენეთ useState რიცხვისთვის.შექმენით ფუნქცია, რომელიც ზრდის რიცხვს.ეს state და ფუნქცია props-ით გადასცით CounterView-ს.CounterView კომპონენტში უნდა იყოს:- პარაგრაფი რიცხვის გამოსატანად- ღილაკი, რომელიც props-ით მიღებულ ფუნქციას გამოიძახებს

import { useState } from "react";
import CounterView from "./CounterView";

function CounterContainer() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <CounterView
                count={count}
                onIncrease={increaseCount}
            />
        </div>
    );
}

export default CounterContainer;
