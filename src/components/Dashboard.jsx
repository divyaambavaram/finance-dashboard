import React from "react";
import { AppProvider } from "../context/AppContext";
import DashboardCards from "../components/DashboardCards";
import TransactionsTable from "../components/TransactionsTable";
import RoleToggle from "../components/RoleToggle";
import Insights from "../components/Insights";
import Charts from "../components/Charts"; // ✅ CORRECT PLACE

export default function Dashboard() {
  return (
    <AppProvider>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Finance Dashboard</h1>

        <RoleToggle />
        <DashboardCards />
        <Charts />   {/* ✅ ADD HERE */}
        <TransactionsTable />
        <Insights />
      </div>
    </AppProvider>
  );
}