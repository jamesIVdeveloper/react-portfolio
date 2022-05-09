import React from "react";

function Portfolio() {
  return (
    <section>
      <h1 id="portfolio-title">Portfolio</h1>
      <div id="projects">
        <div class="project">
          <a
            href="https://itwasthe90s.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/project-imgs/90s.png")}
              alt="landing page of my 90's movies reviews application"
            />
          </a>
        </div>
        <div class="project">
          <a
            href="https://jamesivdeveloper.github.io/run-buddy/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/project-imgs/runbuddy.png")}
              alt="landing page of my run buddy application"
            />
          </a>
        </div>
        <div class="project">
          <a
            href="https://shawnmwillard.github.io/Hangman-Game/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/project-imgs/hangman.png")}
              alt="landing page of hangman game application"
            />
          </a>
        </div>
        <div class="project">
          <a
            href="https://jamesivdeveloper.github.io/Tiger-Quiz-App/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/project-imgs/tigerwoods.png")}
              alt="landing page of my tiger woods quiz application"
            />
          </a>
        </div>
        <div class="project">
          <a
            href="https://jamesivdeveloper.github.io/national-park/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/project-imgs/parkfinder.png")}
              alt="landing page of my park finder application"
            />
          </a>
        </div>
        <div class="project">
          <a
            href="https://jamesivdeveloper.github.io/game-hub/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/project-imgs/gamehub.png")}
              alt="landing page of my game hub application"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
