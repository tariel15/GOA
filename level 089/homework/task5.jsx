//6) React-ის კომპონენტში შექმენით boolean ცვლადი. ternary ოპერატორის გამოყენებით თუ პირობა true არის გამოიტანეთ <p> ტექსტით "Welcome back", ხოლო თუ false არის გამოიტანეთ <p> ტექსტით "Please log in". კომენტარებში ახსენით ternary ოპერატორის სინტაქსი
function AuthMessage() {
    const isLoggedIn = false;

    return (
        <div>
            {
                // ternary ოპერატორის სინტაქსი:
                // პირობა ? მნიშვნელობა_თუ_true : მნიშვნელობა_თუ_false
                // თუ isLoggedIn არის true → გამოჩნდება "Welcome back"
                // თუ isLoggedIn არის false → გამოჩნდება "Please log in"
                isLoggedIn
                    ? <p>Welcome back</p>
                    : <p>Please log in</p>
            }
        </div>
    );
}

export default AuthMessage;
