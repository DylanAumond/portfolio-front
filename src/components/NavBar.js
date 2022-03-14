import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full h-20 text-white bg-gray-900  flex items-center justify-between">
      <h1>DA</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Projects</Link>
        <Link to={"/"}>Contact</Link>
      </nav>
    </div>
  );
}
