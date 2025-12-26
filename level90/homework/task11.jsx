//12) კომენტარებით ახსენით რას ნიშანვს აპლიკაციის კომპონენტებად დაყოფა და რა უპირატესობები აქვს
import React from "react";

// Header კომპონენტი
function Header() {
    return <header><h1>My App</h1></header>;
}

// Navigation კომპონენტი
function Navigation() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

// MainContent კომპონენტი
function MainContent() {
    return (
        <main>
            <p>Welcome to my React app!</p>
        </main>
    );
}

// Footer კომპონენტი
function Footer() {
    return <footer><p>© 2025 My App</p></footer>;
}

// App კომპონენტი – სხვა კომპონენტების კომბინაცია
function App() {
    return (
        <div>
            {/* აპლიკაცია დაყოფილია დამოუკიდებელ კომპონენტებად */}
            <Header />
            <Navigation />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;

/*
1. აპლიკაცია დაშლილია პატარა კომპონენტებად: Header, Navigation, MainContent, Footer
2. App კომპონენტი არის მთავარი კომპონენტი, რომელიც აკავშირებს სხვებს
3. ყოველი კომპონენტი დამოუკიდებელია, ხელახლა გამოყენებადია და მარტივად მოვლას ექვემდებარება
4. ასეთი სტრუქტურა ზრდის კოდის წაკითხვადობას, სტაბილურობას და ტესტირების მარტივობას
*/
