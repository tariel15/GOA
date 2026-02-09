//17) პროდუქტების სია უნდა ინახებოდეს localStorage-ში
import { useState, useEffect } from "react";
import useForm from "./useForm";

function Dashboard() {
    // პროდუქტის სია localStorage-დან პირველადი state-ში
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : [];
    });

    // ნებისმიერი ცვლილება products state-ში -> update localStorage
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    // პროდუქტის დამატება
    const addProduct = (data) => {
        const newProduct = {
            id: Date.now(),
            name: data.product,
        };
        setProducts((prev) => [...prev, newProduct]);
    };

    // პროდუქტის წაშლა
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
