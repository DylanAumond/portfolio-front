import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}
