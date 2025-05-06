import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (path) => ({
    fontSize: 16,
    fontWeight: "500",
    color: location.pathname === path ? "#001C6B" : "#2D2D2D99",
    textDecoration: "none",
    transition: "color 0.3s",
  });

  const hoverStyle = {
    color: "#001C6B",
  };

  return (
    <div
      style={{
        height: 123,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src={Logo} style={{ marginLeft: 20, height: 89, width: 80 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 25,
        }}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Listings", path: "/listings" },
          { name: "About Us", path: "/about" },
          { name: "Contact Us", path: "/contact" },
        ].map((link) => (
          <Link
            key={link.name}
            to={link.path}
            style={{
              ...linkStyle(link.path),
              ...(hoveredLink === link.name ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Button
        onClick={() => {}}
        style={{
          marginRight: 20,
          backgroundColor: "#001C6B",
          color: "white",
          height: 47,
          width: 140,
          borderRadius: 12,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Login/Signup
      </Button>
    </div>
  );
}
