function CounterView({ count, onIncrease }) {
    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={onIncrease}>Increase</button>
        </div>
    );
}

export default CounterView;
