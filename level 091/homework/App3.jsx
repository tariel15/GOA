//4) შექმენით Button კომპონენტი, რომელიც მიიღებს props-ით buttonText მნიშვნელობას და გამოიტანს <button> ელემენტში. App.jsx-ში გამოიყენეთ Button კომპონენტი ორჯერ სხვადასხვა ტექსტით ("Login", "Register")
import Button from "./Button";

function App() {
    return (
        <div>
            {/* Button კომპონენტის გამოყენება სხვადასხვა ტექსტით */}
            <Button buttonText="Login" />
            <Button buttonText="Register" />
        </div>
    );
}

export default App;
