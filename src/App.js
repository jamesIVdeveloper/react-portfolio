import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  const [pages] = useState([
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
