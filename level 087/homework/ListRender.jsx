//9) შექმენით ListRender კომპონენტი  შექმენით მასივი const items = ["HTML", "CSS", "JS"]  JSX-ში გამოიყენეთ map()  დააბრუნეთ <ul> სიის ელემენტებით
function ListRender() {
    const items = ["HTML", "CSS", "JS"];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListRender;
