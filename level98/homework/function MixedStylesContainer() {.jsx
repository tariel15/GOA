//7) შექმენით MixedStylesContainer და MixedStylesView კომპონენტები.
//გამოიყენეთ ერთ კომპონენტში:
//- inline style
//- CSS Module
//- Tailwind CSS
//Container-ში არ უნდა იყოს JSX სტილებისთვის.
//View კომპონენტში მკაფიოდ გამოჩნდეს რომელი სტილი სად გამოიყენება.
import MixedStylesView from "./MixedStylesView";

function MixedStylesContainer() {
    const title = "Mixed Styles Example";
    const text = "ერთ კომპონენტში გამოყენებულია inline, CSS Module და Tailwind";

    return (
        <MixedStylesView title={title} text={text} />
    );
}

export default MixedStylesContainer;
