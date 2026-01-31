//5) შექმენით Form.jsx კომპონენტი.
//კომპონენტში:
//- შექმენით <form> ელემენტი
//- გაუწერეთ onSubmit მოვლენის მსმენელი (handleSubmit)
//- ფორმაში გქონდეთ 4 input (ნებისმიერი ტიპის)
//- თითოეულ input-ს გაუწერეთ name ატრიბუტი
//handleSubmit ფუნქციაში:
//- გამოიყენეთ event.target.name.value
//- შექმენით ობიექტი ოთხივე მნიშვნელობით
//- დაბეჭდეთ ეს ობიექტი კონსოლში
import React from "react";

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form</h2>

            <input
                type="text"
                name="firstName"
                placeholder="First Name"
            />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
