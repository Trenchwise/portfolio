import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;
