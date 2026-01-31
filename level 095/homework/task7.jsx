//7) შექმენით მდგომარეობა, რომელშიც შეინახავთ ხილების მასივს.
//- ღილაკზე დაჭერისას დაამატეთ "orange"
//- მეორე ღილაკზე დაჭერისას გაასუფთავეთ მასივი
//- გამოიტანეთ შედეგი ეკრანზე
import React, { useState } from "react";

function Fruits() {
    const [fruits, setFruits] = useState(["apple", "banana"]);
    const addOrange = () => {
        setFruits([...fruits, "orange"]);
    };
    const clearFruits = () => {
        setFruits([]);
    };

    return (
        <div>
            <h2>Fruits List</h2>

            <button onClick={addOrange}>
                Add Orange
            </button>

            <button onClick={clearFruits}>
                Clear Fruits
            </button>

            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default Fruits;
