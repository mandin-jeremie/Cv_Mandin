import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="bloc">
      <h1 className="title_name">J.M</h1>
      <a className="navPage" href="#home">
        Acceuil
      </a>
      <a className="navPage" href="#skill">
        Compétances
      </a>
      <a className="navPage" href="#xp">
        Expériences
      </a>
      <a className="navPage" href="#projects">
        Mes réalisations
      </a>
      <a className="navPage" href="#description">
        Qui suis-je ?
      </a>
      <a className="navPage" href="#contact">
        Contact
      </a>
    </div>
  );
};

export default Header;
