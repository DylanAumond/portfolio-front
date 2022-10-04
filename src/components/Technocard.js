import React from "react";

export default function Technocard({ technologie }) {
  return (
    <div
      className="octan mt-14"
      key={technologie._id}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technologie.logo})`,
      }}
    ></div>
  );
}
