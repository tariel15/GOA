import { isLoggedIn } from "./authService";

function App() {
    return (
        <div>
            {isLoggedIn() ? <h2>User is logged in ✅</h2> : <h2>Please login</h2>}
        </div>
    );
}

export default App;
