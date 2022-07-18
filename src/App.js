import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Route, Routes } from "react-router-dom";

function App() {
  /*
  const [pages] = useState([
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [contactSelected, setContactSelected] = useState(false);
  */

  return (
    <div>
      {/* <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <About />
            <Portfolio currentPage={currentPage} />
            <Resume />
          </>
        ) : (
          <ContactForm />
        )}
      </main> */}
      <Nav />
      <div className="container">
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
