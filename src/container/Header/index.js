import React from "react";

import { Link } from 'react-scroll'

import "./header.css";


const Header = ({ handleSetActive}) => {

  return (
    <div className="bloc_header_page">
    <div className="bloc_header">
      <h1 className="title_name">J.M</h1>
      <Link className="navPage" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive}>
        Acceuil
      </Link>
      <Link className="navPage" activeClass="active" to="skill" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive}>
        Compétances
      </Link>
      <Link className="navPage" activeClass="active" to="xp" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive}>
          Expériences
      </Link>
      <Link className="navPage" activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive}>
         Mes réalisations
      </Link>
      <Link className="navPage" activeClass="active" to="description" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive}>
        Qui suis-je ?
      </Link>
      <Link className="navPage" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={700} onSetActive={handleSetActive}>
         Contact
      </Link>
    </div>
    </div>
  );
};

export default Header;
