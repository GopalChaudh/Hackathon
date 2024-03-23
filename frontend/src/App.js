import About from "pages/About";
import Events from "pages/Events";
import Home from "pages/Home";
import Login from "components/Login/Login";
import NavBar from "./components/NavBar";
import NotFound from "pages/NotFound";
import React from "react";
import SignUp from "components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const events = [
    {
      key: 1,
      title: "Post 1",
      description: "This is a great description for the first post",
      image: "https://picsum.photos/id/1011/800/450",
    },
    {
      key: 2,
      title: "Post 2",
      description: "This is a great description for the second post",
      image: "https://picsum.photos/id/1011/800/450",
    },
    {
      key: 3,
      title: "Post 3",
      description: "This is a great description for the third post",
      image: "https://picsum.photos/id/1011/800/450",
    }
  ];
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
