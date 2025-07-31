import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

const SharedLayoutPages = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default SharedLayoutPages;
