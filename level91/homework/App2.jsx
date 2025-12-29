//3) შექმენით User კომპონენტი, რომელიც მიიღებს props-ით name და age მნიშვნელობებს და გამოიტანს მათ <p> ელემენტებში. App.jsx-ში გამოიყენეთ User კომპონენტი და გადაეცით თქვენი სახელი და ასაკი. კომენტარებში დაწერეთ რას ნიშნავს props-ით მონაცემების გადაცემა
import User from "./User";

function App() {
    return (
        <div>
            {/* User კომპონენტს props-ით გადავცემთ სახელს და ასაკს */}
            <User name="Tarieli" age={18} />
        </div>
    );
}

export default App;
