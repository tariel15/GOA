//4) ფორმის დადასტურებისას უნდა გამოიძახოთ register handler ფუნქცია
import useForm from "./useForm";

function Register() {
    const register = (data) => {
        console.log("Register handler called with:", data);
        // აქ შეიძლება იყოს API call
        // fetch("/register", { ... })
    };

    const { formData, handleChange, handleSubmit } = useForm(
        {
            email: "",
            password: "",
        },
        register
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
