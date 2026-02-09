//14) პროდუქტების სია დაარენდერეთ ცხრილის სახით (name, delete)
import { useState } from "react";
import useForm from "./useForm";

function Dashboard() {
    const [products, setProducts] = useState([]); // პროდუქტების სია

    // დამატება
    const addProduct = (data) => {
        const newProduct = {
            id: Date.now(),
            name: data.product,
        };

        setProducts((prev) => [...prev, newProduct]);
    };

    // წაშლა
    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    const { formData, handleChange, handleSubmit } = useForm(
        { product: "" },
        addProduct
    );

    return (
        <div>
            <h2>Dashboard</h2>

            {/* პროდუქტის დამატების ფორმა */}
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

            {/* პროდუქტის სია ცხრილში */}
            <h3>Products List</h3>
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>
                                <button onClick={() => deleteProduct(p.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
