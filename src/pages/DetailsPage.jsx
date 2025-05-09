import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import plainimage from "../assets/plain.png";
import Visualimage from "../assets/visual.png";
import { Rate, Progress, Flex, Divider, Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import dimensionalView from "../assets/dimensionalView.png";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function AboutPage() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4.2);
  const starProgress = [
    { progress: 100, label: "5", filled: true },
    { progress: 100, label: "4", filled: true },
    { progress: rating % 1 === 0 ? 100 : 50, label: "3", filled: true },
    { progress: 0, label: "2", filled: false },
    { progress: 0, label: "1", filled: false },
  ];
  const progressWidth = (rating / 5) * 100;
  const images = [Property, Property1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const types = [
    "House & Villa",
    "House & Villa",
    "House & Villa",
    "House & Villa",
    "House & Villa",
  ];

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.isDragging = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container || !container.isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2;
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.isDragging = false;
  };
  const handleCardClick = () => {
    navigate("/details");
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "rgb(242, 246, 250)",
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "auto",
            flexDirection: "row",
            gap: 30,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "rgb(242, 246, 250)",
          }}
        >
          <div
            style={{
              width: "65%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* detailes image view */}
            <div
              style={{
                height: 560,
                width: "100%",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                <img
                  src={images[currentIndex]}
                  alt={`Property ${currentIndex + 1}`}
                  style={{
                    height: 560,
                    width: "100%",
                    borderRadius: 12,
                    objectFit: "cover",
                  }}
                />
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    backgroundColor: "#1B1B1B4D",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                  }}
                >
                  <FaChevronLeft color="white" />
                </button>
                {/* Next Button */}
                <button
                  onClick={handleNext}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    backgroundColor: "#1B1B1B4D",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                  }}
                >
                  <FaChevronRight color="white" />
                </button>
                {/* Step Indicator */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 5,
                  }}
                >
                  {images.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor:
                          currentIndex === index ? "#FFFFFF" : "#D9D9D9",
                        cursor: "pointer",
                      }}
                      onClick={() => setCurrentIndex(index)}
                    ></div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "96%",
                  position: "relative",
                  bottom: "100%",
                  left: "2%",
                }}
              >
                <p
                  style={{
                    backgroundColor: "#42A418",
                    textTransform: "uppercase",
                    borderRadius: 4,
                    color: "white",
                    width: 64,
                    height: 30,
                    fontSize: 10,
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Verified
                </p>
                <div>
                  <TbShare
                    color="white"
                    style={{ paddingRight: 15, height: 25, width: 25 }}
                  />
                  <FaRegHeart color="white" style={{ height: 25, width: 25 }} />
                </div>
              </div>
            </div>
            {/* series of images */}
            <div
              ref={scrollContainerRef}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                overflowX: "auto",
                paddingBottom: 10,
                scrollbarWidth: "none",
                cursor: "grab",
                flexDirection: "row",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              <style>
                {`
      /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
      div::-webkit-scrollbar {
        display: none;
      }
    `}
              </style>
              <img
                src={Property1}
                style={{
                  height: 140,
                  width: "22%",
                  borderRadius: 12,
                  objectFit: "cover",
                }}
              />
              <img
                src={Property}
                style={{
                  height: 140,
                  width: "22%",
                  borderRadius: 12,

                  objectFit: "cover",
                }}
              />
              <img
                src={Property1}
                style={{
                  height: 140,
                  width: "22%",
                  borderRadius: 12,

                  objectFit: "cover",
                }}
              />
              <img
                src={Property}
                style={{
                  height: 140,
                  width: "22%",
                  borderRadius: 12,

                  objectFit: "cover",
                }}
              />
              <img
                src={Property1}
                style={{
                  height: 140,
                  width: "22%",
                  borderRadius: 12,
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* houseInfo */}
            <div
              style={{
                backgroundColor: "white",
                width: "98%",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "#1B1B1B",
                }}
              >
                <LuBedDouble color="#001C6B" />
                2.5, 3 BHK | Duplex & penthouse
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "#1B1B1B",
                }}
              >
                <PiBathtub color="#001C6B" />3 Baths
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "#1B1B1B",
                }}
              >
                <AiOutlineHome color="#001C6B" />
                1000 Sqft
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "#1B1B1B",
                }}
              >
                <AiOutlineCalendar color="#001C6B" />
                Year Built: 2025
              </div>
            </div>
            {/* Highlights */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 10,
              }}
            >
              <p style={{ color: "#1B1B1BCC" }}>Highlights: </p>
              <p
                style={{
                  backgroundColor: "#F4F4F4",
                  padding: 5,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1B1B1B",
                }}
              >
                North facing
              </p>
              <p
                style={{
                  backgroundColor: "#3BBF0F",
                  padding: 5,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                No Brokerage
              </p>
              <p
                style={{
                  backgroundColor: "#F4F4F4",
                  padding: 5,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1B1B1B",
                }}
              >
                <img
                  src={dimensionalView}
                  style={{ width: 16, height: 16, paddingRight: 5 }}
                />
                3D Floor Plans Available
              </p>
            </div>
            {/* content */}
            <div style={{ width: "100%" }}>
              <p
                style={{
                  width: "100%",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "#1B1B1BCC",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Sit arcu fermentum in
                proin morbi aliquet. Veslum pulvinar sed consectetur ultrices
                sagittis. Suspendisse justo risus cursus turpis.
              </p>
            </div>
            {/* details */}
            <div>
              <p style={{ fontWeight: 500, fontSize: 18 }}>Details</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* row1 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                </div>
                {/* row2 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                </div>
                {/* row3 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                </div>
                {/* row4 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                </div>
                {/* row5 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "48%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Type</p>
                    <p>:</p>
                    <p>House & Villa</p>
                  </div>
                </div>
              </div>
            </div>
            {/* other details */}
            <div>
              <p style={{ fontWeight: 500, fontSize: 18 }}>Details</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>* DTCP RERA APPROVED VILLA FOR SALE</p>
                  <p>* MINJUR ( VANNIPAKKAM )</p>
                  <p>* 2BHK VILLA ₹ 30 LAKHS</p>
                  <p>* PLOTS 600 SQFT ₹ 9 LAKHS</p>
                </div>
                <div
                  style={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>* PLOTS 800 SQFT ₹ 12 LAKHS</p>
                  <p>* 80% BANK LOAN AVAILABLE</p>
                  <p>* STATE HIGHWAY 900M</p>
                  <p>* FREE SITE VISIT AT ANYTIME</p>
                </div>
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "#001C6B" }}>
                MORE DETAILS CONTACT
              </p>
            </div>
            {/* floor plans */}
            <div>
              <p style={{ fontWeight: 500, fontSize: 18 }}>Floor Plans</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <img src={Visualimage} style={{ width: 280, height: 250 }} />
                <img src={plainimage} style={{ width: 280, height: 250 }} />
              </div>
            </div>
            {/* map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9870076954066!2d80.28735957367391!3d13.10000951205284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8124677793%3A0x97f482509d2f1ff1!2sKerry%20Indev%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1746779168972!5m2!1sen!2sin"
                width="100%"
                height="320px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            {/* locality review */}
            {/* <div>
            <p style={{ fontWeight: 500, fontSize: 18 }}>Locality Review</p>
            <div
              style={{
                width: "100%",
                heigth: "auto",
                backgroundColor: "white",
                padding: 8,
              }}
            >
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontWeight: 500, fontSize: 28 }}>
                    4.2<span style={{ fontWeight: 200, fontSize: 14 }}>/5</span>
                  </p>
                  <Rate
                    allowHalf
                    value={rating}
                    onChange={(value) => setRating(value)}
                    defaultValue={4.2}
                    style={{ fontSize: 20, color: "#42A418", marginTop: -20 }}
                  />
                  <div>
                    <p style={{}}>Average Rating</p>
                    <p
                      style={{ fontSize: 14, fontWeight: 200, marginTop: -18 }}
                    >
                      (16 Total Reviews)
                    </p>
                  </div>

                  <div style={{ width: "100%" }}>
                    <Flex vertical gap="small">
                      {starProgress.map((star, index) => (
                        <div key={index} style={{ display: "flex" }}>
                          <Progress
                            percent={star.progress}
                            size="small"
                            strokeColor={star.filled ? "#ffe234" : "#D3D3D3"}
                            showInfo={false}
                            style={{ width: "100%" }}
                          />
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: 8,
                              marginTop: -4,
                            }}
                          >
                            {star.label}
                            <StarFilled
                              style={{ marginLeft: 4, color: "#ffe234" }}
                            />
                          </p>
                        </div>
                      ))}
                    </Flex>
                  </div>
                </div>
                <div
                  style={{
                    height: "auto",
                    width: "0.5px",
                    backgroundColor: "#D3D3D3",
                    margin: "0 8px",
                    marginLeft: 12,
                  }}
                />
                <div>

                  
                </div>
              </div>
                
            </div>
          </div> */}
          </div>

          {/* static */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              width: "35%",
              height: "100%",
              borderRadius: 16,
              alignContent: "center",
              justifyContent: "flex-start",
              padding: 20,
              maxHeight: "80vh", // Set a max height (adjust based on your layout)
              overflowY: "auto", // Enables scrolling
              position: "sticky", // Make it sticky after a certain point
              top: "20px", // Distance from top when it becomes sticky
            }}
          >
            <p style={{ fontWeight: 600, fontSize: 20, marginTop: -5 }}>
              AB Properties
            </p>
            <p style={{ fontWeight: 500, fontSize: 14, marginTop: -15 }}>
              Apartment / Plot in{" "}
              <span style={{ fontWeight: 200, fontSize: 14 }}>
                kolathur, Chennai
              </span>{" "}
            </p>
            <div style={{ display: "flex", gap: 5 }}>
              <p style={{ fontWeight: 600, fontSize: 32, marginTop: -5 }}>
                ₹30L
              </p>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#001C6B",
                  marginTop: 5,
                }}
              >
                + Charges
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                backgroundColor: "#D3D3D3",
                marginTop: -20,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Esthell Properties
              </p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: -10,
                }}
              >
                Listed on: 20 mar 2025
              </p>
            </div>
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
                  marginTop: -8,
                }}
              >
                Enquiry Now
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: 500, fontSize: 18 }}>Similar Listings</p>
            <p style={{ color: "#001C6B", fontWeight: 500, fontSize: 18 }}>
              View All
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                onClick={handleCardClick}
                style={{
                  height: "auto",
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "white",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#00000029",
                  padding: 20,
                }}
              >
                <div
                  style={{
                    height: 289,
                    width: "100%",
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 400,
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={images[currentIndex]}
                      alt={`Property ${currentIndex + 1}`}
                      style={{
                        height: 289,
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: 12,
                        objectFit: "cover",
                      }}
                    />
                    {/* Prev Button */}
                    <button
                      onClick={handlePrev}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 10,
                        transform: "translateY(-50%)",
                        backgroundColor: "#1B1B1B4D",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: 30,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      <FaChevronLeft color="white" />
                    </button>
                    {/* Next Button */}
                    <button
                      onClick={handleNext}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: 10,
                        transform: "translateY(-50%)",
                        backgroundColor: "#1B1B1B4D",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: 30,
                        height: 30,
                        cursor: "pointer",
                      }}
                    >
                      <FaChevronRight color="white" />
                    </button>
                    {/* Step Indicator */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 5,
                      }}
                    >
                      {images.map((_, index) => (
                        <div
                          key={index}
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor:
                              currentIndex === index ? "#FFFFFF" : "#D9D9D9",
                            cursor: "pointer",
                          }}
                          onClick={() => setCurrentIndex(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "96%",
                      position: "relative",
                      bottom: "103%",
                      left: "2%",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#42A418",
                        textTransform: "uppercase",
                        borderRadius: 4,
                        color: "white",
                        width: 54,
                        height: 20,
                        fontSize: 10,
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Verified
                    </p>
                    <p
                      style={{
                        backgroundColor: "#1B1B1B66",
                        textTransform: "uppercase",
                        borderRadius: 4,
                        color: "white",
                        width: 60,
                        height: 22,
                        fontSize: 14,
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Resale
                    </p>
                    <FaRegHeart color="white" />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#1b1b1b",
                        fontSize: 16,
                        fontWeight: "500",
                        marginBottom: -10,
                      }}
                    >
                      Esthell Homes
                    </p>
                    <p
                      style={{
                        color: "#1b1b1b",
                        fontSize: 14,
                        fontWeight: "500",
                      }}
                    >
                      Apartment / Plot in{" "}
                      <span style={{ color: "#1B1B1BCC", fontWeight: "300" }}>
                        Velachery, Chennai
                      </span>
                    </p>
                  </div>
                  <p
                    style={{
                      color: "#1b1b1b",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    ₹30L
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#0A51A30D",
                    width: "95%",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      color: "#1B1B1B",
                    }}
                  >
                    <LuBedDouble color="#001C6B" />2 BHK
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      color: "#1B1B1B",
                    }}
                  >
                    <PiBathtub color="#001C6B" />3 Baths
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      color: "#1B1B1B",
                    }}
                  >
                    <AiOutlineHome color="#001C6B" />
                    1000 Sqft
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 10,
                  }}
                >
                  <p style={{ color: "#1B1B1BCC" }}>Highlights: </p>
                  <p
                    style={{
                      backgroundColor: "#F4F4F4",
                      padding: 5,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1B1B1B",
                    }}
                  >
                    North facing
                  </p>
                  <p
                    style={{
                      backgroundColor: "#F4F4F4",
                      padding: 5,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1B1B1B",
                    }}
                  >
                    North facing
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
