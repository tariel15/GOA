//7) რეგისტრაციის დროს მომხმარებლის მონაცემები შეინახეთ localStorage-ში
import useForm from "./useForm";

function Register() {
    const register = (data) => {
        // მონაცემების შენახვა localStorage-ში
        localStorage.setItem("user", JSON.stringify(data));

        console.log("User registered:", data);
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
