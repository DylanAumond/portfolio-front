import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";
import CustomerAdmin from "../pages/admin/CustomerAdmin.js";
import CustomersAdmin from "../pages/admin/CustomersAdmin.js";
import ProjectsAdmin from "../pages/admin/ProjectsAdmin.js";
import RolesAdmin from "../pages/admin/RolesAdmin.js";
import TechnologiesAdmin from "../pages/admin/TechnologiesAdmin.js";
import Home from "../pages/Home.js";
import Page404 from "../pages/Page404.js";
import Project from "../pages/Project.js";
import Projects from "../pages/Projects.js";
export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:libelle" element={<Project />} />
        <Route path="admin">
          <Route path="customers" element={<CustomersAdmin />} />
          <Route path="customers/:libelle" element={<CustomerAdmin />} />
          <Route path="Technologies" element={<TechnologiesAdmin />} />
          <Route path="Projects" element={<ProjectsAdmin />} />
          <Route path="roles" element={<RolesAdmin />} />
        </Route>
        {/*catch all routes*/}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
