//3) JSX-ში სცადეთ if განცხადების პირდაპირ გამოყენება და დააკვირდით შეცდომას. შემდეგ იგივე პირობა განახორციელეთ JSX-ს გარეთ ცვლადის დახმარებით და შედეგი გამოიტანეთ JSX-ში. კომენტარებში ახსენით რატომ არ მუშაობს if პირდაპირ JSX-ში
//function Example() {
//    const isLoggedIn = true;

//    return (
//        <div>
//            {
//        //  ეს კოდი გამოიწვევს შეცდომას
//        // JSX-ში არ შეიძლება if განცხადების პირდაპირ გამოყენება
//        if (isLoggedIn) {
//        <p>User is logged in</p>;
//        }
//        }
//        </div>
//    );
//}
function Example() {
    const isLoggedIn = true;

    let message;

    // აქ if ჩვეულებრივ მუშაობს, რადგან ეს არის JavaScript ლოგიკა
    if (isLoggedIn) {
        message = <p>User is logged in</p>;
    } else {
        message = <p>User is not logged in</p>;
    }

    return (
        <div>
            {message}
        </div>
    );
}
