
import useAuth from "./useAuth";

function AuthConsumer() {
    const { email, password } = useAuth();

    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>Email: {email}</h3>
            <h4>Password: {password}</h4>
        </div>
    );
}

export default AuthConsumer;
