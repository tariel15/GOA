//13) ფორმის დადასტურებისას პროდუქტი უნდა დაემატოს პროდუქტების სიას
import { useState } from "react";
import useForm from "./useForm";

function Dashboard() {
    const [products, setProducts] = useState([]); // პროდუქტების სია

    //form submit callback
    const addProduct = (data) => {
        const newProduct = {
            id: Date.now(), // უნიკალური id
            name: data.product, // input value
        };

        //პროდუქტი state-ში დამატება
        setProducts((prev) => [...prev, newProduct]);

        console.log("Added product:", newProduct);
    };

    const { formData, handleChange, handleSubmit } = useForm(
        { product: "" },
        addProduct
    );

    return (
        <div>
            <h2>Dashboard</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="product"
                    placeholder="Product name"
                    value={formData.product}
                    onChange={handleChange}
                />
                <button type="submit">Add Product</button>
            </form>

            <h3>Products List:</h3>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.id} - {p.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
