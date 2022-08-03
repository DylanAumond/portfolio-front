import React from "react";

export default function Technocard({ technologie }) {
  return (
    <div
      className="w-12 h-12 md:w-16 md:h-16 bg-cover bg-center mx-auto"
      key={technologie._id}
      style={{
        backgroundImage: `url(http://localhost:5000/public/images/${technologie.logo})`,
      }}
    ></div>
  );
}
