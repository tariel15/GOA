import useForm from "./useForm";
import { loginUser } from "./authService";

function Login() {
    const login = (data) => {
        const result = loginUser(data);

        if (result.success) {
            alert("Login successful!");
        } else {
            alert(result.message);
        }
    };

    const { formData, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        login
    );

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
