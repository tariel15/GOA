
import { useCart } from "./CartContext";

function CartSummary() {
    const { cart } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Total: ${total}</h2>
        </div>
    );
}

export default CartSummary;
