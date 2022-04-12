import React from "react";

export default function Technocard({ technologie }) {
  return (
    <div
      className="w-16 h-16 md:w-32 md:h-32 bg-cover bg-center mx-auto"
      key={technologie._id}
      style={{
        backgroundImage: `url(http://localhost:5000/public/images/${technologie.logo})`,
      }}
    ></div>
  );
}
