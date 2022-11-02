// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  // const {
  //   pages = [],
  //   setCurrentPage,
  //   currentPage,
  //   contactSelected,
  //   setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = currentPage.name;
  // }, [currentPage]);

  return (
    // <header>
    //   <h2>
    //     <a href="/">James</a>
    //   </h2>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="#about" onClick={() => setContactSelected(false)}>
    //           About me
    //         </a>
    //       </li>
    //       <li className={`${contactSelected && "navActive"}`}>
    //         <span onClick={() => setContactSelected(true)}>Contact</span>
    //       </li>
    //       {pages.map((page) => (
    //         <li
    //           className={`${currentPage.name === page.name && `navActive`}`}
    //           key={page.name}
    //         >
    //           <span
    //             onClick={() => {
    //               setCurrentPage(page);
    //               setContactSelected(false);
    //             }}
    //           >
    //             {page.name}
    //           </span>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </header>
    <header>
      <h2 className="home-link">
        <Link to="/react-portfolio">IV</Link>
      </h2>
      <div className="nav">
        <Link to="/about">ABOUT</Link> | <Link to="/portfolio">PROJECTS</Link> |{" "}
        <Link to="/resume">RESUME</Link> | <Link to="/contact">CONTACT</Link>
      </div>
    </header>
  );
}

export default Nav;
