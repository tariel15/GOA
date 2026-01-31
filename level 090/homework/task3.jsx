//4) React კომპონენტში შექმენით ცვლადი imgUrl და ჩაწერეთ სურათის ლინკი. JSX-ში <img> ტეგის src ატრიბუტში გამოიყენეთ ეს ცვლადი. კომენტარებში ახსენით რას ნიშნავს Variable Attribute JSX-ში
function ImageComponent() {
    const imgUrl = "https://via.placeholder.com/300";

    return (
        <div>
            {/* Variable Attribute JSX-ში ნიშნავს, რომ HTML ატრიბუტის მნიშვნელობა */}
            {/* დინამიკურად იღებს მნიშვნელობას JavaScript ცვლადიდან */}
            {/* ამისთვის ვიყენებთ ფიგურულ ფრჩხილებს { } */}
            <img src={imgUrl} alt="Example" />
        </div>
    );
}

export default ImageComponent;
