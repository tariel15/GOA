//5) შექმენით Card კომპონენტი, რომელიც მიიღებს props-ით title და description. კომპონენტში გამოიტანეთ title <h2>-ში და description <p>-ში. App.jsx-ში გამოიყენეთ Card კომპონენტი და გადაეცით ნებისმიერი მნიშვნელობები
import Card from "./Card";

function App() {
    return (
        <div>
            {/* Card კომპონენტის გამოყენება */}
            <Card
                title="React Card"
                description="ეს არის Card კომპონენტის მაგალითი React-ში"
            />
        </div>
    );
}

export default App;
