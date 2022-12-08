import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <section>
      <div id="projects">
        {/* PROJECT */}
        <div className="project">
          <div className="project-info">
            <h1 className="project-name">Crwn</h1>
            <p className="project-description">
              Crwn is a mock E-commerce site. You can sign in, browse items, and
              add them to your cart for checkout. While building this, I learned
              a lot more about React, and got practice with concepts like
              context and state.
            </p>
            <div className="tools-container">
              <h3 className="tools-title">Built With</h3>
              <div className="project-tools">
                <span className="tool">React</span>
                <span className="tool">JavaScript</span>
                <span className="tool">Firebase</span>
              </div>
            </div>
            <p className="project-links">
              Check out the{" "}
              <a
                href="https://poetic-pastelito-530e6b.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>{" "}
              version or the{" "}
              <a
                href="https://github.com/jamesIVdeveloper/crwn-store"
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
              src={require("../../assets/project-imgs/crwn.png")}
              alt="landing page of my tech blog application"
            />
          </div>
        </div>
        {/* PROJECT */}
        <div className="project">
          <div className="project-info">
            <h1 className="project-name">Check</h1>
            <p className="project-description">
              An app where you can organize your to-do list and toggle tasks
              between 'On Deck', 'In Progress', and 'Done'.
            </p>
            <div className="tools-container">
              <h3 className="tools-title">Built With</h3>
              <div className="project-tools">
                <span className="tool">HTML</span>
                <span className="tool">CSS</span>
                <span className="tool">JavaScript</span>
              </div>
            </div>
            <p className="project-links">
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
        {/* PROJECT */}
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
              <div className="project-tools">
                <span className="tool">HTML</span>
                <span className="tool">CSS</span>
                <span className="tool">JavaScript</span>
                <span className="tool">jQuery</span>
              </div>
            </div>
            <p className="project-links">
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
        {/* PROJECT */}
        <div className="project">
          <div className="project-info">
            <h1 className="project-name">Quote Generator</h1>
            <p className="project-description">
              Quote Generator is an application that generates quotes at the
              press of a button. You can also choose to tweet a quote if you
              really like it.
            </p>
            <div className="tools-container">
              <h3 className="tools-title">Built With</h3>
              <div className="project-tools">
                <span className="tool">HTML</span>
                <span className="tool">CSS</span>
                <span className="tool">JavaScript</span>
              </div>
            </div>
            <p className="project-links">
              Check out the{" "}
              <a
                href="https://jamesivdeveloper.github.io/quote-generator/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>{" "}
              version or the{" "}
              <a
                href="https://github.com/jamesIVdeveloper/quote-generator"
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
              src={require("../../assets/project-imgs/quote-generator.png")}
              alt="landing page of my tech blog application"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
