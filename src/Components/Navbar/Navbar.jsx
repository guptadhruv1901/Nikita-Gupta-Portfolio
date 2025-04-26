import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname);

  // Update active menu on route change
  useEffect(() => {
    setMenu(location.pathname);
  }, [location.pathname]);

  // Define CSS classes for different routes
  const navClasses = {
    "/": "nav-home",
    "/about": "nav-about",
    "/events": "nav-events",
    "/contact": "nav-contact",
  };

  const navItems = [
    { id: "/", label: "Projects" },
    { id: "/about", label: "About" },
    { id: "/events", label: "Events" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <div className={`header ${navClasses[location.pathname] || "nav-default"}`}>
      <Link to="/" className="logo">
        {/* Add logo here */}
      </Link>

      <nav className="navbar">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            onClick={() => setMenu(item.id)}
            className={menu === item.id ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
