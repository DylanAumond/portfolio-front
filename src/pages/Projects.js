import React from "react";
import { useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Pojects</h1>
    </div>
  );
}
