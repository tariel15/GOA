//8) ავტორიზაციის დროს შეამოწმეთ localStorage-ში არსებული მონაცემები
import useForm from "./useForm";

function Login() {
    const login = (data) => {
        // ამოვიღოთ მომხმარებელი localStorage-დან
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            alert("User not found. Please register first.");
            return;
        }

        //შევადაროთ email და password
        if (
            data.email === savedUser.email &&
            data.password === savedUser.password
        ) {
            alert("Login successful!");
            console.log("Authorized user:", savedUser);
        } else {
            alert("Invalid email or password");
        }
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
