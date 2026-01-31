//3) React კომპონენტში შექმენით ცვლადი title ტექსტით "Welcome to React". გამოიყენეთ ეს ცვლადი <h1> ელემენტის შიგნით JSX-ში. კომენტარებში ახსენით როგორ მუშაობს ცვლადების ჩასმა JSX-ში { } ფრჩხილებით
function TitleComponent() {
    const title = "Welcome to React";

    return (
        <div>
            {/* ცვლადების ჩასასმელად JSX-ში ვიყენებთ ფიგურულ ფრჩხილებს { } */}
            {/* { } საშუალებას გვაძლევს JavaScript კოდი ან ცვლადი გამოვიყენოთ JSX-ის შიგნით */}
            <h1>{title}</h1>
        </div>
    );
}

export default TitleComponent;
