
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

function ProductList() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        setProducts([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Phone", price: 800 },
            { id: 3, name: "Headphones", price: 150 },
        ]);
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <p>
                        {product.name} - ${product.price}
                    </p>
                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
