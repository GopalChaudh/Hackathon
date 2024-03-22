import About from "pages/About";
import Home from "pages/Home";
import Login from "components/Login/Login";
import NavBar from "./components/NavBar";
import NotFound from "pages/NotFound";
import React from "react";
import SignUp from "components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/404" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
