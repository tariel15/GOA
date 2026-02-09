//6) Login ფორმის დადასტურებისას უნდა გამოიძახოთ login handler ფუნქცია
import useForm from "./useForm";

function Login() {
    //login handler ფუნქცია
    const login = (data) => {
        console.log("Login handler called with:", data);
        // აქ მოხდება ავტორიზაციის ლოგიკა (API call და ა.შ.)
    };

    // useForm იღებს login-ს onSubmit callback-ად
    const { formData, handleChange, handleSubmit } = useForm(
        {
            email: "",
            password: "",
        },
        login
    );

    return (
        // form submit → handleSubmit → login(formData)
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
