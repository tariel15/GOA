import { useState } from "react";
import CalculatorUI from "./CalculatorUI";

function CalculatorContainer() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [sum, setSum] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setSum(Number(num1) + Number(num2));
    }

    return (
        <CalculatorUI
            num1={num1}
            num2={num2}
            sum={sum}
            setNum1={setNum1}
            setNum2={setNum2}
            onSubmit={handleSubmit}
        />
    );
}

export default CalculatorContainer;
