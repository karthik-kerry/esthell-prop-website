import React from "react";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#00174E",
          height: 250,
          padding: 50,
          display: "flex",
          alignI: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18 }}>
            Get Our App
          </p>
          <p style={{ color: "white", fontSize: 16 }}>
            Download the app and book your property
          </p>
          <div>
            <Link to="/" style={{ marginRight: 20 }}>
              <img src={Playstore} style={{ width: "22%" }} />
            </Link>
            <Link to="/">
              <img src={Appstore} style={{ width: "22%" }} />
            </Link>
          </div>
          <p style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Connect with us
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <div
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TiSocialFacebook size={20} color="#00174E" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RiInstagramFill size={20} color="#00174E" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoLogoLinkedin size={20} color="#00174E" />
            </div>
            <div
              style={{
                backgroundColor: "white",
                height: 42,
                width: 42,
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoLogoWhatsapp size={20} color="#00174E" />
            </div>
          </div>
        </div>
        <div>div2</div>
        <div>div3</div>
        <div>div4</div>
        <div>div5</div>
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
