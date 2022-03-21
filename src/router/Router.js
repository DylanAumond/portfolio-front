import React from "react";
import { Routes, Route } from "react-router-dom";
import FormCustomer from "../pages/admin/FormCustomer.js";
import FormProject from "../pages/admin/FormProject.js";
import FormTechnology from "../pages/admin/FormTechnology.js";
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
          <Route path="project/form" element={<FormProject />} />
          <Route path="technology/form" element={<FormTechnology />} />
          <Route path="customer/form" element={<FormCustomer />} />
        </Route>
      </Route>
    </Routes>
  );
}
