import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import dimensionalView from "../assets/dimensionalView.png"
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome,AiOutlineCalendar } from "react-icons/ai";

export default function AboutPage() {
  const images = [Property, Property1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const types = ["House & Villa", "House & Villa", "House & Villa", "House & Villa", "House & Villa"];
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
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          height: "auto",
          flexDirection: "row",
          gap: 30,
          paddingTop: 20,
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 20,
          backgroundColor:"rgb(242, 246, 250)",
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
                borderRadius: 12,  cursor: "pointer",
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
                          padding:10,
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
                          <LuBedDouble color="#001C6B" />2.5, 3 BHK | Duplex & penthouse
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
                   <img src={dimensionalView}
                  style={{ width: 16, height: 16,paddingRight:5}}  
              />
                  3D Floor Plans Available  
                </p>
         </div>
         {/* content */}
          <div style={{width:"100%"}}>
          <p style={{width:"100%",fontWeight:300,fontSize:14,color:"#1B1B1BCC"}}>
          Lorem ipsum dolor sit amet consectetur. Sit arcu fermentum in proin morbi aliquet. Veslum pulvinar sed consectetur ultrices sagittis. Suspendisse justo risus cursus turpis.
        </p>
          </div>
          {/* details */}
          <div>
            <p style={{fontWeight:500,fontSize:18}} >Details</p>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              {/* row1 */}
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{ width:"48%",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
           <div style={{ width:"48%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>

           
             
              

              </div>
               {/* row2 */}
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{ width:"48%",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
           <div style={{ width:"48%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
              </div>
                {/* row3 */}
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{ width:"48%",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
           <div style={{ width:"48%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
              </div>
               {/* row4 */}
               <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{ width:"48%",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
           <div style={{ width:"48%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
              </div>
               {/* row5 */}
               <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{ width:"48%",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
               <p>Type</p>
               <p>:</p>
               <p>House & Villa</p>
           </div>
           
              </div>


            </div>
          </div>
        </div>
        {/* static */}
        <div>static</div>
      </div>
      <Footer />
    </div>
  );
}
