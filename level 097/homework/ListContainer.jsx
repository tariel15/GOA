//3) შექმენით ListContainer და ListView კომპონენტები.
//ListContainer-ში state-ში გქონდეთ ელემენტების სია (array).
//ListView კომპონენტს props-ით გადასცით სია.
//ListView-ში სია უნდა დარენდერდეს map-ის გამოყენებით.
//Container კომპონენტში არ უნდა იყოს JSX სიისთვის.
import { useState } from "react";
import ListView from "./ListView";

function ListContainer() {
    const [items, setItems] = useState([
        "Apple",
        "Banana",
        "Orange",
        "Grapes"
    ]);

    return (
        <div>
            <ListView items={items} />
        </div>
    );
}

export default ListContainer;
