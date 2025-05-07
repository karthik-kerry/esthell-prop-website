import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import HeroImg from "../assets/hero_img.png";
import { Button, Dropdown, Input, Space } from "antd";
import { TbHomeDollar } from "react-icons/tb";
import { DownOutlined } from "@ant-design/icons";
import SearchIcon from "../assets/search.png";
import SelectIcon from "../assets/select.png";
import BookIcon from "../assets/book.png";
import HousesIcon from "../assets/houses.png";
import ApartmentIcon from "../assets/apartment.png";
import VillasIcon from "../assets/villas.png";
import OfficeIcon from "../assets/office.png";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
    //   icon: <SmileOutlined />,
    //   disabled: true,
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        3rd menu item
      </a>
    ),
    //   disabled: true,
  },
];

export default function HomePage() {
  const scrollContainerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Property, Property1];

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
    container.isDragging = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container.isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2;
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    const container = scrollContainerRef.current;
    container.isDragging = false;
  };

  return (
    <div>
      <Header />
      {/* Hero Section */}
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
              backgroundColor: "rgba(0, 0, 0, 0.4)",
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
            top: "27.2%",
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
            top: "62%",
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
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                backgroundColor: "#001C6B",
                height: 56,
                width: "auto",
                borderRadius: 12,
                color: "white",
                border: "none",
                fontSize: 16,
                fontWeight: "500",
              }}
              onClick={() => {}}
            >
              <TbHomeDollar color="white" />
              Buy a Property
            </Button>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                backgroundColor: "#FFFFFF",
                height: 56,
                width: "auto",
                borderRadius: 12,
                color: "#2D2D2D99",
                border: "none",
                fontSize: 16,
                fontWeight: "500",
              }}
              onClick={() => {}}
            >
              <TbHomeDollar color="#2D2D2D99" />
              Rent a Property
            </Button>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                backgroundColor: "#FFFFFF",
                height: 56,
                width: "auto",
                borderRadius: 12,
                color: "#2D2D2D99",
                border: "none",
                fontSize: 16,
                fontWeight: "500",
              }}
              onClick={() => {}}
            >
              <TbHomeDollar color="#2D2D2D99" />
              Commercial
            </Button>
          </div>
          <div
            style={{
              height: 46,
              backgroundColor: "white",
              width: "100%",
              borderRadius: 16,
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            {/* Location input */}
            <Input
              style={{
                height: 48,
                width: 190,
                borderWidth: 1,
                borderColor: "#0A51A333",
                borderRadius: 8,
                marginRight: 10,
              }}
              placeholder="Location"
            />
            {/* Property Type */}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{
                    height: 48,
                    width: 190,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#0A51A333",
                    borderRadius: 8,
                    paddingLeft: 10,
                    paddingRight: 10,
                    color: "#BFBFBF",
                    justifyContent: "space-between",
                    marginRight: 10,
                  }}
                >
                  Property Type
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* Property Size */}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{
                    height: 48,
                    width: 190,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#0A51A333",
                    borderRadius: 8,
                    paddingLeft: 10,
                    paddingRight: 10,
                    color: "#BFBFBF",
                    justifyContent: "space-between",
                    marginRight: 10,
                  }}
                >
                  Property Size
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* Min Range */}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{
                    height: 48,
                    width: 190,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#0A51A333",
                    borderRadius: 8,
                    paddingLeft: 10,
                    paddingRight: 10,
                    color: "#BFBFBF",
                    justifyContent: "space-between",
                    marginRight: 10,
                  }}
                >
                  Min Range
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* Max range */}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{
                    height: 48,
                    width: 190,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#0A51A333",
                    borderRadius: 8,
                    paddingLeft: 10,
                    paddingRight: 10,
                    color: "#BFBFBF",
                    justifyContent: "space-between",
                    marginRight: 10,
                  }}
                >
                  max Range
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            {/* Search */}
            <Button
              onClick={() => {}}
              style={{
                backgroundColor: "#001C6B",
                color: "white",
                fontSize: 16,
                fontWeight: 500,
                height: 48,
                paddingLeft: 25,
                paddingRight: 25,
                borderRadius: 12,
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div
        style={{
          backgroundColor: "#f2f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 50,
        }}
      >
        <h2
          style={{
            color: "#1b1b1b",
            fontSize: 42,
            fontWeight: "600",
            lineHeight: 0,
          }}
        >
          How It Works
        </h2>
        <p style={{ color: "#1b1b1b", fontSize: 16, lineHeight: 0 }}>
          Finding or listing your property is simple and stress-free.
        </p>
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
              height: 220,
              width: 340,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#00000029",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            <img src={SearchIcon} style={{ width: 72, marginBottom: 10 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
                marginBottom: 8,
              }}
            >
              01. Search for Location
            </p>
            <p
              style={{
                color: "#1B1B1BCC",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Browse listings based on your preferred location, price, and
              features.
            </p>
          </div>
          <div
            style={{
              height: 220,
              width: 340,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#00000029",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            <img src={SelectIcon} style={{ width: 72, marginBottom: 10 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
                marginBottom: 8,
              }}
            >
              02. Select Property Type
            </p>
            <p
              style={{
                color: "#1B1B1BCC",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Contact property owners or schedule visits directly through our
              platform.
            </p>
          </div>
          <div
            style={{
              height: 220,
              width: 340,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#00000029",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            <img src={BookIcon} style={{ width: 72, marginBottom: 10 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
                marginBottom: 8,
              }}
            >
              03. Book Your Property
            </p>
            <p
              style={{
                color: "#1B1B1BCC",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Complete your deal with full support from our verified agents and
              experts.
            </p>
          </div>
        </div>
      </div>
      {/* Explore by porperty type section */}
      <div
        style={{
          backgroundColor: "#001C6B",
          padding: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%" }}>
          <p
            style={{
              color: "white",
              fontSize: 42,
              fontWeight: "600",
              marginBottom: 0,
            }}
          >
            Explore by <br /> Property Type
          </p>
          <p style={{ color: "white", fontSize: 16 }}>
            Find your ideal property — whether you're <br /> buying, renting, or
            investing, we’ve got you <br /> covered.
          </p>
        </div>
        <div
          ref={scrollContainerRef}
          style={{
            width: "70%",
            display: "flex",
            alignItems: "center",
            gap: 20,
            overflowX: "auto",
            paddingBottom: 10,
            scrollbarWidth: "none",
            cursor: "grab",
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
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "white",
              height: 246,
              width: 234,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            <img src={HousesIcon} style={{ width: 92 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
              }}
            >
              Houses
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16, lineHeight: 0 }}>
              2000+ Property
            </p>
          </div>
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "white",
              height: 246,
              width: 234,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            <img src={ApartmentIcon} style={{ width: 92 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
              }}
            >
              Apartment
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16, lineHeight: 0 }}>
              1200+ Property
            </p>
          </div>
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "white",
              height: 246,
              width: 234,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            <img src={VillasIcon} style={{ width: 92 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
              }}
            >
              Villas
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16, lineHeight: 0 }}>
              1000+ Property
            </p>
          </div>
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "white",
              height: 246,
              width: 234,
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            <img src={OfficeIcon} style={{ width: 92 }} />
            <p
              style={{
                color: "#1b1b1b",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 0,
              }}
            >
              Office
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16, lineHeight: 0 }}>
              500+ Property
            </p>
          </div>
        </div>
      </div>
      {/* Why choose us section */}
      <div
        style={{
          backgroundColor: "#f2f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 50,
        }}
      >
        <h2
          style={{
            color: "#1b1b1b",
            fontSize: 42,
            fontWeight: "600",
            lineHeight: 0,
          }}
        >
          Why Choose Us
        </h2>
        <p style={{ color: "#1b1b1b", fontSize: 16, lineHeight: 0 }}>
          Why Thousands Trust Us
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 40,
          }}
        >
          <div
            style={{
              height: 160,
              width: 280,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#001C6B",
              borderRadius: 24,
              padding: 20,
            }}
          >
            <p
              style={{
                color: "#1B1B1B",
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 0,
              }}
            >
              Verified Listings
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16 }}>
              All properties are reviewed to ensure trust and transparency.
            </p>
          </div>
          <div
            style={{
              height: 160,
              width: 280,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              backgroundColor: "#001C6B",
              borderRadius: 24,
              padding: 20,
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 0,
              }}
            >
              Expert Support
            </p>
            <p style={{ color: "white", fontSize: 16 }}>
              Our experienced team is here to guide you throughout your journey.
            </p>
          </div>
          <div
            style={{
              height: 160,
              width: 280,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#001C6B",
              borderRadius: 24,
              padding: 20,
            }}
          >
            <p
              style={{
                color: "#1B1B1B",
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 0,
              }}
            >
              Smart Search Tools
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16 }}>
              Advanced filters and map-based search help you find the perfect
              home.
            </p>
          </div>
          <div
            style={{
              height: 160,
              width: 280,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#001C6B",
              borderRadius: 24,
              padding: 20,
            }}
          >
            <p
              style={{
                color: "#1B1B1B",
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 0,
              }}
            >
              Secure Transactions
            </p>
            <p style={{ color: "#1B1B1BCC", fontSize: 16 }}>
              We prioritize your safety with secure, hassle-free processes.
            </p>
          </div>
        </div>
      </div>
      {/* Featured properties for sales */}
      <div
        style={{
          backgroundColor: "#f2f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 50,
        }}
      >
        <h2
          style={{
            color: "#1b1b1b",
            fontSize: 42,
            fontWeight: "600",
            lineHeight: 0,
          }}
        >
          Featured Properties for Sales
        </h2>
        <p style={{ color: "#1b1b1b", fontSize: 16, lineHeight: 0 }}>
          Hand-Picked selection of quality places
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            padding: 20,
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              onClick={() => {}}
              style={{
                height: 450,
                width: 350,
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
                  style={{ color: "#1b1b1b", fontSize: 20, fontWeight: "600" }}
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
      <Footer />
    </div>
  );
}
