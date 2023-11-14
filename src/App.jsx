import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
// import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Contact />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <Footer />
    </>
  );
};

export default App;
