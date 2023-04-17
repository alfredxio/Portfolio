import React, { useEffect, useState } from 'react';
import './header.css';
import logoimg from '../../assets/logo.png';
import {links} from '../../Data';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs';
import './header.css';
import {Link} from 'react-scroll';
import { animateScroll } from 'react-scroll';
import shapeOne from "../../assets/shape-2.png";

const Header = () => {
  const [showMenu, setShowMenu]=useState(false);
  const [scrollNav, setScrollNav]=useState(false);
  const scrollTop=()=>{
    animateScroll.scrollToTop();
  };

  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeNav);
  },[]);

  useEffect(()=>{
    document.body.classList.toggle('no-scroll',showMenu);
  },[showMenu]);

  return (
    <header className={`${scrollNav?'scroll-header':''} header`}>
      <nav className="nav">
        <img src={logoimg} className="logoimg"/>
        <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
          AlfredX
        </Link>

        <div className={`${showMenu?'nav__menu show-menu':'nav__menu'}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({name,path},index)=>{
                return(
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={()=>setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="header__socials">
          
              <a href="https://www.linkedin.com/in/rohitraj45/" className="header__social-link">
                <FaLinkedin />
              </a>

              <a href="https://github.com/alfredxio" className="header__social-link">
                <FaGithub />
              </a>

              <a href="https://instagram.com/x.alfred.io" className="header__social-link">
                <FaInstagram />
              </a>

            </div>
          </div>

          <div className="section__deco deco__left header__deco">
            <img src={shapeOne} alt="" className="shape" />
          </div>

        </div>
        <div className="nav__btns">
          <div className="theme__toggler">
              <BsSun/>
          </div>
          <div className={`${showMenu?'nav__toggle animate-toggle':'nav__toggle'}`} onClick={()=>setShowMenu(!showMenu)}>
              <span></span>
              <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header