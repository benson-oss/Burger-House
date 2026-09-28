import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import HomePage from "./pages/HomePage";
import BurgerList from "./components/BurgerList";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckOutPage";
import AuthenticationPage from "./pages/AuthenticationPage";

import "./App.css";

const API_URL =
  "https://free-food-menus-api-two.vercel.app/burgers";

export default function App() {

  // =========================
  // USER / LOGIN STATE
  // =========================

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // =========================
  // BURGERS
  // =========================

  const [burgers, setBurgers] = useState([]);

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
        console.error("Error fetching burgers:", error);
      }
    };

    fetchBurgers();
  }, []);

  // =========================
  // CART
  // =========================

  const [cart, setCart] = useState([]);

  const addToCart = (burger) => {
    setCart((currentCart) => [
      ...currentCart,
      {
        ...burger,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // =========================
  // ADMIN CRUD
  // =========================

  const handleAdd = (newBurger) => {
    setBurgers((currentBurgers) => [
      ...currentBurgers,
      newBurger,
    ]);
  };

  const handleEdit = (updatedBurger) => {
    setBurgers((currentBurgers) =>
      currentBurgers.map((burger) =>
        burger.id === updatedBurger.id
          ? updatedBurger
          : burger
      )
    );
  };

  const handleDelete = (id) => {
    setBurgers((currentBurgers) =>
      currentBurgers.filter(
        (burger) => burger.id !== id
      )
    );
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    setUser(null);
  };

  return (
    <>
      <NavBar
        user={user}
        onLogout={handleLogout}
      />

      <Routes>

        {/* =========================
            LOGIN / REGISTER
        ========================= */}

        <Route
          path="/auth"
          element={
            <AuthenticationPage
              onLogin={setUser}
            />
          }
        />

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* =========================
            BURGERS
        ========================= */}

        <Route
          path="/burgers"
          element={
            <ProtectedRoute user={user}>
              <BurgerList
                burgers={burgers}
                onAddToCart={addToCart}
              />
            </ProtectedRoute>
          }
        />

        {/* =========================
            ABOUT
        ========================= */}

        <Route
          path="/about"
          element={
            <ProtectedRoute user={user}>
              <AboutPage />
            </ProtectedRoute>
          }
        />

        {/* =========================
            CONTACT
        ========================= */}

        <Route
          path="/contact"
          element={
            <ProtectedRoute user={user}>
              <ContactPage />
            </ProtectedRoute>
          }
        />

        {/* =========================
            CART
        ========================= */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute user={user}>
              <CartPage
                cart={cart}
                onRemove={removeFromCart}
              />
            </ProtectedRoute>
          }
        />

        {/* =========================
            CHECKOUT
        ========================= */}

        <Route
          path="/checkout"
          element={
            <ProtectedRoute user={user}>
              <CheckoutPage
                cart={cart}
                onOrderComplete={() => setCart([])}
              />
            </ProtectedRoute>
          }
        />

        {/* =========================
            ADMIN
        ========================= */}

        <Route
          path="/admin"
          element={
            <AdminRoute user={user}>
              <AdminPage
                burgers={burgers}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </AdminRoute>
          }
        />

        {/* =========================
            404
        ========================= */}

        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />

      </Routes>
    </>
  );
}