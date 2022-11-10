import React from "react";
import "./resume.css";

function Resume() {
  return (
    <section id="resume">
      <div className="resume">
        <h1>Resume</h1>
        <a
          className="resume-link"
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
            <li className="skill">HTML5</li>
            <li className="skill">CSS</li>
            <li className="skill">jQuery</li>
            <li className="skill">JavaScript</li>
            <li className="skill">Bootstrap</li>
            <li className="skill">AJAX</li>
            <li className="skill">SASS</li>
          </ul>
        </div>
        <div className="backend">
          <h3 className="skill-type">Back-End</h3>
          <ul id="skill-type">
            <li className="skill">MySQL</li>
            <li className="skill">MongoDB</li>
            <li className="skill">Express</li>
            <li className="skill">ReactJS</li>
            <li className="skill">Node</li>
            <li className="skill">Handlebars</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
