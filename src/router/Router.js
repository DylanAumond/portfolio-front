import React, {lazy} from "react";
import { Routes, Route } from "react-router-dom";

// pages accessible from every user
import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";

const Home = lazy(()=>import("../pages/Home.js"))


// admin pages
const CustomerAdmin = lazy( ()=>import("../pages/admin/CustomerAdmin.js"))
const CustomersAdmin = lazy( () =>import("../pages/admin/CustomersAdmin.js"))
const AddCustomerAdmin = lazy( () =>import("../pages/admin/AddCustomerAdmin.js"))

const ProjectAdmin = lazy( () => import("../pages/admin/ProjectAdmin.js"))
const ProjectsAdmin = lazy( () => import("../pages/admin/ProjectsAdmin.js"))
const AddProjectAdmin = lazy( () => import("../pages/admin/AddProjectAdmin.js"))

const RolesAdmin = lazy( () => import("../pages/admin/RolesAdmin.js"))

const TechnologiesAdmin = lazy( () => import("../pages/admin/TechnologiesAdmin.js"))
const TechnologyAdmin = lazy( () => import("../pages/admin/TechnologyAdmin.js"))
const AddTechnologyAdmin = lazy( () => import("../pages/admin/AddTechnologyAdmin.js"))

const UsersAdmin = lazy( () => import("../pages/admin/UsersAdmin.js"))


// error pages
const Page403 = lazy( () => import("../pages/Page403.js"))
const Page404 = lazy( () => import("../pages/Page403.js"))
const HomeAdmin = lazy( () => import("../pages/admin/HomeAdmin.js"))

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />

        {/* admin's pages */}
        <Route path="admin">
          <Route index element={<HomeAdmin />} />

          <Route path="customers" element={<CustomersAdmin />} />
          <Route path="customer/new" element={<AddCustomerAdmin />} />
          <Route path="customers/:id" element={<CustomerAdmin />} />

          <Route path="technologies" element={<TechnologiesAdmin />} />
          <Route path="technologies/:id" element={<TechnologyAdmin />} />
          <Route path="technology/new" element={<AddTechnologyAdmin />} />

          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="projects/:id" element={<ProjectAdmin />} />
          <Route path="project/new" element={<AddProjectAdmin />} />

          <Route path="roles" element={<RolesAdmin />} />

          <Route path="users" element={<UsersAdmin />} />
        </Route>

        {/*catch all routes*/}
        <Route path="403" element={<Page403 />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
