import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import OfficeLocation from "../assets/OfficeLoc.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { Input, Button, Select } from "antd";

export default function ContactPage() {
  const { TextArea } = Input;
  const { Option } = Select;
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };
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
            We’d love to hear from you. Reach out to us for any property-related
            assistance.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(242, 246, 250)",
          
        }}
      >
      <div
        style={{
          display: "flex",
          height: "auto",
          flexDirection: "column",
          gap: 30,
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 20,
          paddingBottom: 70,
          backgroundColor: "rgb(242, 246, 250)",
        }}
      >
        {/* info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            margin: "40px 0",
          }}
        >
          <div
            style={{
              height: 210,
              width: "30%",
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
            <img
              src={OfficeLocation}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: 15,
                width: 30,
                marginBottom: 10,
              }}
            />
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
              Lorem ipsum dolor sit amet consectetur. Eget tristique sit eu
              tincidunt maecenas .
            </p>
          </div>
          <div
            style={{
              height: "100%",
              width: "30%",
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
            <img
              src={mail}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: 15,
                width: 30,
                marginBottom: 10,
              }}
            />
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
              width: "30%",
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
            <img
              src={phone}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: 15,
                width: 30,
                marginBottom: 10,
              }}
            />
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
        {/* talk with us */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              height: "100%",
              width: 561,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ display: "flex", gap: 20 }}>
                <Input
                  style={{ backgroundColor: "#001C6B14",height: 48 }}
                  placeholder="Name"
                />
                <Input
                  style={{ backgroundColor: "#001C6B14",height: 48 }}
                  placeholder="Email Address"
                />
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <Input
                  style={{ backgroundColor: "#001C6B14",height: 48 }}
                  placeholder="Phone Number"
                />
                <Select
                  style={{ backgroundColor: "#001C6B14", width: 590,height: 48}}
                  placeholder="Buy"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <Option value="product1">Product 1</Option>
                  <Option value="product2">Product 2</Option>
                  <Option value="product3">Product 3</Option>
                </Select>
              </div>
              <TextArea
                style={{ backgroundColor: "#001C6B14" }}
                placeholder="Write Your Message Here!"
                autoSize={{ minRows: 5, maxRows: 6 }}
              />
              <div>
                <Button
                  style={{
                    width: "100%",
                    height: "48px",
                    gap: "10px",
                    borderRadius: "12px",
                    backgroundColor: "#001C6B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    font: "poppins",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 30 }}>Talk With Us</p>
            <p style={{ fontWeight: 400, fontSize: 16,}}>
              Have questions about buying, selling, or renting a property? Our
              expert team is here to help you every step of the way. Whether
              you're exploring options or ready to make a move, feel free to
              reach out — we're just a message or call away.
            </p>
            <p style={{ fontWeight: 500, fontSize: 18 }}>Social Media :</p>
            <div style={{ display: "flex", gap: 20, marginTop: 10 }}>
              <div
                onClick={() => {}}
                style={{
                  backgroundColor: "#00174E",
                  height: 42,
                  width: 42,
                  borderRadius: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <TiSocialFacebook size={20} color="white" />
              </div>
              <div
                onClick={() => {}}
                style={{
                  backgroundColor: "#00174E",
                  height: 42,
                  width: 42,
                  borderRadius: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <RiInstagramFill size={20} color="white" />
              </div>
              <div
                onClick={() => {}}
                style={{
                  backgroundColor: "#00174E",
                  height: 42,
                  width: 42,
                  borderRadius: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <IoLogoLinkedin size={20} color="white" />
              </div>
              <div
                onClick={() => {}}
                style={{
                  backgroundColor: "#00174E",
                  height: 42,
                  width: 42,
                  borderRadius: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <IoLogoWhatsapp size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9870076954066!2d80.28735957367391!3d13.10000951205284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8124677793%3A0x97f482509d2f1ff1!2sKerry%20Indev%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1746779168972!5m2!1sen!2sin"
                width="100%"
                height="320px"
                style={{ border: 0, borderTopLeftRadius: 100,borderTopRightRadius: 100, }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>  
      </div>
      <Footer />
    </div>
  );
}
