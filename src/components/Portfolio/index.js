import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <section>
      <div id="projects">
        <div class="project">
          <img
            src={require("../../assets/project-imgs/tech-blog-landing.png")}
            alt="landing page of my tech blog application"
          />
          <a
            href="https://intense-shelf-50188.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/jamesIVdeveloper/tech-blog"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/check-landing-page.png")}
            alt="landing page of my check application"
          />
          <a
            href="https://jamesivdeveloper.github.io/check/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/jamesIVdeveloper/check"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/parkfinder.png")}
            alt="landing page of my park finder application"
          />
          <a
            href="https://jamesivdeveloper.github.io/national-park/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/jamesIVdeveloper/national-park"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/90s.png")}
            alt="landing page of my 90's movies reviews application"
          />
          <a
            href="https://itwasthe90s.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/Jasonwesleysmith/it-was-the-90s"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/neighborgood.png")}
            alt="landing page of nieghborgood application"
          />
          <a
            href="https://project-3-neighbor-good.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/Jasonwesleysmith/neighbor-good"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/hangman.png")}
            alt="landing page of hangman game application"
          />
          <a
            href="https://shawnmwillard.github.io/Hangman-Game/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/shawnmwillard/Hangman-Game"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/tigerwoods.png")}
            alt="landing page of my tiger woods quiz application"
          />
          <a
            href="https://jamesivdeveloper.github.io/Tiger-Quiz-App/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/jamesIVdeveloper/Tiger-Quiz-App"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div class="project">
          <img
            src={require("../../assets/project-imgs/gamehub.png")}
            alt="landing page of my game hub application"
          />
          <a
            href="https://jamesivdeveloper.github.io/game-hub/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed
          </a>
          <a
            href="https://github.com/jamesIVdeveloper/game-hub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
