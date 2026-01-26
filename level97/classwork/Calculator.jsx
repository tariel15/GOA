//1) შექმენით კალკულატორის კომპონენტი რომელიც გამოიტანს ფორმას 2 შესატანი ველით, ღილაკით და პარაგრაფით. ღილაკზე დაჭერისას (მოხდება ფორმის დადასტურება onSubmit-ზე handler ფუნქციის გამოძახება) უნდა შეიკრიბოს შესტან ველებში მყოფი რიცხვები და განახლდეს ჯამის მდგომარეობაში შენახული ამჟამინდელი მნიშვნელობა (რომელიც თავიდან ნულია) პარაგრაფში უნდა გამოვიდეს ჯამის მდგომარეობა Sum: ტექსთან ერთად
import { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [sum, setSum] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        const result = Number(num1) + Number(num2);
        setSum(result);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="First number"
            />

            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Second number"
            />

            <button type="submit">Calculate</button>

            <p>Sum: {sum}</p>
        </form>
    );
}

export default Calculator;
