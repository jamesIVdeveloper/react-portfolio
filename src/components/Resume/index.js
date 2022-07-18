import React from "react";
import "./resume.css";

function Resume() {
  return (
    <section id="resume">
      <div className="resume">
        <h1>Resume</h1>
        <a
          href={require("../../assets/resume/James_Murphy_resume.pdf")}
          download
        >
          Resume(pdf)
        </a>
      </div>
      <h2 className="skills-title">Technical Skills</h2>
      <div id="skills">
        <div className="frontend">
          <h3 className="skill-type">Front-End</h3>
          <ul id="skill-type">
            <li>HTML5</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>AJAX</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="backend">
          <h3 className="skill-type">Back-End</h3>
          <ul id="skill-type">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>ReactJS</li>
            <li>Node</li>
            <li>Handlebars</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
