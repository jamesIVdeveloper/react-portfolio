import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <div id="pic-info">
        <img
          src={require("../../assets/about-imgs/me-pic.jpeg")}
          alt="me"
          className="about-pic"
        />
        <p id="about-info">
          I am a Frontend Developer with experience in Backend, as well.
          Recently, I finished a full-stack web development program through
          Vanderbilt University, where I acquired skills such as: HTML, CSS,
          JavaScript, Node.js, SQL, ORM, MVC, React, as well as others. With
          each project, I focus on creating great functionality, as well as an
          aesthetic user experience that is easy to navigate. My most recent
          project is a mock E-commerce clothing site and can be found on my
          portfolio page. Through the bootcamp, as well as other avenues, I have
          also accumulated skills as a leader, a good communicator, and a
          problem solver. I look forward to combining these skills with my newly
          acquired development skills to build great applications with others.
        </p>
      </div>
      <div id="pic-info">
        <p id="about-info">
          I have several hobbies that I enjoy doing when I am not working on
          becoming a better developer. Golf has been a passion of mine for a
          long time. It requires adaptation and rewards hard work. Snowboarding
          is another hobby I enjoy. I am not the best at it, but the views in
          the Colorado mountains are reason enough to keep going back. Besides
          outdoor activities, I also enjoy playing games on PC and improving my
          guitar playing.
        </p>
        <img
          src={require("../../assets/about-imgs/golf-pic.jpeg")}
          alt="me golfing"
          className="about-pic"
        />
      </div>
    </section>
  );
}

export default About;
