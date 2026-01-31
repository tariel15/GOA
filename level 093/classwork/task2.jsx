//3) App კომპონენტმა უნდა დააბრუნოს 3 ელემენტი: 2 ღილაკი: მიმატება, გამოკლების და 1 პარაგრაფი რომელშიც ამჟამინდელ რიცხვით მნიშვნლობის შედეგს გამოიტანთ, ამისთვის უნდა გამოიყენოთ useState კაუჭი
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                მიმატება
            </button>
            <button onClick={() => setCount(count - 1)}>
                გამოკლება
            </button>
            <p>მიმდინარე რიცხვი: {count}</p>
        </div>
    );
}

export default App;
