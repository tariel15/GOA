//3) შექმენით ორი კომპონენტისგან შემდგარი ვებსაიტი.
//I კომპონენტი:
//- შექმენით ფორმა
//- ყველა input-ის ცვლილებისას (onChange) განაახლეთ მდგომარეობაში შენახული ობიექტი
//- ფორმის დადასტურებისას (onSubmit) შეინახეთ ეს ობიექტი localStorage-ში string-ის სახით
//II კომპონენტი:
//- ღილაკზე დაჭერისას წამოიღეთ მონაცემები localStorage-დან
//- გადააქცევთ string-ს ობიექტად
//- თითოეული property გამოიტანეთ პარაგრაფში
//- პარაგრაფები უნდა გამოჩნდეს მხოლოდ მაშინ, თუ მნიშვნელობები ცარიელი არ არის
import React from "react";
import FormComponent from "./FormComponent";
import DisplayComponent from "./DisplayComponent";

function App() {
    return (
        <div>
            <h1>Two Component Website</h1>
            <FormComponent />
            <DisplayComponent />
        </div>
    );
}

export default App;
