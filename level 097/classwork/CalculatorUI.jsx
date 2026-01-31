function CalculatorUI({ num1, num2, sum, setNum1, setNum2, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
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

export default CalculatorUI;
