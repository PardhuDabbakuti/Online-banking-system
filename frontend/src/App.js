import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [owner, setOwner] = useState("");

  // Fetch accounts from backend
  useEffect(() => {
    axios.get("http://localhost:8085/api/accounts")
      .then(res => setAccounts(res.data))
      .catch(err => console.error("Error fetching accounts:", err));
  }, []);

  // Add account
  const addAccount = () => {
    if (!owner.trim()) return;
    axios.post("http://localhost:8085/api/accounts", { owner })
      .then(res => setAccounts([...accounts, res.data]))
      .catch(err => console.error("Error adding account:", err));
    setOwner("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#1a237e" }}>🏦 Online Banking</h1>

      {/* Add account form */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Owner name"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          onClick={addAccount}
          style={{
            backgroundColor: "#1a73e8",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          ➕ Add Account
        </button>
      </div>

      {/* Account list */}
      {accounts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No accounts found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <thead style={{ backgroundColor: "#1a237e", color: "white" }}>
            <tr>
              <th style={{ padding: "10px" }}>Account ID</th>
              <th style={{ padding: "10px" }}>Owner</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc) => (
              <tr key={acc.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px", textAlign: "center" }}>{acc.id}</td>
                <td style={{ padding: "10px" }}>{acc.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
