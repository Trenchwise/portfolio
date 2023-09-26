import React from "react";
import crimeCheckerFullScreen from "../assets/images/crimeCheckerFullScreen.png";
import agifyAppFullScreen from "../assets/images/agifyAppFullScreen.png";
import simpsonsPic from "../assets/images/simpsonsPic.png";
import adobeHomageMobile from "../assets/images/adobeHomageMobile.png";

const Projects = () => {
  return (
    <>
      <h1>Work</h1>
      <p>Apps I've built</p>
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
          <div>
            <p>Project discription</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>React - Redux - CSS - HTML5</p>
          </div>
        </div>
        <div className="projectCards">
          <h3>Simpsons Quote Generator</h3>
          <div className="imgCard">
            <img id="simpsons" src={simpsonsPic} alt="simpsonsPic" />
          </div>
          <div>
            <p>Project discription</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>React - Redux - CSS - HTML5</p>
          </div>
        </div>
        <div className="projectCards">
          <h3>Agify</h3>
          <div className="imgCard">
            <img id="agifyImage" src={agifyAppFullScreen} alt="agifyApp" />
          </div>
          <div>
            <p>Project discription</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>React - Redux - CSS - HTML5</p>
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
          <div>
            <p>Project discription</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>React - Redux - CSS - HTML5</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
