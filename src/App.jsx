import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
    
  );
}

export default App;
