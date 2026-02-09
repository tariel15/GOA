//12) პროდუქტი უნდა ინახებოდეს state-ში როგორც ობიექტი (id, name)
import { useState } from "react";
import useForm from "./useForm";

function Dashboard() {
    const [products, setProducts] = useState([]); // პროდუქტის სია

    const addProduct = (data) => {
        // ახალი პროდუქტის ობიექტი: id + name
        const newProduct = {
            id: Date.now(), // უნიკალური id (timestamp)
            name: data.product,
        };

        // State-ში დამატება
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
