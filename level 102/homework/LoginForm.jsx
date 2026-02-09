function LoginForm() {
    const { formData, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        (data) => {
            console.log(data);
        }
    );

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
