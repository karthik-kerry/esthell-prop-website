import React from "react";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <div
        style={{
          backgroundColor: "#00174E",
          height: 250,
          padding: 70,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, marginRight: "10%" }}>
          <p style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18 }}>
            Get Our App
          </p>
          <p style={{ color: "white", fontSize: 16 }}>
            Download the app and book your property
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link to="/">
              <img src={Playstore} style={{ width: 150 }} />
            </Link>
            <Link to="/">
              <img src={Appstore} style={{ width: 150 }} />
            </Link>
          </div>
          <p style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Connect with us
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <div
              onClick={() => {}}
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <TiSocialFacebook size={20} color="#00174E" />
            </div>
            <div
              onClick={() => {}}
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <RiInstagramFill size={20} color="#00174E" />
            </div>
            <div
              onClick={() => {}}
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IoLogoLinkedin size={20} color="#00174E" />
            </div>
            <div
              onClick={() => {}}
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <IoLogoWhatsapp size={20} color="#00174E" />
            </div>
          </div>
        </div>
        <div style={{ flex: 1, marginRight: 20 }}>
          <p style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
            Explore
          </p>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Listings
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Listings
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Listings
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Listings
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Listings
          </Link>
        </div>
        <div style={{ flex: 1, marginRight: 20 }}>
          <p style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
            Categories
          </p>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Apartments
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Home
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Office
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Villas
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Flat
          </Link>
        </div>
        <div style={{ flex: 1, marginRight: 20 }}>
          <p style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
            Locations
          </p>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Chennai
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Coimbatore
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Salem
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Tiruvallur
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Madurai
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
            Quick Links
          </p>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            About
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            FAQ
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Terms & Conditions
          </Link>
          <Link
            to="/"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            <FaChevronRight size={16} color="white" />
            Privacy Policy
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#00174E",
          borderStyle: "solid",
          borderTopColor: "#FFFFFF33",
          borderTopWidth: 1,
          padding: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", fontSize: 16 }}>
          Copyright 2025 - All right reserved
        </p>
      </div>
    </div>
  );
}
