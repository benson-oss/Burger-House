import { useState } from "react";

export default function AdminPage({
  burgers,
  onAdd,
  onEdit,
  onDelete,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingBurger, setEditingBurger] = useState(null);

  // ADD BURGER
  const handleAdd = () => {
    if (!name || !price) {
      alert("Please enter burger name and price");
      return;
    }

    const newBurger = {
      id: Date.now(),
      name,
      price,
    };

    onAdd(newBurger);

    setName("");
    setPrice("");
  };

  // START EDIT
  const handleEditClick = (burger) => {
    setEditingBurger(burger);
  };

  // SAVE EDIT
  const handleSaveEdit = () => {
    if (!editingBurger.name || !editingBurger.price) {
      alert("Please enter name and price");
      return;
    }

    onEdit(editingBurger);
    setEditingBurger(null);
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <div>
          <p style={styles.smallTitle}>🍔 BURGER HOUSE</p>

          <h1 style={styles.title}>
            Admin Dashboard
          </h1>

          <p style={styles.subtitle}>
            Manage your burgers, menu and products
          </p>
        </div>

        <div style={styles.adminBadge}>
          👤 Admin
        </div>
      </header>

      {/* DASHBOARD CARDS */}
      <section style={styles.stats}>

        <div style={styles.statCard}>
          <span style={styles.statIcon}>🍔</span>
          <div>
            <p style={styles.statLabel}>Total Burgers</p>
            <p>{burgers.length} Burgers</p>
          </div>
        </div>

        <div style={styles.statCard}>
          <span style={styles.statIcon}>➕</span>
          <div>
            <p style={styles.statLabel}>Add Products</p>
            <h2>New</h2>
          </div>
        </div>

        <div style={styles.statCard}>
          <span style={styles.statIcon}>⚙️</span>
          <div>
            <p style={styles.statLabel}>Management</p>
            <h2>Active</h2>
          </div>
        </div>

      </section>

      {/* MAIN CONTENT */}
      <main style={styles.content}>

        {/* ADD BURGER */}
        <section style={styles.panel}>

          <h2 style={styles.sectionTitle}>
            ➕ Add New Burger
          </h2>

          <p style={styles.sectionDescription}>
            Add a new burger to your menu.
          </p>

          <div style={styles.form}>

            <input
              style={styles.input}
              type="text"
              placeholder="Burger name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={styles.input}
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button
              style={styles.addButton}
              onClick={handleAdd}
            >
              ➕ Add Burger
            </button>

          </div>
        </section>

        {/* EDIT FORM */}
        {editingBurger && (
          <section style={styles.editPanel}>

            <h2 style={styles.sectionTitle}>
              ✏️ Edit Burger
            </h2>

            <div style={styles.form}>

              <input
                style={styles.input}
                type="text"
                value={editingBurger.name}
                onChange={(e) =>
                  setEditingBurger({
                    ...editingBurger,
                    name: e.target.value,
                  })
                }
              />

              <input
                style={styles.input}
                type="number"
                value={editingBurger.price}
                onChange={(e) =>
                  setEditingBurger({
                    ...editingBurger,
                    price: e.target.value,
                  })
                }
              />

              <div style={styles.buttonGroup}>

                <button
                  style={styles.saveButton}
                  onClick={handleSaveEdit}
                >
                  💾 Save Changes
                </button>

                <button
                  style={styles.cancelButton}
                  onClick={() => setEditingBurger(null)}
                >
                  Cancel
                </button>

              </div>

            </div>
          </section>
        )}

        {/* BURGER LIST */}
        <section style={styles.panel}>

          <div style={styles.listHeader}>
            <div>
              <h2 style={styles.sectionTitle}>
                🍔 Burger Menu
              </h2>

              <p style={styles.sectionDescription}>
                Manage your available burgers.
              </p>
            </div>

            <span style={styles.count}>
              {burgers.length} items
            </span>
          </div>

          <div style={styles.burgerGrid}>

            {burgers.map((burger) => (

              <div
                key={burger.id}
                style={styles.burgerCard}
              >

                <div style={styles.burgerIcon}>
                  🍔
                </div>

                <div style={styles.burgerInfo}>

                  <h3>{burger.name}</h3>

                  <p style={styles.price}>
                    💲 {burger.price}
                  </p>

                </div>

                <div style={styles.actions}>

                  <button
                    style={styles.editButton}
                    onClick={() =>
                      handleEditClick(burger)
                    }
                  >
                    ✏️ Edit
                  </button>

                  <button
                    style={styles.deleteButton}
                    onClick={() =>
                      onDelete(burger.id)
                    }
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
    fontFamily: "Arial, sans-serif",
    color: "#222",
  },

  header: {
    background: "linear-gradient(135deg, #171717, #3b3b3b)",
    color: "white",
    padding: "45px 8%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  },

  smallTitle: {
    color: "#ffb703",
    fontWeight: "bold",
    letterSpacing: "2px",
    marginBottom: "8px",
  },

  title: {
    fontSize: "38px",
    margin: "0",
  },

  subtitle: {
    color: "#cccccc",
    marginTop: "10px",
    fontSize: "16px",
  },

  adminBadge: {
    backgroundColor: "#ffb703",
    color: "#111",
    padding: "12px 20px",
    borderRadius: "30px",
    fontWeight: "bold",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "30px 8%",
  },

  statCard: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },

  statIcon: {
    fontSize: "35px",
  },

  statLabel: {
    margin: "0",
    color: "#777",
    fontSize: "14px",
  },

  content: {
    width: "84%",
    maxWidth: "1200px",
    margin: "auto",
    paddingBottom: "50px",
  },

  panel: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    marginBottom: "25px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },

  editPanel: {
    backgroundColor: "#fff8e6",
    padding: "30px",
    borderRadius: "15px",
    marginBottom: "25px",
    border: "1px solid #ffd166",
  },

  sectionTitle: {
    margin: "0",
    fontSize: "24px",
  },

  sectionDescription: {
    color: "#777",
    marginTop: "7px",
  },

  form: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  input: {
    padding: "13px 15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    flex: "1",
    minWidth: "200px",
  },

  addButton: {
    backgroundColor: "#ffb703",
    color: "#111",
    border: "none",
    padding: "13px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
  },

  saveButton: {
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    padding: "13px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  cancelButton: {
    backgroundColor: "#777",
    color: "white",
    border: "none",
    padding: "13px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  listHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  count: {
    backgroundColor: "#f1f1f1",
    padding: "8px 14px",
    borderRadius: "20px",
    color: "#555",
  },

  burgerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "15px",
  },

  burgerCard: {
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "18px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "#fafafa",
  },

  burgerIcon: {
    fontSize: "35px",
  },

  burgerInfo: {
    flex: "1",
  },

//   burgerInfo h3: {
//     margin: "0",
//   },

  price: {
    color: "#2a9d8f",
    fontWeight: "bold",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  editButton: {
    backgroundColor: "#219ebc",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  deleteButton: {
    backgroundColor: "#e63946",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};