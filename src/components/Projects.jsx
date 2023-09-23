import React from "react";
import crimeCheckerFullScreen from "../assets/images/crimeCheckerFullScreen.png";
import agifyAppFullScreen from "../assets/images/agifyAppFullScreen.png";
import simpsonsPic from "../assets/images/simpsonsPic.png";
import adobeHomageMobile from "../assets/images/adobeHomageMobile.png";

const Projects = () => {
  return (
    <>
      <h1>Work</h1>
      <div id="projectsWrapper">
        {/* inside the project wrapper, goes a project card. 
        Inside a project card goes a title, image card (containing an image) and text, and some text */}
        <div className="projectCards">
          <h3>Crime Checker</h3>
          <div className="imgCard">
            <img
              id="crimeCheckerImage"
              src={crimeCheckerFullScreen}
              alt="crimeCheckerpic"
            />
          </div>
        </div>
        <div className="projectCards">
          <h3>Simpsons Quote Generator</h3>
          <div className="imgCard">
            <img id="simpsons" src={simpsonsPic} alt="simpsonsPic" />
          </div>
        </div>
        <div className="projectCards">
          <h3>Agify</h3>
          <div className="imgCard">
            <img id="agifyImage" src={agifyAppFullScreen} alt="agifyApp" />
          </div>
        </div>
        <div className="projectCards">
          <h3>Homage</h3>
          <div className="imgCard">
            <img
              width={300}
              height={450}
              src={adobeHomageMobile}
              alt="adobeHomagemobilePic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
