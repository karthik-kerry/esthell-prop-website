import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import HeroImg from "../assets/hero_img.png";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <div style={{ position: "relative", width: "100%", height: 620 }}>
          <img
            src={HeroBg}
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              zIndex: 1,
            }}
          />
          <h1
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 600,
              position: "absolute",
              top: "15%",
              left: "5%",
              zIndex: 100,
            }}
          >
            Find Your Dream Home
            <br /> With Ease
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: 18,
              position: "absolute",
              top: "50%",
              left: "5%",
              zIndex: 100,
            }}
          >
            Explore apartments, villas, and homes for rent or sale – verified
            listings, personalized
            <br /> recommendations, and expert support every step of the way.
          </p>
        </div>
        <img
          src={HeroImg}
          style={{
            position: "absolute",
            zIndex: 100,
            top: "30%",
            right: "10%",
            height: "60%",
            width: "25%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            position: "absolute",
            zIndex: 100,
            top: "63%",
            left: "5%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <div>btn1</div>
            <div>btn2</div>
            <div>btn3</div>
          </div>
          <div
            style={{
              height: 96,
              backgroundColor: "white",
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
