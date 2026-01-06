
// label - ღილაკზე გამოსატანი ტექსტი
// onClick - ფუნქცია, რომელიც შესრულდება დაკლიკებისას
function Button({ label, onClick }) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
