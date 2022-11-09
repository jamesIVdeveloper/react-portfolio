import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <section>
      <div id="projects">
        <div className="project">
          <div className="project-info">
            <h1 className="project-name">Tech Blog</h1>
            <p className="project-description">
              A blog site, where you can log in, create blogs, and add comments
              on other users' blogs.
            </p>
            <div className="tools-container">
              <h3 className="tools-title">Built With</h3>
              <ul className="project-tools">
                <li className="tool">JavaScript</li>
                <li className="tool">Handlebars</li>
                <li className="tool">MySQL</li>
                <li className="tool">Express</li>
                <li className="tool">Sequelize</li>
              </ul>
            </div>
            <p>
              Check out the{" "}
              <a
                href="https://intense-shelf-50188.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>{" "}
              version or the{" "}
              <a
                href="https://github.com/jamesIVdeveloper/tech-blog"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </div>
          <div className="project-img-container">
            <img
              className="project-img"
              src={require("../../assets/project-imgs/tech-blog-landing.png")}
              alt="landing page of my tech blog application"
            />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h1 className="project-name">Check</h1>
            <p className="project-description">
              An app where you can organize your to-do list and toggle tasks
              between 'On Deck', 'In Progress', and 'Done'.
            </p>
            <div className="tools-container">
              <h3 className="tools-title">Built With</h3>
              <ul className="project-tools">
                <li className="tool">HTML</li>
                <li className="tool">CSS</li>
                <li className="tool">JavaScript</li>
              </ul>
            </div>
            <p>
              Check out the{" "}
              <a
                href="https://jamesivdeveloper.github.io/check/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>{" "}
              version or the{" "}
              <a
                href="https://github.com/jamesIVdeveloper/check"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </div>
          <div className="project-img-container">
            <img
              className="project-img"
              src={require("../../assets/project-imgs/check-landing-page.png")}
              alt="landing page of my tech blog application"
            />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h1 className="project-name">Parkfinder</h1>
            <p className="project-description">
              An app where you can find national parks in any state, and select
              how many you would like to be shown. This app uses the National
              Park Service API.
            </p>
            <div className="tools-container">
              <h3 className="tools-title">Built With</h3>
              <ul className="project-tools">
                <li className="tool">HTML</li>
                <li className="tool">CSS</li>
                <li className="tool">JavaScript</li>
                <li className="tool">jQuery</li>
              </ul>
            </div>
            <p>
              Check out the{" "}
              <a
                href="https://jamesivdeveloper.github.io/national-park/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>{" "}
              version or the{" "}
              <a
                href="https://github.com/jamesIVdeveloper/national-park"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </div>
          <div className="project-img-container">
            <img
              className="project-img"
              src={require("../../assets/project-imgs/parkfinder.png")}
              alt="landing page of my tech blog application"
            />
          </div>
        </div>
        {/* <div class="project">
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
        </div> */}
      </div>
    </section>
  );
}

export default Portfolio;
