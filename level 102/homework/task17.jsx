//18) გვერდის გადატვირთვის შემდეგ პროდუქტები ავტომატურად უნდა ჩაიტვირთოს
//პროექტის პირობა
//გამოიყენეთ React ფუნქციური კომპონენტი
//გამოიყენეთ useForm პროდუქტის ფორმისთვის
//გამოიყენეთ ცალკე custom hook პროდუქტების ლოგიკისთვის
//localStorage და state უნდა იყოს სინქრონში
//თუ პროდუქტების სია ცარიელია, ეკრანზე უნდა გამოჩნდეს შესაბამისი ტექსტი
//კოდი უნდა იყოს მარტივი, სუფთა და ლოგიკურად გამართული
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Custom hook პროდუქტების ლოგიკისთვის
function useProducts() {
    const [products, setProducts] = useState(() => {
        // პირველ ეტაპზე localStorage–დან ჩატვირთვა
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : [];
    });

    // State-ს სინქრონიზაცია localStorage–თან
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        setProducts((prev) => [...prev, product]);
    };

    return { products, addProduct };
}

// მთავარი კომპონენტი
function ProductApp() {
    const { products, addProduct } = useProducts();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        addProduct(data);
        reset(); // ფორმის გაწმენდა
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>პროდუქტების სია</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="პროდუქტის სახელი"
                />
                <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="ფასი"
                />
                <button type="submit">დამატება</button>
            </form>

            {products.length === 0 ? (
                <p>პროდუქტები ჯერ არ არის დამატებული</p>
            ) : (
                <ul>
                    {products.map((p, index) => (
                        <li key={index}>
                            {p.name} - ${p.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductApp;
