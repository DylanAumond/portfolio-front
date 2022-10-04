import React from "react";

export default function Technocard({ technologie }) {
  return (
    <div
      className="
       w-12
       h-12 
       md:w-16 
       md:h-16 
       origin-center rotate-45 
       mx-auto
       bg-cover 
       bg-center 
       
       after:content-['']  
       after:origin-center 
       after:-rotate-45 
      "
      key={technologie._id}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technologie.logo})`,
        backgroundColor: "red",
      }}
    ></div>
  );
}
