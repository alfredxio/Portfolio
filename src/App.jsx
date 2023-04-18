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
import axios from 'axios';
import { services,skills,projects } from './Data';


function App() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0});
  const [isCursorLarge, setIsCursorLarge] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("a, .btn, .resume__icon, button, .home__social-link");
    // console.log(links);
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
  const [loading3, setLoading3] = useState(false);

  useEffect(() => {
    setLoading(false);
    setLoading2(false);
    setTimeout(() => {
      setLoading(true);
    }, 2500);
    setTimeout(() => {
      setLoading2(true);
    }, 4000);
  }, []);



  const [datax, setData] = useState({});

  useEffect(() => {
    setLoading3(false);
    axios.get('https://script.google.com/macros/s/AKfycbzJV9TWQV8K4E5puzw2sxA2GJM1KgdixyuCBzRqDBQcNenEPqSm5eSNFTJhH5Jdbhb2/exec')
    .then((response) => {
        setLoading3(true);
        setData(response.data);
        console.log(response.data);
    })
  }, []);


  return (
      <main className="main">
        
          {loading2&&loading3 ? null: (
              <div className={`loader-container ${loading&&loading3?'fade-out':''}`}>
                  <div className="spinner"></div>
              </div>
          )}

          <Header />
          <Home />
          {datax.services && <Services services={datax.services.filter(service => service.id !== "")} />}
          {datax.skills && <Skills skills={datax.skills.filter(skill=>skill.id!=="")}/>}
          {datax.projects && <Portfolio projects={datax.projects.filter(project => project.id !== "")} />}
          {datax.cv && <Resume cv={datax.cv.filter(cvx => cvx.id !== "")} />}

          {/* {services && <Services services={services.filter(service => service.id !== "")} />}
          {skills && <Skills skills={skills.filter(skill=>skill.id!=="")}/>}
          {projects && <Portfolio projects={projects.filter(project => project.id !== "")} />} */}
          <Contact />
          <Footer />
          <div className={`cursor ${isCursorLarge ? "large" : ""}`} style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      </main>
  )
}

export default App
