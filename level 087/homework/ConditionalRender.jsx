//8) შექმენით ConditionalRender კომპონენტი  შექმენით const isLoggedIn = true  JSX-ში გამოიყენეთ ternary ოპერატორი  თუ true → "Welcome"  თუ false → "Please log in"
function ConditionalRender() {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}
        </div>
    );
}

export default ConditionalRender;
