import React from "react";
import "./home.css";

function Home() {
  return (
    <section className="homepage">
      <p className="home-intro">Hello, my name is</p>
      <h2 className="intro-name">James</h2>
      <p className="home-intro">
        I am a <span className="intro-emphasis">Frontend Developer</span>
      </p>
      <p className="home-intro">Welcome to my Portfolio!</p>
    </section>
  );
}

export default Home;
