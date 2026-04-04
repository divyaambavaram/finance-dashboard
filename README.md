# 💰 Finance Dashboard UI

## 📌 Overview

This project is a frontend-based Finance Dashboard built using React. It allows users to track financial activities, visualize spending patterns, and manage transactions through an interactive and user-friendly interface.

---

## 🎯 Objective

The goal of this project is to demonstrate frontend development skills including UI design, component structure, state management, and user interaction.

---

## 🚀 Features

### 📊 Dashboard Overview

* Displays Total Balance, Income, and Expenses
* Clean summary cards for quick insights

### 📈 Data Visualization

* Line Chart for spending trends over time
* Pie Chart for category-wise expense breakdown

### 📋 Transactions Management

* View all transactions
* Search transactions by category
* Sort transactions by amount
* Edit and delete transactions (Admin only)

### 🔐 Role-Based UI

* Viewer: Can only view data
* Admin: Can edit and delete transactions
* Role switching using dropdown

### 💡 Insights Section

* Displays highest spending category
* Helps users understand spending behavior

---

## 🛠️ Tech Stack

* React (Frontend)
* Context API (State Management)
* Recharts (Data Visualization)
* Vite (Build Tool)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── DashboardCards.jsx
 │    ├── TransactionsTable.jsx
 │    ├── RoleToggle.jsx
 │    ├── Insights.jsx
 │    ├── Charts.jsx
 │
 ├── context/
 │    └── AppContext.jsx
 │
 ├── pages/
 │    └── Dashboard.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Setup Instructions

1. Clone the repository

```bash
git clone <your-repo-link>
```

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

---

## ✨ Assumptions

* Data is static and managed on frontend
* Role-based functionality is simulated (no backend)
* Focus is on UI and user experience

---

## 📌 Future Enhancements

* Add transaction form
* Store data in localStorage
* Dark mode support
* Export data (CSV/JSON)

---

## 👩‍💻 Author

Ambavaram Divya Bharathi
