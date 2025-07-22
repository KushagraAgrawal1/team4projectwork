import React, { useState } from "react";
import logo from "../assets/uptoskills-logo.png"; // ✅ Imported logo

function Sidebar({ isSidebarVisible }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleNavClick = (item, path) => {
    setActiveItem(item);
    window.location.href = path;
  };

  const getNavItemStyle = (item) => {
    return item === activeItem
      ? {
          backgroundColor: "#3D566E", // Active menu background
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 16px",
          marginBottom: "8px", // spacing between menus
          borderRadius: "8px",
          fontWeight: 600,
        }
      : {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 16px",
          marginBottom: "8px", // same spacing for all
          borderRadius: "8px",
          fontWeight: 500,
          color: "#fff",
        };
  };

  if (!isSidebarVisible) return null;

  return (
    <div
      className="sidebar expanded"
      style={{
        backgroundColor: "#2E4053", // Sidebar dark background
        color: "#fff",
        width: "240px",
        minHeight: "100vh",
        padding: "16px",
      }}
      tabIndex={0}
    >
      {/* Logo */}
      <div className="logo mb-8 text-center">
        <img
          src={logo}
          alt="UpToSkills Logo"
          className="mx-auto w-44" // ✅ Logo made slightly bigger
        />
      </div>

      {/* Navigation */}
      <nav className="nav-menu">
        {/* Dashboard */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("dashboard")}
          onClick={() => handleNavClick("dashboard", "/")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
          </svg>
          Dashboard
        </div>

        {/* Edit Profile */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("edit-profile")}
          onClick={() => handleNavClick("edit-profile", "/edit-profile")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Edit Profile
        </div>

        {/* My Project */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("my-project")}
          onClick={() => handleNavClick("my-project", "/my-project")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          </svg>
          My Project
        </div>

        {/* Milestones */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("milestones")}
          onClick={() => handleNavClick("milestones", "/milestones")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Milestones
        </div>

        {/* Notifications */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("notifications")}
          onClick={() => handleNavClick("notifications", "/notifications")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
          </svg>
          Notifications
        </div>

        {/* Admin Panel */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("admin-panel")}
          onClick={() => handleNavClick("admin-panel", "/admin-panel")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" />
          </svg>
          Admin Panel
        </div>

        {/* Log Out */}
        <div
          className="nav-item hover:bg-[#3D566E]"
          style={getNavItemStyle("logout")}
          onClick={() => alert("Logged out")}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
          Log Out
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
