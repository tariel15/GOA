//4) შექმენით NumbersList კომპონენტი რომელიც აბრუნებს <ul> და შიგნით 3 <li> ელემენტს  <li>One</li>  <li>Two</li>  <li>Three</li>  App-ში გამოიტანეთ <NumbersList />
function NumbersList() {
    return (
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    );
}
export default function App() {
    return (
        <div>
            <NumbersList />
        </div>
    );
}
