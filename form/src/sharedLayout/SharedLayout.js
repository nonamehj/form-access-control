import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import SearchForm from "../components/search/SearchForm";

const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <SearchForm />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
