//10) შექმენით Dashboard კომპონენტი, სადაც იქნება პროდუქტის დამატების ფორმა (input + button)
import useForm from "./useForm";

function Dashboard() {
    const addProduct = (data) => {
        console.log("Added product:", data.product);

        // სურვილის შემთხვევაში:
        // localStorage-ში პროდუქტების შენახვა
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
        </div>
    );
}

export default Dashboard;
