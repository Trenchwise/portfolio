import React from "react";
import crimeCheckerPic from "../assets/images/crimeCheckerpic.png";
import agifyApp from "../assets/images/agifyApp.png";

const Projects = () => {
  return (
    <>
      <h1>Work</h1>
      <div id="projectsWrapper">
        <div className="projectCards">
          <h3>Crime Checker</h3>
          <div>
            <img
              id="crimeCheckerImage"
              src={crimeCheckerPic}
              alt="crimeCheckerpic"
            />
          </div>
        </div>
        <div className="projectCards">
          <h3>Simpsons Quote Generator</h3>
          <div id="simpsons"></div>
        </div>
        <div className="projectCards">
          <h3>Agify</h3>
          <img id="agifyImage" src={agifyApp} alt="agifyApp" />
        </div>
        <div className="projectCards">
          <h3>Homage</h3>
          <div id="homage"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
