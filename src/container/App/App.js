import React, { useState } from "react";

import useScrollPosition from "@react-hook/window-scroll";

import { useMediaQuery } from "react-responsive";

import "./app.css";
import Header from "../../components/Header";
import Skill from "../Skill";
import Xp from "../Xp";
import Formations from "../Formations";
import Description from "../Description";
import Contact from "../Contact";
import Home from "../Home";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 150, maxWidth: 767 });
  return isMobile ? children : null;
};
/*
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
*/
const App = () => {
  const [clickHome, setClickHome] = useState(false);
  const [clickNav, setClickNav] = useState(false);

  const handleClickHome = (e) => {
    e.preventDefault();
    setClickHome(true);
    setClickNav(false);
  };
  const handleClickNav = (e) => {
    e.preventDefault();
    setClickNav(true);
    setClickHome(false);
  };

  console.log(clickHome);
  console.log(clickNav);
  const scrollY = useScrollPosition(60 /*fps*/);

  let scrollStyle;

  if (scrollY === 0 || clickHome) {
    scrollStyle = "top";
  } else if (scrollY > 0 || clickNav) {
    scrollStyle = "scrollDown";
  }
  console.log(scrollStyle);
  console.log(scrollY);

  return (
    <div>
      <Desktop>
        <div className="app">
          <Header
            handleClickHome={handleClickHome}
            scrollStyle={scrollStyle}
            handleClickNav={handleClickNav}
          />
          <Home />
          <Skill />
          <Xp />
          <Formations />
          <Description />
          <Contact />
        </div>
      </Desktop>
      <Tablet>
        <div className="app_mobile">
          <Header
            handleClickHome={handleClickHome}
            scrollStyle={scrollStyle}
            handleClickNav={handleClickNav}
          />
          <Home />
          <Skill />
          <Xp />
          <Formations />
          <Description />
          <Contact />
        </div>
      </Tablet>
      <Mobile>
        <div className="app_mobile">
          <Header
            handleClickHome={handleClickHome}
            scrollStyle={scrollStyle}
            handleClickNav={handleClickNav}
          />
          <Home />
          <Skill />
          <Xp />
          <Formations />
          <Description />
          <Contact />
        </div>
      </Mobile>
    </div>
  );
};

export default App;
