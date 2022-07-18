import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h1 id="about-title">About Me</h1>
      <div id="pic-info">
        <img src={require("../../assets/about-imgs/me-pic.jpeg")} alt="me" />
        <p id="about-info">
          Front-end web developer with experience in back-end. Recently finished
          a full-stack web development program through Vanderbilt University,
          where I acquired skills such as: HTML, CSS, JavaScript, Node.js, SQL,
          ORM, MVC, React, as well as others. With each project, I focus on
          creating great functionality, as well as an aesthetic user experience
          that is easy to navigate. In a recent project, I worked with two other
          developers to create a full-stack movie review application called ‘It
          Was the 90’s'. I took a lead role in the project, building several
          components and connecting back-end to front-end, as well as working
          out several bugs that arose. Through this bootcamp, as well as other
          avenues, I have also culminated skills as a leader, a good
          communicator, and a problem solver. I look forward to combining these
          skills with my newly acquired development skills to build great
          applications with others.
        </p>
      </div>
    </section>
  );
}

export default About;
