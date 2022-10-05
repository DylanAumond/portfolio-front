import React from "react";
import glamorous from "glamorous";

export default function Technocard({ technologie, size }) {
  const Hexa = glamorous.div({
    marginTop: `${size / 4 + 5}px`,
    marginRight: "5px",
    width: `${size}px`,
    height: `${size / 2}px`,
    position: "relative",
    background: "#FF1616",
    backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technologie.logo})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    ":before": {
      content: `''`,
      position: "absolute",
      top: "-50%",
      left: 0,
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size / 4}px solid #FF1616`,
    },
    ":after": {
      content: `''`,
      position: "absolute",
      bottom: "-50%",
      left: 0,
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderTop: `${size / 4}px solid #FF1616`,
    },
  });

  return <Hexa key={technologie._id} />;
}
