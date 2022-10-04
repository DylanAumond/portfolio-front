import React from "react";

export default function Technocard({ technologie }) {
  return (
    <div
      className="octan"
      key={technologie._id}
      style={{
        ":after": {
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technologie.logo})`,
        },
      }}
    ></div>
  );
}
