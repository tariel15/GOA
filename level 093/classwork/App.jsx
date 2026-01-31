//1) შექმენით კომპონენტი greeting, რომელიც დააბრუნებს 2 სათაურს პირველში ტექსტით "First Name: [name] მეორეში "Last Name [surname] კომპონენტმა პარამეტრად უნდა მიიღოს props როდესაც მას App.jsx-ში დააიმპორტებთ გადაეცით 2 prop: name, surname
import Greeting from "./Greeting";

function App() {
    return (
        <div>
            <Greeting name="Tarieli" surname="Bejanishvuli" />
        </div>
    );
}

export default App;
