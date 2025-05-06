import React from "react";
import Logo from "../assets/logo.png";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
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
        <Link
          to="/"
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#001C6B",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/"
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#2D2D2D99",
            textDecoration: "none",
          }}
        >
          Listings
        </Link>
        <Link
          to="/"
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#2D2D2D99",
            textDecoration: "none",
          }}
        >
          About Us
        </Link>
        <Link
          to="/"
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#2D2D2D99",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
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
