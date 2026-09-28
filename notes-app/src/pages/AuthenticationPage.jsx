import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Admin login details
const ADMIN_EMAIL = "admin@burgerhouse.com";
const ADMIN_PASSWORD = "admin123";

export default function AuthenticationPage({ onLogin }) {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // =========================
    // LOGIN
    // =========================

    if (isLogin) {
      if (!email || !password) {
        alert("Please enter your email and password");
        return;
      }

      // =========================
      // ADMIN LOGIN
      // =========================

      if (
        email === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
      ) {
        const adminUser = {
          name: "Burger House Admin",
          email: ADMIN_EMAIL,
          role: "admin",
        };

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify(adminUser)
        );

        if (onLogin) {
          onLogin(adminUser);
        }

        alert("Welcome Admin! 👑");

        navigate("/admin");

        return;
      }

      // =========================
      // NORMAL USER LOGIN
      // =========================

      const savedUser = JSON.parse(
        localStorage.getItem("burgerUser")
      );

      if (!savedUser) {
        alert("No account found. Please register first.");
        return;
      }

      if (
        savedUser.email !== email ||
        savedUser.password !== password
      ) {
        alert("Incorrect email or password");
        return;
      }

      const normalUser = {
        ...savedUser,
        role: "user",
      };

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(normalUser)
      );

      if (onLogin) {
        onLogin(normalUser);
      }

      alert("Welcome back! 🍔");

      navigate("/");

      return;
    }

    // =========================
    // REGISTER
    // =========================

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Normal users are given role "user"
    const newUser = {
      name: name,
      email: email,
      password: password,
      role: "user",
    };

    // Save registered user
    localStorage.setItem(
      "burgerUser",
      JSON.stringify(newUser)
    );

    // Automatically log them in
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(newUser)
    );

    if (onLogin) {
      onLogin(newUser);
    }

    alert("Account created successfully! 🎉");

    navigate("/");
  };

  // =========================
  // SWITCH LOGIN / REGISTER
  // =========================

  const switchMode = () => {
    setIsLogin(!isLogin);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* HEADER */}

        <div style={styles.header}>
          <div style={styles.logo}>
            🍔
          </div>

          <h1>
            {isLogin
              ? "Welcome Back"
              : "Create Account"}
          </h1>

          <p>
            {isLogin
              ? "Login to your Burger House account"
              : "Join Burger House today"}
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          style={styles.form}
        >

          {/* NAME */}

          {!isLogin && (
            <div>
              <label style={styles.label}>
                Full Name
              </label>

              <input
                style={styles.input}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>
          )}

          {/* EMAIL */}

          <div>
            <label style={styles.label}>
              Email
            </label>

            <input
              style={styles.input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {/* PASSWORD */}

          <div>
            <label style={styles.label}>
              Password
            </label>

            <input
              style={styles.input}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            style={styles.submitButton}
          >
            {isLogin
              ? "🔐 Login"
              : "📝 Create Account"}
          </button>
        </form>

        {/* SWITCH */}

        <div style={styles.switch}>
          {isLogin ? (
            <>
              <p>
                Don't have an account?
              </p>

              <button
                type="button"
                style={styles.switchButton}
                onClick={switchMode}
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              <p>
                Already have an account?
              </p>

              <button
                type="button"
                style={styles.switchButton}
                onClick={switchMode}
              >
                Login
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

// =========================
// STYLES
// =========================

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow:
      "0 5px 20px rgba(0,0,0,0.1)",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  logo: {
    fontSize: "50px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
  },

  submitButton: {
    backgroundColor: "#ffb703",
    color: "#111",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "5px",
  },

  switch: {
    textAlign: "center",
    marginTop: "25px",
    color: "#777",
  },

  switchButton: {
    background: "none",
    border: "none",
    color: "#219ebc",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
};