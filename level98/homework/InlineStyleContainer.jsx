//2) შექმენით InlineStyleContainer და InlineStyleView კომპონენტები.
//InlineStyleContainer-ში შექმენით style ობიექტი JavaScript-ში.
// //ეს style props-ით გადასცით InlineStyleView-ს.
//InlineStyleView-ში გამოიყენეთ inline styling:
//- div ელემენტზე backgroundColor და padding
//- ტექსტი გამოჩნდეს ცენტრში
import InlineStyleView from "./InlineStyleView";

function InlineStyleContainer() {
    const boxStyle = {
        backgroundColor: "lightblue",
        padding: "30px",
        textAlign: "center"
    };

    return (
        <div>
            {/* style props-ით გადაეცემა შვილ კომპონენტს */}
            <InlineStyleView style={boxStyle} />
        </div>
    );
}

export default InlineStyleContainer;
