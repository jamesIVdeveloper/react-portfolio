import React from "react";

function Resume() {
  return (
    <section id="resume">
      <h1>Resume</h1>
      <a href={require("../../assets/resume/James_Murphy_resume.pdf")} download>
        Resume(pdf)
      </a>
      <div id="skills">
        <h3>Technical Skills</h3>
        <p>
          <span id="skill-type">Frontend: </span>
          HTML5, CSS, JQuery, Javascript, Bootstrap, AJAX, SASS
        </p>
        <p>
          <span id="skill-type">Backend: </span>
          MySQL, MongoDB, Express, ReactJS, Node, Handlebars
        </p>
      </div>
    </section>
  );
}

export default Resume;
