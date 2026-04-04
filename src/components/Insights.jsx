import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t=>t.type==="expense");
  const max = expenses.reduce((a,b)=> a.amount > b.amount ? a : b, {amount:0});

  return (
    <div style={{ marginTop:20 }}>
      <h3>Insights</h3>
      <p>Highest Expense: {max.category} - {max.amount}</p>
    </div>
  );
}