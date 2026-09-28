import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav style={styles.navbar}>

      {/* =========================
          LOGO
      ========================= */}

      <div style={styles.logo}>
        <span style={styles.logoIcon}>🍔</span>

        <span>
          Burger
          <span style={styles.logoAccent}>House</span>
        </span>
      </div>

      {/* =========================
          DESKTOP LINKS
      ========================= */}

      <div style={styles.desktopLinks}>

        {/* LOGIN - ONLY SHOW IF NOT LOGGED IN */}
        {!user && (
          <NavLink
            to="/auth"
            style={({ isActive }) =>
              isActive
                ? styles.loginActive
                : styles.loginLink
            }
          >
            🔐 Login
          </NavLink>
        )}

        {/* HOME */}

        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? styles.activeLink
              : styles.link
          }
        >
          🏠 Home
        </NavLink>

        {/* BURGERS */}

        <NavLink
          to="/burgers"
          style={({ isActive }) =>
            isActive
              ? styles.activeLink
              : styles.link
          }
        >
          🍔 Burgers
        </NavLink>

        {/* ABOUT */}

        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? styles.activeLink
              : styles.link
          }
        >
          ℹ️ About
        </NavLink>

        {/* CONTACT */}

        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive
              ? styles.activeLink
              : styles.link
          }
        >
          📞 Contact
        </NavLink>

        {/* CART */}

        <NavLink
          to="/cart"
          style={({ isActive }) =>
            isActive
              ? styles.cartActive
              : styles.cartLink
          }
        >
          🛒 Cart
        </NavLink>

        {/* ADMIN - ADMIN ONLY */}

        {user?.role === "admin" && (
          <NavLink
            to="/admin"
            style={({ isActive }) =>
              isActive
                ? styles.adminActive
                : styles.adminLink
            }
          >
            ⚙️ Admin
          </NavLink>
        )}

        {/* LOGOUT */}

        {user && (
          <button
            onClick={onLogout}
            style={styles.logoutButton}
          >
            🚪 Logout
          </button>
        )}

      </div>

      {/* =========================
          MOBILE MENU BUTTON
      ========================= */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={styles.menuButton}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {menuOpen && (
        <div style={styles.mobileMenu}>

          {/* LOGIN */}

          {!user && (
            <NavLink
              to="/auth"
              onClick={closeMenu}
              style={styles.mobileLoginLink}
            >
              🔐 Login
            </NavLink>
          )}

          {/* HOME */}

          <NavLink
            to="/"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            🏠 Home
          </NavLink>

          {/* BURGERS */}

          <NavLink
            to="/burgers"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            🍔 Burgers
          </NavLink>

          {/* ABOUT */}

          <NavLink
            to="/about"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            ℹ️ About
          </NavLink>

          {/* CONTACT */}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            📞 Contact
          </NavLink>

          {/* CART */}

          <NavLink
            to="/cart"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            🛒 Cart
          </NavLink>

          {/* ADMIN */}

          {user?.role === "admin" && (
            <NavLink
              to="/admin"
              onClick={closeMenu}
              style={styles.mobileAdminLink}
            >
              ⚙️ Admin
            </NavLink>
          )}

          {/* LOGOUT */}

          {user && (
            <button
              onClick={() => {
                onLogout();
                closeMenu();
              }}
              style={styles.mobileLogoutButton}
            >
              🚪 Logout
            </button>
          )}

        </div>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#171717",
    color: "white",
    minHeight: "70px",
    padding: "0 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },

  logoIcon: {
    fontSize: "30px",
  },

  logoAccent: {
    color: "#ffb703",
  },

  desktopLinks: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  loginLink: {
    color: "#ffffff",
    backgroundColor: "#e76f51",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  loginActive: {
    color: "#ffffff",
    backgroundColor: "#c8553d",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  link: {
    color: "#dddddd",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "15px",
  },

  activeLink: {
    color: "#171717",
    backgroundColor: "#ffb703",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  cartLink: {
    color: "#171717",
    backgroundColor: "#ffb703",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  cartActive: {
    color: "#ffffff",
    backgroundColor: "#e09f00",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  adminLink: {
    color: "#ffffff",
    backgroundColor: "#2a9d8f",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  adminActive: {
    color: "#ffffff",
    backgroundColor: "#21867a",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },

  logoutButton: {
    color: "#ffffff",
    backgroundColor: "#e63946",
    border: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  menuButton: {
    display: "none",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "absolute",
    top: "70px",
    left: "0",
    right: "0",
    backgroundColor: "#171717",
    padding: "20px 6%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },

  mobileLoginLink: {
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "8px",
    backgroundColor: "#e76f51",
    fontSize: "16px",
    fontWeight: "bold",
  },

  mobileLink: {
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "8px",
    backgroundColor: "#252525",
    fontSize: "16px",
  },

  mobileAdminLink: {
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "8px",
    backgroundColor: "#2a9d8f",
    fontSize: "16px",
    fontWeight: "bold",
  },

  mobileLogoutButton: {
    color: "#ffffff",
    backgroundColor: "#e63946",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};