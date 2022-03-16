import React from "react";
import { Routes, Route } from "react-router-dom";
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
      </Route>
    </Routes>
  );
}
