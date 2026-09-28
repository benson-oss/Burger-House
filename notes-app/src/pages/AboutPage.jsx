export default function AboutPage() {
  return (
    <div style={styles.page}>
      <section style={styles.container}>
        <p style={styles.smallTitle}>
          🍔 BURGER HOUSE
        </p>

        <h1 style={styles.title}>
          About Us
        </h1>

        <p style={styles.text}>
          Welcome to Burger House, a place for burger
          lovers. Our goal is to make it easy for you
          to discover delicious burgers from around
          the world.
        </p>

        <p style={styles.text}>
          Our menu contains a variety of burgers with
          different flavors, ingredients and styles.
          Whether you love classic burgers or want to
          try something different, there is something
          for everyone.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <span>🍔</span>
            <h2>Great Food</h2>
            <p>
              Explore a variety of delicious burgers.
            </p>
          </div>

          <div style={styles.card}>
            <span>🌎</span>
            <h2>Different Flavors</h2>
            <p>
              Discover burgers from different places.
            </p>
          </div>

          <div style={styles.card}>
            <span>❤️</span>
            <h2>Our Passion</h2>
            <p>
              We love bringing burger lovers together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
    padding: "60px 8%",
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
    textAlign: "center",
  },

  smallTitle: {
    color: "#ffb703",
    fontWeight: "bold",
    letterSpacing: "3px",
  },

  title: {
    fontSize: "45px",
    marginBottom: "25px",
  },

  text: {
    color: "#666",
    fontSize: "17px",
    lineHeight: "1.8",
  },

  cards: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },
};