import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <header>
      <h2 className="home-link">
        <Link to="/react-portfolio">IV</Link>
      </h2>
      <div className="nav">
        <div className="nav-link">
          <Link to="/about">ABOUT</Link>
        </div>
        <div className="nav-link">
          <Link to="/portfolio">PROJECTS</Link>
        </div>
        <div className="nav-link">
          <Link to="/resume">RESUME</Link>{" "}
        </div>
        <div className="nav-link">
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
