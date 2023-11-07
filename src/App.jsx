import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
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
      <Intro />

      {/* <Routes> */}
      <Projects />
      {/* <Route path="projects" element={<Projects />} /> */}
      <Contact />
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* </Routes> */}
      <Footer />
    </>
  );
};

export default App;
