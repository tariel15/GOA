//6) შექმენით Profile კომპონენტი, რომელიც მიიღებს props-ით username მნიშვნელობას და გამოიტანს ტექსტს: "Welcome, username". App.jsx-ში გამოიყენეთ Profile კომპონენტი და გადაეცით თქვენი სახელი
import Profile from "./Profile";

function App() {
    return (
        <div>
            {/* Profile კომპონენტს props-ით გადავცემთ მომხმარებლის სახელს */}
            <Profile username="Tarieli" />
        </div>
    );
}

export default App;
