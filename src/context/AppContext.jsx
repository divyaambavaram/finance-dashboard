import { createContext, useState } from "react";
import { transactions as data } from "../data/mockData";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [transactions, setTransactions] = useState(data);
  const [role, setRole] = useState("viewer");

  return (
    <AppContext.Provider value={{ transactions, setTransactions, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
}