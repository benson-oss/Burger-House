export default function FoodCard({
  img,
  name,
  dsc,
  price,
  rate,
  country,
  onAddToCart,
}) {
  return (
    <div style={styles.card}>
      {/* IMAGE */}
      <img
        src={img}
        alt={name}
        style={styles.image}
      />

      {/* NAME */}
      <h3 style={styles.title}>
        {name}
      </h3>

      {/* DESCRIPTION */}
      <p style={styles.description}>
        {dsc}
      </p>

      {/* PRICE */}
      <p style={styles.price}>
        💲 {price}
      </p>

      {/* RATING */}
      <p style={styles.rate}>
        ⭐ {rate}
      </p>

      {/* COUNTRY */}
      <p style={styles.country}>
        🌍 {country}
      </p>

      {/* ADD TO CART */}
      <button
        style={styles.cartButton}
        onClick={onAddToCart}
      >
        🛒 Add to Cart
      </button>

    </div>
  );
}

const styles = {
  card: {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  title: {
    fontSize: "19px",
    marginBottom: "8px",
  },

  description: {
    color: "#666",
    fontSize: "14px",
  },

  price: {
    color: "#2a9d8f",
    fontWeight: "bold",
    fontSize: "17px",
  },

  rate: {
    color: "#e9c46a",
  },

  country: {
    color: "#555",
  },

  cartButton: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#ffb703",
    color: "#111",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "8px",
  },

  editButton: {
    width: "100%",
    padding: "9px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#219ebc",
    color: "white",
    cursor: "pointer",
    marginBottom: "8px",
  },

  deleteButton: {
    width: "100%",
    padding: "9px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#e63946",
    color: "white",
    cursor: "pointer",
  },
};