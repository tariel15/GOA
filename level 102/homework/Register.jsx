import useForm from "./useForm";
import { registerUser } from "./authService";

function Register() {
    const register = (data) => {
        registerUser(data);
        alert("Registration successful!");
    };

    const { formData, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        register
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

            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
