// Card კომპონენტი იღებს props.children-ს
// children-ში შეიძლება იყოს ნებისმიერი JSX
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default Card;
