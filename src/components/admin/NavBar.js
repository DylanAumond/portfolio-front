import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-96 h-screen bg-red flex justify-center ">
      <ul>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/customers"
            style={{ color: "white", margin: "50px" }}
          >
            See Customers
          </NavLink>
        </li>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/customer/new"
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
            See Projects
          </NavLink>
        </li>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/project/new"
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
            See Technologies
          </NavLink>
        </li>
        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/technology/new"
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

        <li className="mt-10 border-y-2">
          <NavLink
            to="/admin/users"
            style={{ color: "white", margin: "50px" }}
          >
            See Users
          </NavLink>
        </li>

      </ul>
    </div>
  );
}
