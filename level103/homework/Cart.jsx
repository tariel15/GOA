
import { useCart } from "./CartContext";

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    if (cart.length === 0) {
        return <h3>Cart is empty</h3>;
    }

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>
                        {item.name} - ${item.price}
                    </p>

                    <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                            updateQuantity(item.id, e.target.value)
                        }
                    />

                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
