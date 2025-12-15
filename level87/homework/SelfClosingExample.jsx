//4) შექმენით SelfClosingExample კომპონენტი  დააბრუნეთ <img /> და <input /> Self-Closing ფორმატში  App-ში გამოიტანეთ <SelfClosingExample />  დააკვირდით JSX-ში ტეგების სწორ დახურვას
function SelfClosingExample() {
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="example" />
            <input type="text" placeholder="Enter text" />
        </div>
    );
}

export default SelfClosingExample;
