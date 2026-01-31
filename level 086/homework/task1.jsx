//2) შექმენით SimpleGreeting კომპონენტი რომელიც აბრუნებს <h1>Hello React!</h1>  App-ში გამოიტანეთ <SimpleGreeting /> და ნახეთ როგორ მუშაობს JSX

const greetingText = "Hello React from external JS!";
function getYear() {
    return new Date().getFullYear();
}

function SimpleGreeting() {
    return (
        <div>
            <h1>{greetingText}</h1>
            <p>Year: {getYear()}</p>
        </div>
    );
}
export default function App() {
    return (
        <div>
            <SimpleGreeting />
        </div>
    );
}
