//8) React Cart Context დავალება App სტრუქტურა: App ├─ CartProvider │ ├─ ProductList │ ├─ Cart │ ├─ CartSummary │ └─ Checkout (optional) მოთხოვნები: გამოიყენეთ Functional Components, useState, useEffect შექმენით CartContext და custom hook useCart CartContext უნდა უზრუნველყოფდეს: cart, addToCart(product), removeFromCart(id), updateQuantity(id, quantity) ყველა input იყოს controlled props drilling არ გამოიყენოთ პროდუქტები ჩატვირთეთ useEffect-ით (სტატიკური ან API) თითო პროდუქტს ჰქონდეს Add to Cart ღილაკი კალათის ელემენტები { id, name, price, quantity } ფორმატში ცარიელ კალათაზე გამოიტანეთ "Cart is empty" quantity ცვლილებაზე გამოიყენეთ updateQuantity, Remove ღილაკზე — removeFromCart შექმენით CartSummary, რომელიც აჩვენებს ჯამურ ფასს კალათა და ყველა ცვლილება ავტომატურად შენახეთ localStorage-ში App კომპონენტი უნდა მოექცეს CartProvider-ში, მონაცემები მიიღეთ მხოლოდ useCart hook-ით კომენტარებში ახსენით, რატომ უკეთესია Context cart-ისთვის და რატომ არ უნდა props drilling
import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CartSummary from "./CartSummary";

function App() {
    return (
        <CartProvider>
            <ProductList />
            <Cart />
            <CartSummary />
        </CartProvider>
    );
}

export default App;
