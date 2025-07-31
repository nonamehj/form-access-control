import "./index.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  AgreementPage,
  RegisterPage,
  UserPage,
  EditUserPage,
  DeleteUserPage,
  ContactPage,
} from "./pages";
import {
  SharedLayout,
  SharedLayoutPages,
  ProtectedLayout,
} from "./sharedLayout";

function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    const setMainContainerHeight = () => {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.style.height = `calc(var(--vh) * 100)`;
      }
    };

    const handleResize = () => {
      setViewportHeight();
      setMainContainerHeight();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<SharedLayoutPages />}>
          <Route index element={<LoginPage />} />
          <Route path="agree" element={<AgreementPage />} />
          <Route path="signup" element={<RegisterPage />} />
        </Route>
        <Route
          path="/user"
          element={
            <ProtectedLayout>
              <SharedLayoutPages />
            </ProtectedLayout>
          }
        >
          <Route index element={<UserPage />} />
          <Route path="edit" element={<EditUserPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="delete" element={<DeleteUserPage />} />
        </Route>
        <Route path="*" element={<div>eeror</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
