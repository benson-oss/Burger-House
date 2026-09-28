import { useEffect, useState } from "react";
import BurgerCard from "./BurgerCard"
const API_URL =
  "https://free-food-menus-api-two.vercel.app/burgers";

export default function BurgerList({ onAddToCart }) {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch burgers");
        }

        const data = await response.json();

        setBurgers(data);
      } catch (error) {
        console.error(
          "Error fetching burgers:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBurgers();
  }, []);

  if (loading) {
    return (
      <div style={styles.message}>
        <h2>Loading burgers... 🍔</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        🍔 Our Burger Menu
      </h1>

      <p style={styles.description}>
        Choose your favorite burger and add it to
        your cart.
      </p>

      <div style={styles.grid}>
        {burgers.map((burger) => (
          <BurgerCard
            key={burger.id}
            img={burger.img}
            name={burger.name}
            dsc={burger.dsc}
            price={burger.price}
            rate={burger.rate}
            country={burger.country}
            onAddToCart={() => onAddToCart(burger)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 6%",
    backgroundColor: "#f5f6fa",
  },

  heading: {
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "10px",
  },

  description: {
    textAlign: "center",
    color: "#777",
    marginBottom: "35px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  message: {
    textAlign: "center",
    padding: "100px 20px",
  },
};