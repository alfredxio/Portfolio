import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0});
  const [isCursorLarge, setIsCursorLarge] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("nav ul li a");
    console.log(links);
    document.addEventListener("mousemove", (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        setIsCursorLarge(true);
      });
      link.addEventListener("mouseleave", () => {
        setIsCursorLarge(false);
      });
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  useEffect(() => {
    setLoading(true);
    setLoading2(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }, []);


  

  return (
      <main className="main">
        {loading2 ? (
            <div className={`loader-container ${loading?'':'fade-out'}`}>
                <div className="spinner"></div>
            </div>
        ):null}
          <Header />
          <Home />
          <Services />
          <Skills />
          <Portfolio />
          <Resume />
          <Contact />
          <Footer />
          <div className={`cursor ${isCursorLarge ? "large" : ""}`} style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      </main>
  )
}

export default App
