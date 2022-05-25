import React, { useEffect } from "react";

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <header>
      <h2>
        <a href="/">James</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {pages.map((page) => (
            <li
              className={`${currentPage.name === page.name && `navActive`}`}
              key={page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(page);
                  setContactSelected(false);
                }}
              >
                {page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
