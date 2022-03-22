import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomersAdmin from "../pages/admin/CustomersAdmin.js";
import TechnologiesAdmin from "../pages/admin/TechnologiesAdmin.js";
import Home from "../pages/Home.js";
import Project from "../pages/Project.js";
import Projects from "../pages/Projects.js";
export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:libelle" element={<Project />} />
        <Route path="admin">
          <Route path="customers" element={<CustomersAdmin />} />
          <Route path="Technologies" element={<TechnologiesAdmin />} />
        </Route>
      </Route>
    </Routes>
  );
}
