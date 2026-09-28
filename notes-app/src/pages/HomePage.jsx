import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.smallTitle}>🍔 BURGER HOUSE</p>

          <h1 style={styles.title}>
            Delicious Burgers
            <br />
            Made For You
          </h1>

          <p style={styles.description}>
            Discover delicious burgers made with fresh
            ingredients and amazing flavors.
          </p>

          <Link to="/burgers" style={styles.button}>
            🍔 Explore Burgers
          </Link>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.feature}>
          <span>🍔</span>
          <h2>Fresh Burgers</h2>
          <p>
            Enjoy delicious burgers prepared with
            quality ingredients.
          </p>
        </div>

        <div style={styles.feature}>
          <span>⚡</span>
          <h2>Fast Service</h2>
          <p>
            Browse our menu and find your favorite
            burger quickly.
          </p>
        </div>

        <div style={styles.feature}>
          <span>❤️</span>
          <h2>Made With Love</h2>
          <p>
            Every burger is prepared with care and
            attention to flavor.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
  },

  hero: {
    minHeight: "550px",
    display: "flex",
    alignItems: "center",
    padding: "50px 8%",
    background:
      "linear-gradient(135deg, #171717, #3b3b3b)",
    color: "white",
  },

  heroContent: {
    maxWidth: "650px",
  },

  smallTitle: {
    color: "#ffb703",
    fontWeight: "bold",
    letterSpacing: "3px",
  },

  title: {
    fontSize: "55px",
    margin: "20px 0",
    lineHeight: "1.1",
  },

  description: {
    fontSize: "18px",
    color: "#ddd",
    lineHeight: "1.7",
    marginBottom: "30px",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#ffb703",
    color: "#111",
    padding: "15px 25px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  features: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "50px 8%",
  },

  feature: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },
};