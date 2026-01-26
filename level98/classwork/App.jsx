//3) შექმენით Message კომპონენტი ცალკე Message.jsx ფაილში რომელსაც App.jsx-ში გამოიყენებთ, ამ კომპონენტისთვის ცალკე აიღეთ Message.modules.css ფაილი რომელშიც რაიმე კლასს შემოიტანთ რითაც გასტილავთ პარაგრაფს, დააიმპორტეთ ეს css ფაილი შესაბამის კომპონენტთან styles სახელით და გასტილეთ პარაგრაფი styles.კლასით. კომენტარებით დაწერეთ ოთხივე გასტილვის ხერხზე: inline, object variable, stylesheet, modular css
import Message from "./Message";

function App() {
    return (
        <div>
            <Message />
        </div>
    );
}

export default App;
