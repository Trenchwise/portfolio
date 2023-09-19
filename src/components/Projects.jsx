import React from "react";
import crimeCheckerPic from "../assets/images/crimeCheckerpic.png";
import agifyApp from "../assets/images/agifyApp.png";

const Projects = () => {
  return (
    <>
      <div id="projectsWrapper">
        <h1>Projects</h1>

        <div className="projectCards">
          <h3>Crime Checker</h3>
          <div>
            <img
              id="crimeCheckerImage"
              // height="300px"
              // width="300px"
              src={crimeCheckerPic}
              alt="crimeCheckerpic"
            />
          </div>
        </div>
        <div>
          <h3>Simpsons Quote Generator</h3>
        </div>
        <div className="projectCards">
          <h3>Agify</h3>
          <img id="agifyImage" src={agifyApp} alt="agifyApp" />
        </div>
        <h3>Homage</h3>
      </div>
    </>
  );
};

export default Projects;
