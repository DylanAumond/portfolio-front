import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w-72 h-screen bg-red flex justify-center ">
      <ul>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/customers"
            style={{ color: "white", margin: "50px" }}
          >
            Add Customer
          </NavLink>
        </li>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/projects"
            style={{ color: "white", margin: "50px" }}
          >
            Add Project
          </NavLink>
        </li>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/technologies"
            style={{ color: "white", margin: "50px" }}
          >
            Add Technology
          </NavLink>
        </li>
        <li className="mt-10 border-y-2">
          <NavLink to="/admin/roles" style={{ color: "white", margin: "50px" }}>
            Add Role
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
