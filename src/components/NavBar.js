import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN } from "../constant/Modal";

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 text-white bg-gray-900  flex items-center justify-between fixed top-0">
      <h1>DA</h1>
      <nav>
        <Link to={"/"} className="mx-4">
          Home
        </Link>
        <Link to={"/"} className="mx-4">
          About
        </Link>
        <Link to={"/projects"} className="mx-4">
          Projects
        </Link>
        <Link to={"/"} className="mx-4">
          Contact
        </Link>
        <button onClick={() => dispatch({ type: LOGIN })}>Login</button>
      </nav>
    </div>
  );
}
