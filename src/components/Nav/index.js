import React, { useEffect } from "react";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

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
            <a href="#about">About me</a>
          </li>
          {pages.map((page) => (
            <li
              className={`${currentPage.name === page.name && `navActive`}`}
              key={page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page.name}
              </span>
            </li>
          ))}
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
