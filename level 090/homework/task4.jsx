//5) React კომპონენტში შექმენით boolean ცვლადი isLoggedIn. JSX-ს გარეთ დაწერეთ ლოგიკა, რომელიც ქმნის ცვლადს message. თუ isLoggedIn არის true, message იყოს "Hello user", წინააღმდეგ შემთხვევაში "Please log in". JSX-ში გამოიტანეთ message. კომენტარებში ახსენით რას ``ნიშნავს ლოგიკის გამოყოფა JSX-დან
function LoginMessage() {
    const isLoggedIn = true;

    // ლოგიკის გამოყოფა JSX-დან ნიშნავს,
    // რომ პირობები და გამოთვლები ვწერთ JSX-ის გარეთ, ჩვეულებრივ JavaScript-ში
    // ეს კოდი განსაზღვრავს, რა ტექსტი უნდა გამოჩნდეს ეკრანზე
    let message;

    if (isLoggedIn) {
        message = "Hello user";
    } else {
        message = "Please log in";
    }

    return (
        <div>
            {/* JSX-ში უბრალოდ ვაჩვენებთ უკვე გამზადებულ შედეგს */}
            <p>{message}</p>
        </div>
    );
}

export default LoginMessage;
