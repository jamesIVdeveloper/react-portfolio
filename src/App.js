import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

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
        <Portfolio currentPage={currentPage} />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
