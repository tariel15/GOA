//1) შექმენით ცალკე ფაილი component.jsx, რომელშიც უნდა შექმნათ კომპონეტი (ფუნქცია) დასახლებისთვის იყენებთ PascalCasing-ის, კომპონენტმა უნდა დააბრუნოს div რომელშიც იქნება პარაგრაფი და ღილაკი. ეს კომპონენტი export default MyComponent-ის მეშვეობით დააექსპორტეთ, შემდეგ დააიმპორტეთ App.jsx-ში და გამოიყეენთ return (<MyComponent />). კომენტარებით ახსენით რატომ ვიყენებთ react-dom ბიბლიოთეკას (createRoot) რას აკეთებს createRoot() ფუნქცია და .render მეთოდი

function MyComponent() {
    return (
        <div>
            <p>ეს არის ჩემი კომპონენტი</p>
            <button>დააჭირე</button>
        </div>
    );
}

export default MyComponent;
