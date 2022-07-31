import React from "react";
import { Routes, Route } from "react-router-dom";

// pages accessible for every user
import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";
import Projects from "../pages/Projects.js";
import Home from "../pages/Home.js";

// admin pages
import CustomerAdmin from "../pages/admin/CustomerAdmin.js";
import CustomersAdmin from "../pages/admin/CustomersAdmin.js";
import ProjectAdmin from "../pages/admin/ProjectAdmin.js";
import ProjectsAdmin from "../pages/admin/ProjectsAdmin.js";
import RolesAdmin from "../pages/admin/RolesAdmin.js";
import TechnologiesAdmin from "../pages/admin/TechnologiesAdmin.js";
import TechnologyAdmin from "../pages/admin/TechnologyAdmin.js";

// error pages
import Page403 from "../pages/Page403.js";
import Page404 from "../pages/Page404.js";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="projects" element={<Projects />} />

        {/* admin's pages */}
        <Route path="admin">
          <Route path="customers" element={<CustomersAdmin />} />
          <Route path="customers/:id" element={<CustomerAdmin />} />
          <Route path="technologies" element={<TechnologiesAdmin />} />
          <Route path="technologies/:id" element={<TechnologyAdmin />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="projects/:libelle" element={<ProjectAdmin />} />
          <Route path="roles" element={<RolesAdmin />} />
        </Route>

        {/*catch all routes*/}
        <Route path="403" element={<Page403 />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
