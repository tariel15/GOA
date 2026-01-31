//6) შექმენით Products კომპონენტი.
//გამოიყენეთ useState და useEffect.
//დავალება:
//- კომპონენტის პირველ render-ზე გააგზავნეთ მოთხოვნა:
//https://fakestoreapi.com/products
//- მიღებული მონაცემები შეინახეთ data მდგომარეობაში (საწყისი მნიშვნელობა [])
//- ეკრანზე გამოიტანეთ პროდუქტები map მეთოდის გამოყენებით
import React, { useEffect, useState } from "react";

function Products() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>

            {data.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img
                        src={product.image}
                        alt={product.title}
                        width="100"
                    />
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Products;
