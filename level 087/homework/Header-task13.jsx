//13) ყველა კომპონენტში დაამატეთ კომენტარები, სადაც ახსნით:  რა არის კომპონენტირას აკეთებს returnროგორ მუშაობს JSXJavaScript JSX-შიclassName vs classEvent handling JSX-ში

// კომპონენტი არის ფუნქცია, რომელიც აბრუნებს JSX-ს და გამოიყენება UI-ის ნაწილის გამოსაჩენად
function Header() {
    // JSX-ში return აბრუნებს HTML-ის მსგავსი სინტაქსს, რომელსაც React ცვლის რეალურ DOM ელემენტად
    return (
        <header>
            {/* JavaScript-ს JSX-ში ჩავდებთ {}-ში */}
            <h1>{"Welcome to React"}</h1>
        </header>
    );
}

export default Header;
