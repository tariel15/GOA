//5) შექმენით FormContainer და FormView კომპონენტები.
//FormContainer-ში გამოიყენეთ useState ინფუთის მნიშვნელობისთვის.
//შექმენით submit ფუნქცია.
//FormView კომპონენტში უნდა იყოს:
//- input
//- ღილაკი
//მონაცემები მიიღოს მხოლოდ props-ით.
import { useState } from "react";
import FormView from "./FormView";

function FormContainer() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted value:", value);
    };

    return (
        <FormView
            value={value}
            
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}

export default FormContainer;
