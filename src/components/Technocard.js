import React from "react";

export default function Technocard({ technology }) {
  return (
    <div className="h-auto w-30 rounded-lg p-2 text-center">
      <div
        className="h-24 w-24 bg-center bg-cover m-auto"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technology.logo})`,
        }}
      ></div>
      <h3 className="mt-3">{technology.libelle}</h3>
    </div>
  );
}
