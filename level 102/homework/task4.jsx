//5) შექმენით Login კომპონენტი (email, password) useForm-ის გამოყენებით
import useForm from "./useForm";

function Login() {
    const login = (data) => {
        console.log("Login handler called with:", data);
        // აქ შეიძლება იყოს login API call
    };

    const { formData, handleChange, handleSubmit } = useForm(
        {
            email: "",
            password: "",
        },
        login
    );

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
