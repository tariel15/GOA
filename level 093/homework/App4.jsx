//7) შექმენით Card კომპონენტი, რომელიც მიიღებს props.children-ს. Card კომპონენტს უნდა ჰქონდეს დიზაინი (border, padding). App კომპონენტში შექმენით რამდენიმე Card და შიგნით ჩადეთ სხვადასხვა JSX ელემენტები (ტექსტი, ღილაკი, პარაგრაფი).
import Card from "./Card";

function App() {
    return (
        <div>
            <Card>
                <h2>პირველი Card</h2>
                <p>ეს არის პირველი Card-ის ტექსტი</p>
                <button>დაწვრილებით</button>
            </Card>

            <Card>
                <h2>მეორე Card</h2>
                <p>აქ შეიძლება იყოს სხვა კონტენტი</p>
            </Card>

            <Card>
                <p>უბრალო Card მხოლოდ პარაგრაფით</p>
            </Card>
        </div>
    );
}

export default App;
