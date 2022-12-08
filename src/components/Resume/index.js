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
          <div id="skill-list">
            <span className="skill">HTML5</span>
            <span className="skill">CSS</span>
            <span className="skill">jQuery</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">AJAX</span>
            <span className="skill">SASS</span>
          </div>
        </div>
        <div className="backend">
          <h3 className="skill-type">Back-End</h3>
          <div id="skill-list">
            <span className="skill">MySQL</span>
            <span className="skill">MongoDB</span>
            <span className="skill">Express</span>

            <span className="skill">Node</span>
            <span className="skill">Handlebars</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
