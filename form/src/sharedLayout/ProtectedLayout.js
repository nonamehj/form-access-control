import React from "react";
import { Navigate } from "react-router-dom";
import { useFormContext } from "./../formContext";

const ProtectedLayout = ({ children }) => {
  const { currentUser } = useFormContext();

  if (currentUser === null) return null;
  if (!currentUser.loggedIn) return <Navigate to="/" replace />;
  return children;
  return true;
};

export default ProtectedLayout;
