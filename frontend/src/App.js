import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ResumeDownload from "./components/ResumeDownload";

function App() {
  const Home = () => (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <ResumeDownload />
    </>
  );

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;