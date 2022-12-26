import React from "react";

export default function Technocard({ technology }) {
  return(
    <div 
      className="h-24 w-24 bg-center bg-cover"
      style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technology.logo})`}}
    >
    </div>
  )
}
