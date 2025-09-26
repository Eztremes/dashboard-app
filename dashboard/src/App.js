import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import AddWidgetForm from "./components/AddWidgetForm";
import ManageCategoriesModal from "./components/ManageCategoriesModal";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showManage, setShowManage] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dynamic Dashboard Builder</h1>
        <div className="header-controls">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <button className="btn" onClick={() => setShowAdd(true)}>+ Add Widget</button>
          <button className="btn secondary" onClick={() => setShowManage(true)}>Manage Categories</button>
        </div>
      </header>

      <main className="container">
        <Dashboard searchQuery={searchQuery} />
      </main>

      {showAdd && <AddWidgetForm onClose={() => setShowAdd(false)} />}
      {showManage && <ManageCategoriesModal onClose={() => setShowManage(false)} />}
      <footer className="footer">Built by - Jatin Thakur</footer>
    </div>
  );
}
