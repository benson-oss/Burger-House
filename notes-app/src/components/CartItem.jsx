export default function CartItem({
  item,
  onRemove,
}) {
  return (
    <div style={styles.card}>
      <img
        src={item.img}
        alt={item.name}
        style={styles.image}
      />

      <div style={styles.info}>
        <h2>{item.name}</h2>

        <p style={styles.price}>
          ${item.price}
        </p>

        <p>
          Quantity: {item.quantity}
        </p>

        <button
          style={styles.remove}
          onClick={() => onRemove(item.id)}
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "20px",
    backgroundColor: "white",
    padding: "20px",
    marginBottom: "15px",
    borderRadius: "12px",
    alignItems: "center",
  },

  image: {
    width: "150px",
    height: "110px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  info: {
    flex: 1,
  },

  price: {
    color: "#2a9d8f",
    fontWeight: "bold",
  },

  remove: {
    backgroundColor: "#e63946",
    color: "white",
    border: "none",
    padding: "9px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};