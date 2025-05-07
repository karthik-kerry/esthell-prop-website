import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Collapse } from "antd";
import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Slider, Button, Checkbox } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import Logo from "../assets/logo.png";
export default function ListingsPage() {
  const [disabled, setDisabled] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const images = [Property, Property1];
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButtons, setActiveButtons] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false,
    button9: false,
    button10: false,
    button11: false,
    button12: false,
    button13: false,
    button14: false,
    button15: false,
    button16: false,
    button17: false,
    button18: false,
    button19: false,
    button20: false,
    button21: false,
  });
  const [value, setValue] = useState(50); // Default value set to 50

  const handleChange = (value) => {
    setValue(value);
  };
  const onCheck = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedLocations((prev) => [...prev, value]);
    } else {
      setSelectedLocations((prev) => prev.filter((item) => item !== value));
    }
  };

  const { Panel } = Collapse;
  const onChange = (checked) => {
    setDisabled(checked);
  };
  const handleClick = (buttonId) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
  };
  const items = [
    {
      key: "1",
      label: <span style={{ fontWeight: 500 }}>Budget</span>,
      children: (
        <div>
          <Slider
            min={0}
            max={100}
            value={value}
            onChange={handleChange}
            step={1}
            tooltipVisible
          />
        </div>
      ),
    },
    {
      key: "2",
      label: <span style={{ fontWeight: 500 }}>Type of property</span>,
      children: (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Button
                onClick={() => handleClick("button1")}
                icon={
                  <PlusOutlined
                    style={{
                      color: activeButtons.button1 ? "white" : "#1B1B1BCC",
                      opacity: "70%",
                    }}
                  />
                }
                style={{
                  borderColor: activeButtons.button1
                    ? "#FFFFFF"
                    : "rgba(45, 45, 45, 0.2)",
                  backgroundColor: activeButtons.button1
                    ? "#001C6B"
                    : "transparent",
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  borderWidth: 1,
                }}
              >
                <p
                  style={{
                    fontWeight: 400,
                    color: activeButtons.button1 ? "white" : "#1B1B1BCC",
                    fontSize: 14,
                    opacity: "80%",
                  }}
                >
                  1 BHK
                </p>
              </Button>
              <Button
                onClick={() => handleClick("button2")}
                icon={
                  <PlusOutlined
                    style={{
                      color: activeButtons.button2 ? "white" : "#1B1B1BCC",
                      opacity: "70%",
                    }}
                  />
                }
                style={{
                  borderColor: activeButtons.button2
                    ? "#FFFFFF"
                    : "rgba(45, 45, 45, 0.2)",
                  backgroundColor: activeButtons.button2
                    ? "#001C6B"
                    : "transparent",
                  borderRadius: 30,
                  borderWidth: 1,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: 400,
                    color: activeButtons.button2 ? "white" : "#1B1B1BCC",
                    fontSize: 14,
                    opacity: "80%",
                  }}
                >
                  2 BHK
                </p>
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Button
                onClick={() => handleClick("button3")}
                icon={
                  <PlusOutlined
                    style={{
                      color: activeButtons.button3 ? "white" : "#1B1B1BCC",
                      opacity: "70%",
                    }}
                  />
                }
                style={{
                  borderColor: activeButtons.button3
                    ? "#FFFFFF"
                    : "rgba(45, 45, 45, 0.2)",
                  backgroundColor: activeButtons.button3
                    ? "#001C6B"
                    : "transparent",
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  borderWidth: 1,
                }}
              >
                <p
                  style={{
                    fontWeight: 400,
                    color: activeButtons.button3 ? "white" : "#1B1B1BCC",
                    fontSize: 14,
                    opacity: "80%",
                  }}
                >
                  3 BHK
                </p>
              </Button>
              <Button
                onClick={() => handleClick("button4")}
                icon={
                  <PlusOutlined
                    style={{
                      color: activeButtons.button4 ? "white" : "#1B1B1BCC",
                      opacity: "70%",
                    }}
                  />
                }
                style={{
                  borderColor: activeButtons.button4
                    ? "#FFFFFF"
                    : "rgba(45, 45, 45, 0.2)",
                  backgroundColor: activeButtons.button4
                    ? "#001C6B"
                    : "transparent",
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  borderWidth: 1,
                }}
              >
                <p
                  style={{
                    fontWeight: 400,
                    color: activeButtons.button4 ? "white" : "#1B1B1BCC",
                    fontSize: 14,
                    opacity: "80%",
                  }}
                >
                  4 BHK
                </p>
              </Button>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: <span style={{ fontWeight: 500 }}> Construction Status</span>,
      children: (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Button
              onClick={() => handleClick("button5")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button5 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button5
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button5
                  ? "#001C6B"
                  : "transparent",
                width: 134,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button5 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                New launch
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button6")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button6 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button6
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button6
                  ? "#001C6B"
                  : "transparent",
                width: 183,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button6 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Under construction
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button7")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button7 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button7
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button7
                  ? "#001C6B"
                  : "transparent",
                width: 155,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button7 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Ready to move
              </p>
            </Button>
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: <span style={{ fontWeight: 500 }}>Posted by</span>,
      children: (
        <div>
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                <Button
                  onClick={() => handleClick("button8")}
                  icon={
                    <PlusOutlined
                      style={{
                        color: activeButtons.button8 ? "white" : "#1B1B1BCC",
                        opacity: "70%",
                      }}
                    />
                  }
                  style={{
                    borderColor: activeButtons.button8
                      ? "#FFFFFF"
                      : "rgba(45, 45, 45, 0.2)",
                    backgroundColor: activeButtons.button8
                      ? "#001C6B"
                      : "transparent",
                    width: 95,
                    height: 32,
                    borderRadius: "30px",
                    borderWidth: "1px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 400,
                      color: activeButtons.button8 ? "white" : "#1B1B1BCC",
                      fontSize: 14,
                      opacity: "80%",
                    }}
                  >
                    Owner
                  </p>
                </Button>
                <Button
                  onClick={() => handleClick("button9")}
                  icon={
                    <PlusOutlined
                      style={{
                        color: activeButtons.button9 ? "white" : "#1B1B1BCC",
                        opacity: "70%",
                      }}
                    />
                  }
                  style={{
                    borderColor: activeButtons.button9
                      ? "#FFFFFF"
                      : "rgba(45, 45, 45, 0.2)",
                    backgroundColor: activeButtons.button9
                      ? "#001C6B"
                      : "transparent",
                    width: 103,
                    height: 32,
                    borderRadius: "30px",
                    borderWidth: "1px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 400,
                      color: activeButtons.button9 ? "white" : "#1B1B1BCC",
                      fontSize: 14,
                      opacity: "80%",
                    }}
                  >
                    Builder
                  </p>
                </Button>
              </div>
              <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                <Button
                  onClick={() => handleClick("button10")}
                  icon={
                    <PlusOutlined
                      style={{
                        color: activeButtons.button10 ? "white" : "#1B1B1BCC",
                        opacity: "70%",
                      }}
                    />
                  }
                  style={{
                    borderColor: activeButtons.button10
                      ? "#FFFFFF"
                      : "rgba(45, 45, 45, 0.2)",
                    backgroundColor: activeButtons.button10
                      ? "#001C6B"
                      : "transparent",
                    width: 95,
                    height: 32,
                    borderRadius: "30px",
                    borderWidth: "1px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 400,
                      color: activeButtons.button10 ? "white" : "#1B1B1BCC",
                      fontSize: 14,
                      opacity: "80%",
                    }}
                  >
                    Dealer
                  </p>
                </Button>
                <Button
                  onClick={() => handleClick("button11")}
                  icon={
                    <PlusOutlined
                      style={{
                        color: activeButtons.button11 ? "white" : "#1B1B1BCC",
                        opacity: "70%",
                      }}
                    />
                  }
                  style={{
                    borderColor: activeButtons.button11
                      ? "#FFFFFF"
                      : "rgba(45, 45, 45, 0.2)",
                    backgroundColor: activeButtons.button11
                      ? "#001C6B"
                      : "transparent",
                    width: 150,
                    height: 32,
                    borderRadius: "30px",
                    borderWidth: "1px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 400,
                      color: activeButtons.button11 ? "white" : "#1B1B1BCC",
                      fontSize: 14,
                      opacity: "80%",
                    }}
                  >
                    Feature Dealer
                  </p>
                </Button>
              </div>
            </div>
          </>
        </div>
      ),
    },
    {
      key: "5",
      label: <span style={{ fontWeight: 500 }}>Area (sq.ft.)</span>,
      children: (
        <div>
          <Slider defaultValue={30} disabled={disabled} />
          <Slider range defaultValue={[20, 50]} disabled={disabled} />
        </div>
      ),
    },
    {
      key: "6",
      label: <span style={{ fontWeight: 500 }}>Localities</span>,
      children: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Checkbox value="GST Road" onChange={onCheck}>
            GST Road
          </Checkbox>
          <Checkbox value="OMR" onChange={onCheck}>
            OMR
          </Checkbox>
          <Checkbox value="Tambaram" onChange={onCheck}>
            Tambaram
          </Checkbox>
          <Checkbox value="ECR" onChange={onCheck}>
            ECR
          </Checkbox>
          <Checkbox value="Guduvancheri" onChange={onCheck}>
            Guduvancheri
          </Checkbox>
          <div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
            <SearchOutlined />
            <p
              style={{
                fontWeight: 500,
                size: 14,
                font: "poppins",
                color: "#001C6B",
              }}
            >
              More Localities
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "7",
      label: <span style={{ fontWeight: 500 }}>Purchase type</span>,
      children: (
        <>
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Button
              onClick={() => handleClick("button12")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button12 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button12
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button12
                  ? "#001C6B"
                  : "transparent",
                width: "auto",
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button12 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Resale
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button13")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button13 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button13
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button13
                  ? "#001C6B"
                  : "transparent",
                width: "auto",
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button13 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                New Booking
              </p>
            </Button>
          </div>
        </>
      ),
    },
    {
      key: "8",
      label: <span style={{ fontWeight: 500 }}>Amenities</span>,
      children: (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Button
              onClick={() => handleClick("button14")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button14 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button14
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button14
                  ? "#001C6B"
                  : "transparent",
                width: 177,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button14 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Vaastu Compliant
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button15")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button15 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button15
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button15
                  ? "#001C6B"
                  : "transparent",
                width: 177,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button15 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Security Personnel
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button16")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button16 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button16
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button16
                  ? "#001C6B"
                  : "transparent",
                width: 135,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button16 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Gymnasium
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button17")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button17 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button17
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button17
                  ? "#001C6B"
                  : "transparent",
                width: 79,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button17 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Park
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button18")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button18 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button18
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button18
                  ? "#001C6B"
                  : "transparent",
                width: 101,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button18 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Parking
              </p>
            </Button>
          </div>
        </>
      ),
    },
    {
      key: "9",
      label: <span style={{ fontWeight: 500 }}> Furnishing status</span>,
      children: (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Button
              onClick={() => handleClick("button19")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button19 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button19
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button19
                  ? "#001C6B"
                  : "transparent",
                width: 118,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button19 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Furnished
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button20")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button20 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button20
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button20
                  ? "#001C6B"
                  : "transparent",
                width: 133,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button20 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Unfurnished
              </p>
            </Button>
            <Button
              onClick={() => handleClick("button21")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button21 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: activeButtons.button21
                  ? "#FFFFFF"
                  : "rgba(45, 45, 45, 0.2)",
                backgroundColor: activeButtons.button21
                  ? "#001C6B"
                  : "transparent",
                width: 150,
                height: 32,
                borderRadius: 30,
                borderWidth: 1,
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  color: activeButtons.button21 ? "white" : "#1B1B1BCC",
                  fontSize: 14,
                  opacity: "80%",
                }}
              >
                Semifurnished
              </p>
            </Button>
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgb(242, 246, 250)",
          paddingRight: 40,
          paddingLeft: 40,
        }}
      >
        <div
          style={{
            width: "25%",
            height: "100%",
            borderRadius: 20,
            padding: 20,
            gap: 16,
            border: 1,
            backgroundColor: "white",
            margin: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontWeight: 500,
                size: 16,
                font: "poppins",
                color: "black",
              }}
            >
              Filters
            </p>
            <p
              style={{
                fontWeight: 500,
                size: 14,
                font: "poppins",
                color: "#001C6B",
              }}
            >
              Clear All
            </p>
          </div>
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#64748B",
              opacity: "20%",
              margin: "0.8px 0",
            }}
          />
          <Collapse
            items={items}
            defaultActiveKey={items.map((item) => item.key)}
            bordered={false}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <DownOutlined rotate={isActive ? 180 : 0} />
            )}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ font: "Poppins", fontWeight: 400, fontSize: 28 }}>
            Featured Properties
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 25,
            }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                onClick={() => {}}
                style={{
                  height: 300,
                  width: "91%",
                  gap: 24,
                  display: "flex",
                  flexDirection: "row",
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
                    width: 300,
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
                        height: 298,
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
                      bottom: "105%",
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
                    flexDirection: "column",
                    width: "60%",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p
                        style={{
                          color: "#1b1b1b",
                          fontSize: 16,
                          fontWeight: "500",
                          marginTop: -0.5,
                        }}
                      >
                        {" "}
                        Esthell Homes
                      </p>
                      <p
                        style={{
                          color: "#1b1b1b",
                          fontSize: 14,
                          fontWeight: "500",
                          marginTop: -10,
                        }}
                      >
                        {" "}
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
                        marginTop: -5,
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
                      justifyItems: "center",
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <p
                      style={{
                        color: "#1B1B1BCC",
                      }}
                    >
                      Highlights:{" "}
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
                  <p
                    style={{
                      color: "#1b1b1b",
                      fontSize: 14,
                      fontWeight: 300,
                      marginTop: -10,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Sit arcu fermentum
                    in proin morbi aliquet. Vestibulum pulvinar sed consectetur
                    ultrices sagittis.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", flexDirection: "row", gap: 12 }}
                    >
                      <img
                        src={Logo}
                        style={{
                          backgroundColor: "#0A51A3",
                          borderRadius: 50,
                          height: 38,
                          width: 38,
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            marginTop: -6,
                          }}
                        >
                          Esthell Properties
                        </p>
                        <p
                          style={{
                            fontWeight: 400,
                            fontSize: 14,
                            marginTop: -8,
                          }}
                        >
                          Listed on: 20 mar 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button
                        style={{
                          width: "131px",
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
