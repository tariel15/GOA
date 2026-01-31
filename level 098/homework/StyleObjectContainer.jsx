//3) შექმენით StyleObjectContainer და StyleObjectView კომპონენტები.
//Container კომპონენტში აღწერეთ რამდენიმე style ობიექტი (მაგ: titleStyle, boxStyle).
//props-ით გადასცით ისინი View კომპონენტს.
//StyleObjectView-ში:
//- გამოიყენეთ სხვადასხვა style ობიექტი სხვადასხვა ელემენტზე
//- არ გამოიყენოთ className
import StyleObjectView from "./StyleObjectView";

function StyleObjectContainer() {
    const titleStyle = {
        color: "darkblue",
        fontSize: "24px",
        marginBottom: "15px",
        textAlign: "center"
    };

    const boxStyle = {
        backgroundColor: "#f2f2f2",
        padding: "20px",
        borderRadius: "8px"
    };

    const textStyle = {
        color: "#333",
        fontSize: "16px"
    };

    return (
        <StyleObjectView
            titleStyle={titleStyle}
            boxStyle={boxStyle}
            textStyle={textStyle}
        />
    );
}

export default StyleObjectContainer;
