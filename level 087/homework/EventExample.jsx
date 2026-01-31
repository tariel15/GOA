//10) შექმენით EventExample კომპონენტი  დააბრუნეთ <button>Click Me</button>  დაამატეთ onClick event  ღილაკზე დაჭერისას console.log-ში გამოიტანეთ "Clicked"
function EventExample() {
    const handleClick = () => {
        console.log("Clicked");
    };

    return <button onClick={handleClick}>Click Me</button>;
}

export default EventExample;
