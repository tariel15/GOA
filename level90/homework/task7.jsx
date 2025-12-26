//8) React კომპონენტში შექმენით რიცხვითი ცვლადი age. JSX-ს გარეთ დაწერეთ if პირობა, რომელიც ამოწმებს: თუ age >= 18, ცვლადში result ჩაწერეთ "Adult", სხვა შემთხვევაში "Minor". JSX-ში გამოიტანეთ result. კომენტარებში ახსენით რატომ არ შეიძლება if-ის პირდაპირ გამოყენება JSX-ში
function AgeCheck() {
    const age = 16;

    // if პირობას პირდაპირ JSX-ში ვერ გამოვიყენებთ,
    // რადგან JSX ელოდება expression-ს (გამოსახულებას) და არა statement-ს.
    // if არის JavaScript statement, ამიტომ ლოგიკა უნდა დავწეროთ JSX-ის გარეთ.
    let result;

    if (age >= 18) {
        result = "Adult";
    } else {
        result = "Minor";
    }

    return (
        <div>
            {/* JSX-ში უბრალოდ ვრენდერავთ უკვე გამოთვლილ შედეგს */}
            <p>{result}</p>
        </div>
    );
}

export default AgeCheck;
