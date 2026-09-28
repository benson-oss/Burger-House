import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    console.log({
      name,
      email,
      message,
    });

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>📩 Contact Us</h1>

        <p style={styles.description}>
          Have a question or feedback? Send us a
          message.
        </p>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
        >
          <input
            style={styles.input}
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <textarea
            style={styles.textarea}
            placeholder="Your message"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          />

          <button
            type="submit"
            style={styles.button}
          >
            📩 Send Message
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
    padding: "60px 20px",
  },

  container: {
    maxWidth: "650px",
    margin: "auto",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },

  description: {
    color: "#777",
    marginBottom: "30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
  },

  textarea: {
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    minHeight: "150px",
    resize: "vertical",
  },

  button: {
    backgroundColor: "#ffb703",
    color: "#111",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};