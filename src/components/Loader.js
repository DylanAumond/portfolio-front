import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + "/imgs/Loader.gif"} alt="img" />
    </div>
  );
}
