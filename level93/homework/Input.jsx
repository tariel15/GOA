
// value - input-ის მიმდინარე მნიშვნელობა
// onChange - ფუნქცია, რომელიც გაეშვება ტექსტის შეცვლისას
function Input({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="შეიყვანეთ ტექსტი"
        />
    );
}

export default Input;
