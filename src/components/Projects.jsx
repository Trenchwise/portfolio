import React from "react";
import crimeCheckerFullScreen from "../assets/images/crimeCheckerFullScreen.png";
import agifyAppFullScreen from "../assets/images/agifyAppFullScreen.png";
import simpsonsPic from "../assets/images/simpsonsPic.png";
import adobeHomageMobile from "../assets/images/adobeHomageMobile.png";
import * as FaIcons from "react-icons/fa";
import blackBlueTick from "../assets/icons/blackBlueTick.svg";
import LiveDemoButton from "./buttons/LiveDemoButton";
import MoreInfoButton from "./buttons/MoreInfoButton";
import GitHubButton from "./buttons/GitHubButton";

const Projects = () => {
  return (
    <>
      <div id="work"></div>
      <section className="projectsSection">
        <h1 id="projectsTitle">Work</h1>
        <p>A snap shot of the apps I've built in Javascript and React-Redux</p>
        <div id="projectsWrapper">
          {/* inside the project wrapper, goes a project card. 
        Inside a project card goes a title, image card (containing an image) and text, and some text */}
          <div className="projectCards">
            {/* <h3>Crime Checker</h3> */}
            <div className="imgCard crimeCheckerCard">
              <a href="https://crimechecker.co.uk/">
                <img
                  id="crimeCheckerImage"
                  src={crimeCheckerFullScreen}
                  alt="crimeCheckerpic"
                />
              </a>
            </div>
            <div className="ProjectButtonWrapper">
              <MoreInfoButton />
              <a href="https://crimechecker.co.uk/">
                {" "}
                <LiveDemoButton />{" "}
              </a>
              <a href="https://github.com/Trenchwise/portfolio">
                {" "}
                <GitHubButton />{" "}
              </a>
            </div>

            <div className="projectDiscription">
              <div>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                What is it? A tool for learning (by area): What crime and how
                much crime has occured, what stop and searches have been made,
                why searches were made, if the police found what they were
                looking for...
              </div>
              <p>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                How can it help me? You can learn what crimes you should protect
                yourself against in your area and how likely it is that you will
                be stopped by the police.
              </p>

              <p>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                Made with: Javascript - React Redux - CSS - HTML - Rest API
                (police.uk)
              </p>

              <p>
                {""}
                <FaIcons.FaMedal className="blueTick" /> Fun fact: Oxford has
                high bycle theft crime, if you go there/ live there. Get a good
                bike lock.
              </p>
            </div>
          </div>
          <div className="projectCards">
            <h3>Simpsons Quote Generator</h3>
            <div className="imgCard">
              <img id="simpsons" src={simpsonsPic} alt="simpsonsPic" />

              <div className="ProjectButtonWrapper">
                <MoreInfoButton />
                <LiveDemoButton />
                <GitHubButton />
              </div>
            </div>
            <div className="projectDiscription">
              <p>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                What is it? A fun Simpons quote generator. You can sort by
                character, like or unlike your favourtie quotes and delete
                characters.
              </p>
              <p>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                Made with: Javascript - React Redux - Functional React - React
                Hooks - Joi validation - CSS - HTML - Restful API{" "}
              </p>
              <p>
                <FaIcons.FaMedal className="blueTick" />
                Fun fact: “Marriage is like a coffin and each kid is another
                nail.” Homer, The Simpsons.{" "}
              </p>
            </div>
          </div>
          <div className="projectCards">
            <h3>Agify</h3>
            <div className="imgCard">
              <img id="agifyImage" src={agifyAppFullScreen} alt="agifyApp" />

              <div className="ProjectButtonWrapper">
                <MoreInfoButton />
                <LiveDemoButton />
                <GitHubButton />
              </div>
            </div>
            <div className="projectDiscription">
              <p>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                What is it? A vanilla JavaScript app that will predict your age
                and sex using your name
              </p>
              <p>
                <img src={blackBlueTick} alt="tickIcon" className="blueTick" />
                Made with: Vanilla Javascript - HTML - CSS
              </p>
              <p>
                <FaIcons.FaMedal className="blueTick" />
                Fun fact: This app makes me 72...{" "}
              </p>
              <p>React - Redux - CSS - HTML5</p>
            </div>
          </div>
          <div className="projectCards">
            <h3>Homage</h3>
            <div className="imgCard">
              <img
                id="homageImage"
                width={300}
                height={450}
                src={adobeHomageMobile}
                alt="adobeHomagemobilePic"
              />
              <div className="ProjectButtonWrapper">
                <MoreInfoButton />
                <LiveDemoButton />
                <GitHubButton />
              </div>
            </div>
            <div className="projectDiscription">
              <p>
                {" "}
                <img
                  src={blackBlueTick}
                  alt="tickIcon"
                  className="blueTick"
                />{" "}
                What is it? A pixel perfect re-creation of the Adobe homepage.
              </p>
              <p>
                {" "}
                <img
                  src={blackBlueTick}
                  alt="tickIcon"
                  className="blueTick"
                />{" "}
                Made with: CSS - HTML5 - SASS
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
