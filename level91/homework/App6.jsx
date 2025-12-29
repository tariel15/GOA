//7) შექმენით Product კომპონენტი, რომელიც მიიღებს props-ით productName და price მნიშვნელობებს. კომპონენტში გამოიტანეთ ორივე <p> ელემენტში. კომენტარებით ახსენით რატომ ვიყენებთ props-ს კომპონენტებს შორის მონაცემების გადასაცემად
import Product from "./Product";

function App() {
    return (
        <div>
            {/* Product კომპონენტს props-ით გადავცემთ მონაცემებს */}
            <Product productName="Laptop" price={2500} />
        </div>
    );
}

export default App;
