import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CONTACT, LOGIN } from "../constant/Modal";

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 text-white bg-gray-900  flex items-center justify-between fixed top-0">
      <h1>DA</h1>
      <nav>
        <Link to={"/"} className="">
          Accueil
        </Link>
        <Link to={"/projects"} className="mx-4">
          Projets
        </Link>
        <button className="mr-4" onClick={() => dispatch({ type: CONTACT })}>
          Contact
        </button>
        {/*<button className="mr-4" onClick={() => dispatch({ type: LOGIN })}>
          Connexion
          </button>*/}
      </nav>
    </div>
  );
}
