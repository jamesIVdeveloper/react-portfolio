import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="main-container">
        <Routes>
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
