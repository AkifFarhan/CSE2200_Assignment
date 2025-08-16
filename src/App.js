import React, { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ArticlesPage from "./pages/ArticlesPage";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 8,
    color: "#222",
    background: isActive ? "#f3f4f5ff" : "transparent",
    fontWeight: isActive ? 600 : 400,
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: collapsed ? "72px 1fr" : "200px 1fr",
        minHeight: "100vh",
      }}
    >
      <aside style={{ borderRight: "1px solid #eee", padding: 16 }}>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? "»" : "«"} {collapsed ? "" : "Collapse"}
        </button>

        <nav style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <NavLink to="/profile" style={linkStyle}>
            {collapsed ? "👤" : "👤 Profile"}
          </NavLink>
          <NavLink to="/articles" style={linkStyle}>
            {collapsed ? "📝" : "📝 My Articles"}
          </NavLink>
        </nav>
      </aside>

      {/* Main */}
      <main style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}
