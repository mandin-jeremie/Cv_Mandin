import React from "react";

import { useMediaQuery } from 'react-responsive'

import "./app.css";
import Header from "../../components/Header";
import Skill from "../Skill";
import Xp from "../Xp";
import Projects from "../Projects";
import Description from "../Description";
import Contact from "../Contact";
import Home from "../Home";

const App = () => {

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
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

  return (
    <div>
    <Desktop>
    <div className="app">
      <Header />
      <Home />
      <Skill />
      <Xp />
      <Projects />
      <Description />
      <Contact />
    </div>
    </Desktop>
    </div>
  );
};

export default App;
