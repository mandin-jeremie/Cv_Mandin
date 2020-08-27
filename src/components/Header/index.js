import React, { useState, useEffect  } from "react";

import useScrollPosition from '@react-hook/window-scroll';

import { useMediaQuery } from 'react-responsive'

import { Link } from 'react-scroll'

import "./header.css";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1600 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


const Header = ({ handleSetActive }) => {

  const [clickHome, setClickHome] = useState(false);
  const [clickNav, setClickNav] = useState(false);

  const handleClickHome = (e) => {
    e.preventDefault();
    setClickHome(true);
    setClickNav(false);
  }
  const handleClickNav = (e) => {
    e.preventDefault();
    setClickNav(true);
    setClickHome(false);
  }

console.log(clickHome)
console.log(clickNav)
  const scrollY = useScrollPosition(60 /*fps*/)

  let scrollStyle;

    if (scrollY == 0 || clickHome) {
      scrollStyle = "top";
    }
    else if (scrollY > 0 || clickNav) {
      scrollStyle = "scrollDown";
    }
    console.log(scrollStyle);
    console.log(scrollY);


  return (
    <div>
  <Desktop>
      <div className={"bloc_header_"+ scrollStyle}>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickHome}>
          Acceuil 
        </Link>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="skill" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav} >
          Compétences
        </Link>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="xp" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav}>
            Expériences
        </Link>
          <h1 className={"title_" + scrollStyle}>J.M</h1>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav}>
          Mes formations
        </Link>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="description" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav}>
          Qui suis-je ?
        </Link>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav}>
          Contact
        </Link>

      </div>
    </Desktop>
    </div>
  );
};

export default Header;
