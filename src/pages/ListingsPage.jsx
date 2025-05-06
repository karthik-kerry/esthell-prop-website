import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ListingsPage() {
  return (
    <div>
      <Header />
      <div style={{display:"flex",flexDirection:"row",backgroundColor:"aliceblue",paddingRight:40,paddingLeft:45}}>
        <div style={{width:"30%",height:1435,borderRadius:20,padding:24,gap:16,border:1,backgroundColor:"white",margin:30}}>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <p>Filters</p>
            <p>Clear All</p>
          </div>
  
        </div>
        <div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
