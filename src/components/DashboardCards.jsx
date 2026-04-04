import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function DashboardCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const cardStyle = {
    flex: 1,
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
      <div style={cardStyle}>
        <h3>Total Balance</h3>
        <h2>₹ {balance}</h2>
      </div>

      <div style={cardStyle}>
        <h3 style={{ color: "green" }}>Income</h3>
        <h2>₹ {income}</h2>
      </div>

      <div style={cardStyle}>
        <h3 style={{ color: "red" }}>Expenses</h3>
        <h2>₹ {expense}</h2>
      </div>
    </div>
  );
}