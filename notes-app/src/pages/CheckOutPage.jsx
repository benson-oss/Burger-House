import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage({ cart, onOrderComplete }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      alert("Please fill in all the fields");
      return;
    }

    const order = {
      customerName: name,
      phone,
      address,
      items: cart,
      total,
    };

    console.log("ORDER:", order);

    alert("🎉 Order placed successfully!");

    // Clear cart
    onOrderComplete();

    // Go back to home
    navigate("/");
  };

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div style={styles.empty}>
        <h1>🛒 Your cart is empty</h1>

        <p>
          Please add some burgers before checking out.
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/burgers")}
        >
          🍔 Browse Burgers
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>
          💳 Checkout
        </h1>

        <p style={styles.subtitle}>
          Complete your details to place your order.
        </p>

        {/* CUSTOMER INFORMATION */}
        <form onSubmit={handleSubmit}>

          <h2>Customer Information</h2>

          <input
            style={styles.input}
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            style={styles.input}
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <textarea
            style={styles.textarea}
            placeholder="Delivery address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
          />

          {/* ORDER SUMMARY */}
          <div style={styles.summary}>
            <h2>🧾 Order Summary</h2>

            {cart.map((item) => (
              <div
                key={item.id}
                style={styles.item}
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  $
                  {(
                    Number(item.price) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />

            <div style={styles.total}>
              <strong>Total</strong>

              <strong>
                ${total.toFixed(2)}
              </strong>
            </div>
          </div>

          <button
            type="submit"
            style={styles.placeOrder}
          >
            🛍️ Place Order
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
    padding: "50px 20px",
  },

  container: {
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "15px",
    boxShadow:
      "0 4px 15px rgba(0,0,0,0.08)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "25px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    minHeight: "120px",
    resize: "vertical",
  },

  summary: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    marginTop: "15px",
  },

  placeOrder: {
    width: "100%",
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    padding: "15px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  empty: {
    textAlign: "center",
    padding: "100px 20px",
  },

  button: {
    backgroundColor: "#ffb703",
    border: "none",
    padding: "13px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};