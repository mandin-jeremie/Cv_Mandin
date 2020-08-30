import React from "react";

import { useMediaQuery } from 'react-responsive';

import "./home.css";
import backgroundvideo from "../../video/Network - 12716.mp4";
import photoDeMoi from "../../img/photoDeMoi.png";
import htmlLogo from "../../img/HTML.png";
import cssLogo from "../../img/CSS.png";
import jsLogo from "../../img/JS.png";
import reactLogo from "../../img/REACT.png";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 767 })
  return isMobile ? children : null
}
/*
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
*/

const Home = () => {

  return (
    <div>
    <Desktop>
    <div className="bloc_home" id="home">
      <div className="homeContainer">
        <div className="pict_bloc">
        <img className="photoDeMoi" src={photoDeMoi} alt="Moi" />
        <div className="triangle-code"></div>
        </div>
        <div className="blocText">
          <h1 className="title_home">Jérémie Mandin</h1>
          <h2 className="subTitle_home">Web Développeur</h2>
          <ul className="List">
            <li className="list_lang"><img className="list_lang_logo" src={htmlLogo} alt="Moi" />Html</li>
            <li className="list_lang"><img className="list_lang_logo" src={cssLogo} alt="Moi" />CSS</li>
            <li className="list_lang"><img className="list_lang_logo" src={jsLogo} alt="Moi" />Java Script</li>
            <li className="list_lang"><img className="list_lang_logo" src={reactLogo} alt="Moi" />React</li>
          </ul>
        </div>
      </div>
      <video className="backgroundVideo" preload="true" autoPlay loop muted >
        <source  src={backgroundvideo} type="video/mp4"/>
          Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    </Desktop>
    <Mobile>
    <div className="bloc_home_mobile" id="home">
      <div className="homeContainer_mobile">
        <div className="pict_bloc_mobile">
        <img className="photoDeMoi_mobile" src={photoDeMoi} alt="Moi" />
        <div className="triangle-code_mobile"></div>
        </div>
        <div className="blocText_mobile">
          <h1 className="title_home_mobile">Jérémie Mandin</h1>
          <h2 className="subTitle_home_mobile">Web Développeur</h2>
          <ul className="List_mobile">
            <li className="list_lang_mobile"><img className="list_lang_logo_mobile" src={htmlLogo} alt="Moi" />Html</li>
            <li className="list_lang_mobile"><img className="list_lang_logo_mobile" src={cssLogo} alt="Moi" />CSS</li>
            <li className="list_lang_mobile"><img className="list_lang_logo_mobile" src={jsLogo} alt="Moi" />Java Script</li>
            <li className="list_lang_mobile"><img className="list_lang_logo_mobile" src={reactLogo} alt="Moi" />React</li>
          </ul>
        </div>
      </div>
      <video className="backgroundVideo_mobile" preload="true" autoPlay loop muted >
        <source  src={backgroundvideo} type="video/mp4"/>
          Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    </Mobile>
    </div>
  );
};

export default Home;
