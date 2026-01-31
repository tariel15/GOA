
// გამოხატავს UI-ის ნაწილს, მაგალითად ბარათს
function Card() {
    const title = "Card Title";

    return (
        <div className="card">
            {/* className გამოიყენება class-ის მაგივრად JSX-ში, რადგან class არის JavaScript-ში დაცული სიტყვა */}
            <h2>{title}</h2>
            {/* JavaScript expression JSX-ში */}
            <p>{2 + 3} items in the card</p>
        </div>
    );
}

export default Card;
