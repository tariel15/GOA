// /2) შექმენით Greeting კომპონენტი, რომელიც გამოიტანს <h1> ელემენტში props-ით მიღებულ ტექსტს. App.jsx-ში გამოიყენეთ Greeting კომპონენტი და გადაეცით მას ტექსტი "Hello React". კომენტარებით ახსენით რას აკეთებს props
import Greeting from "./Greeting";

function App() {
    return (
        <div>
            {/* Greeting კომპონენტს props-ის საშუალებით გადავცემთ ტექსტს */}
            <Greeting text="Hello React" />
        </div>
    );
}

export default App;
