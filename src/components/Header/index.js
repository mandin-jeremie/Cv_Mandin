import React, { useState } from "react";

import useScrollPosition from '@react-hook/window-scroll';
import { Link } from 'react-scroll'

import "./header.css";

const Header = ({ handleSetActive }) => {

  const [clickHome, setClickHome] = useState(false);

  const handleClickHome = (e) => {
    e.preventDefault();
    setClickHome(true);
  }
  const handleClickNav = (e) => {
    e.preventDefault();
    setClickHome(false);
  }
console.log(clickHome)
  const scrollY = useScrollPosition(60 /*fps*/)

  let scrollStyle;

    if (scrollY === 0 || clickHome) {
      scrollStyle = "top"
    }
    else if (scrollY > 0) {
      scrollStyle = "scrollDown"
    }
    console.log(scrollStyle);
    console.log(scrollY);



  return (
  
    <header>
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
          Mes réalisations
        </Link>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="description" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav}>
          Qui suis-je ?
        </Link>
        <Link className={"NavPage_" + scrollStyle} activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive} onClick={handleClickNav}>
          Contact
        </Link>

      </div>
    </header>
  );
};

export default Header;
