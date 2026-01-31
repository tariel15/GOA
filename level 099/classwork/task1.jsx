//1) შექმენით ფორმა 2 შესატანი ველით, სახელისა და პაროლის, ასევე უნდა იყოს submit input-იც. კომპონენტში შექმენით ფუნქცია handleSubmit რომელსაც გამოიძახეთ ფორმის დადასტურებისას, მოვლენის ობიექტი e მიიღეთ და გაუკეთეთ .preventDefault() მოვლენბის ობიექტიდან აიღეთ სამიზინე (target) საიდანც elements და name ატრიბუტის გამოყენებით წამოიღებთ სახელისა და პაროლის ამჟამინდელ მნიშვნლობებს, შეამოწმეთ თუ პაროლის სიგრძე ნაკლებია 8-ზე მაშინ საიტზე უნდა გამოდიოდეს კიდევ ერთი პარაგრაფი რომელიც მიგვითებებს რომ პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, ამისთვის გამოიყენეთ მდგომარეობა
import { useState } from "react";

function Form() {
    // მდგომარეობა პაროლის შეცდომისთვის
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        // ფორმის ელემენტებიდან მნიშვნელობების ამოღება
        const name = e.target.elements.name.value;
        const password = e.target.elements.password.value;

        // პაროლის სიგრძის შემოწმება
        if (password.length < 8) {
            setError(true);
        } else {
            setError(false);
            console.log("სახელი:", name);
            console.log("პაროლი:", password);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="შეიყვანეთ სახელი"
            />

            <input
                type="password"
                name="password"
                placeholder="შეიყვანეთ პაროლი"
            />

            <input type="submit" value="გაგზავნა" />

            {error && (
                <p style={{ color: "red" }}>
                    პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს
                </p>
            )}
        </form>
    );
}

export default Form;
