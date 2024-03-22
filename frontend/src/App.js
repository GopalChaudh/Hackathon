import Home from "pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "components/Login/Login";
import SignUp from "components/SignUp/SignUp";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/404" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
