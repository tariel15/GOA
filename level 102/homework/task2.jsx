//3) შექმენით Register კომპონენტი (email, password) useForm-ის გამოყენებით
import useForm from "./useForm";

function Register() {
    const { formData, handleChange, handleSubmit } = useForm(
        {
            email: "",
            password: "",
        },
        (data) => {
            console.log("Register data:", data);
        }
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

            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
