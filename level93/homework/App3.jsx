// /6) შექმენით Wrapper კომპონენტი, რომელიც გამოიყენებს props.children-ს.Wrapper კომპონენტმა უნდა დააბრუნოს div რომელშიც ჩაირენდერება children. App კომპონენტში Wrapper-ის შიგნით მოათავსეთ:- სათაური- პარაგრაფი- ღილაკი
import Wrapper from "./Wrapper";

function App() {
    return (
        <div>
            <Wrapper>
                <h1>ეს არის სათაური</h1>
                <p>ეს არის პარაგრაფი Wrapper კომპონენტის შიგნით</p>
                <button>დააკლიკე</button>
            </Wrapper>
        </div>
    );
}

export default App;
