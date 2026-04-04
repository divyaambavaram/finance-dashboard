import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionsTable() {
  const { transactions, setTransactions, role } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  // 🔍 Filter
  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // 🔃 Sort
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
  );

  // ❌ Delete
  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // ✏️ Edit Start
  const handleEdit = (t) => {
    setEditId(t.id);
    setEditData(t);
  };

  // 💾 Save Edit
  const handleSave = () => {
    const updated = transactions.map((t) =>
      t.id === editId ? editData : t
    );
    setTransactions(updated);
    setEditId(null);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Transactions</h2>

      {/* Search + Sort */}
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <input
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "6px" }}
        />

        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Sort: {sortOrder}
        </button>
      </div>

      {/* TABLE */}
      <table border="1" cellPadding="10" style={{ width: "100%", background: "#fff" }}>
        <thead style={{ background: "#eee" }}>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan="5">No Data Found</td>
            </tr>
          ) : (
            sorted.map((t) => (
              <tr key={t.id}>
                {/* DATE */}
                <td>
                  {editId === t.id ? (
                    <input
                      value={editData.date}
                      onChange={(e) =>
                        setEditData({ ...editData, date: e.target.value })
                      }
                    />
                  ) : (
                    t.date
                  )}
                </td>

                {/* AMOUNT */}
                <td>
                  {editId === t.id ? (
                    <input
                      value={editData.amount}
                      onChange={(e) =>
                        setEditData({ ...editData, amount: Number(e.target.value) })
                      }
                    />
                  ) : (
                    `₹ ${t.amount}`
                  )}
                </td>

                {/* CATEGORY */}
                <td>
                  {editId === t.id ? (
                    <input
                      value={editData.category}
                      onChange={(e) =>
                        setEditData({ ...editData, category: e.target.value })
                      }
                    />
                  ) : (
                    t.category
                  )}
                </td>

                {/* TYPE */}
                <td>
                  {editId === t.id ? (
                    <select
                      value={editData.type}
                      onChange={(e) =>
                        setEditData({ ...editData, type: e.target.value })
                      }
                    >
                      <option value="income">income</option>
                      <option value="expense">expense</option>
                    </select>
                  ) : (
                    t.type
                  )}
                </td>

                {/* ACTIONS */}
                {role === "admin" && (
                  <td>
                    {editId === t.id ? (
                      <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setEditId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(t)}>Edit</button>
                        <button onClick={() => handleDelete(t.id)}>Delete</button>
                      </>
                    )}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}