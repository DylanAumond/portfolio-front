import React from "react";

export default function Technocard({ technologie }) {
  return (
    <div
      className="w-32 h-32 bg-cover"
      key={technologie._id}
      style={{
        backgroundImage: `url(http://localhost:5000/public/images/${technologie.logo})`,
      }}
    >
      <h3>{technologie.libelle}</h3>
    </div>
  );
}
