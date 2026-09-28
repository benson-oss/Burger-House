import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
export default function CartPage({
  cart,
  onRemove,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <div style={styles.empty}>
          <h2>Your cart is empty 🛒</h2>

          <p>
            Go to the burger menu and add something
            delicious.
          </p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
            />
          ))}

          <div style={styles.total}>
            <h2>
              Total: ${total.toFixed(2)}
            </h2>

            <button
  style={styles.checkout}
  onClick={() => navigate("/checkout")}
>
  💳 Checkout
</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 8%",
    backgroundColor: "#f5f6fa",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  empty: {
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "15px",
    textAlign: "center",
  },

  total: {
    backgroundColor: "white",
    padding: "25px",
    marginTop: "25px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  checkout: {
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    padding: "13px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};