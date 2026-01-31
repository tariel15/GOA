//10) შექმენით ორი კომპონენტი და გამოიტანეთ ისინი App.jsx-ში Fragment-ის (<></>) გამოყენებით. კომენტარებში ახსენით რა არის Fragment და რატომ ვიყენებთ
// App.jsx
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

function App() {
    return (
        <>
            {
                // Fragment (<></>) გვაძლევს საშუალებას
                // ერთ კომპონენტში დავაბრუნოთ რამდენიმე ელემენტი
                // DOM-ში დამატებითი <div>-ის შექმნის გარეშე
                //
                // React კომპონენტმა ყოველთვის უნდა დააბრუნოს ერთი root ელემენტი
                // Fragment ამ პრობლემას აგვარებს ზედმეტი wrapper-ის გარეშე
            }
            <FirstComponent />
            <SecondComponent />
        </>
    );
}

export default App;
