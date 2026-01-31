
// count - მიმდინარე რიცხვი
// increment - ფუნქცია, რომელიც ზრდის count-ს
function Counter({ count, increment }) {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>
                Increment
            </button>
        </div>
    );
}

export default Counter;
