import React from "react";
import Navbar from "../Navbar";
import {  Route, Routes } from "react-router-dom";
import { navItems } from "../utils/index";
function Root() {
  return (
    <Routes>
      {navItems.map((item, index) => (
        <Route key={index} path="/" element={<Navbar />}>
          <Route key={index} path={item.path} element={item.component} />
        </Route>
      ))}
    </Routes>
  );
}

export default Root;
