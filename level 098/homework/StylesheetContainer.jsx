//5) შექმენით StylesheetContainer და StylesheetView კომპონენტები.
//გამოიყენეთ ჩვეულებრივი CSS ფაილი (styles.css).
//StylesheetView-ში გამოიყენეთ className.
//Container კომპონენტში მხოლოდ მონაცემები და ლოგიკა უნდა იყოს.
//View კომპონენტში:
//- მინიმუმ ორი განსხვავებული styled ელემენტი
import StylesheetView from "./StylesheetView";

function StylesheetContainer() {
    const title = "Stylesheet Example";
    const description = "ეს ტექსტი გასტილულია ჩვეულებრივი CSS ფაილით";

    return (
        <StylesheetView
            title={title}
            description={description}
        />
    );
}

export default StylesheetContainer;
