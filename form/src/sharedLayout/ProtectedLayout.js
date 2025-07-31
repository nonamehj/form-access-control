import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import { useFormContext } from "./../formContext";

const ProtectedLayout = ({ children }) => {
  const { currentUser } = useFormContext();

  if (currentUser === null) return null;
  if (!currentUser.loggedIn) return <Navigate to="/" replace />;
  return children;
  return true;
};

export default ProtectedLayout;
