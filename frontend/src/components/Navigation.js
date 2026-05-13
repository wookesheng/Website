import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import "./Navigation.css";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "SKILLS", id: "skills" },
    { label: "PROJECTS", id: "projects" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "CONTACT", id: "contact" }
  ];

  return (
    <nav className="navigation">
      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo">
          <a href="#" className="logo-text">JD</a>
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-item ${hoveredItem === item.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <button className="nav-icon">
            <Search size={28} />
          </button>
          <button className="nav-icon">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;