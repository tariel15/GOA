//11) პროდუქტის დამატების ფორმა უნდა იყენებდეს useForm custom hook-ს
import useForm from "./useForm";

function Dashboard() {
    const addProduct = (data) => {
        console.log("Added product:", data.product);
    };

    // useForm custom hook პროდუქტის ფორმისთვის
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
        </div>
    );
}

export default Dashboard;
