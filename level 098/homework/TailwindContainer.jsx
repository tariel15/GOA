//6) შექმენით TailwindContainer და TailwindView კომპონენტები.
//TailwindView-ში გამოიყენეთ Tailwind CSS კლასები.
//props-ით მიიღეთ ტექსტი Container-დან.
//Tailwind კლასებით:
//- შექმენით card მსგავსი layout
//- გამოიყენეთ padding, margin, rounded, bg-color
import TailwindView from "./TailwindView";

function TailwindContainer() {
    const title = "Tailwind Card";
    const text = "ეს არის card layout, შექმნილი Tailwind CSS კლასებით";

    return (
        <TailwindView title={title} text={text} />
    );
}

export default TailwindContainer;
