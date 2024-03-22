import Home from "pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/404" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
