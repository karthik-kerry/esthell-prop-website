import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import OfficeLocation from "../assets/OfficeLoc.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

export default function ContactPage() {
  return (
    <div>
      <Header />
      {/* hero section */}
      <div
        style={{
          position: "relative",
          height: 250,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={HeroBg}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            filter: "blur(5px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(5px)",
            zIndex: 1,
          }}
        >
           <h1
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: 600,
              position: "absolute",
              top: "30%",           
              left: "50%",           
              transform: "translate(-50%, -50%)", 
              zIndex: 100,
            }}
          >
          Contact Us
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: 14,
              position: "absolute",
              top: "50%",           
              left: "50%",           
              transform: "translate(-50%, -50%)", 
              zIndex: 100,
            }}
          >
          We’d love to hear from you. Reach out to us for any property-related assistance.
          </p>
       </div>
      </div>
      {/* info */}
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        margin: "40px 0",
      }}>
        <div
            style={{
              height:210,
              width: "20%",
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#00000029",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001C6B",
              padding:20,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src={OfficeLocation}  style={{backgroundColor:"white",borderRadius:"50%",padding:15, width: 30, marginBottom: 10 }} />
            <p
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                lineHeight: 0,
                marginBottom: 8,
              }}
            >
               Office Address :
            </p>
            <p
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Eget tristique sit eu tincidunt maecenas .
            </p>
          </div>
          <div
            style={{
              height: "100%",
              width: "20%",
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#00000029",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001C6B",
              padding: 20,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src={mail}  style={{backgroundColor:"white",borderRadius:"50%",padding:15, width: 30, marginBottom: 10 }} />
            <p
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                lineHeight: 0,
                marginBottom: 8,
              }}
            >
              Email Address :
            </p>
            <p
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
            info@esthell.com
            </p>
            <p
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
            info@esthell.com
            </p>
          </div>
          <div
            style={{
              height: "100%",
              width: "20%",
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#00000029",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001C6B",
              padding: 20,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src={phone} style={{backgroundColor:"white",borderRadius:"50%",padding:15, width: 30, marginBottom: 10 }} />
            <p
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                lineHeight: 0,
                marginBottom: 8,
              }}
            >
             Phone Number :
            </p>
            <p
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
           +91 98888 88888
            </p>
            <p
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
            +91 98888 88888
            </p>
          </div>


      </div>
      <Footer />
    </div>
  );
}
