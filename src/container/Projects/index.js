import React from "react";

import { useMediaQuery } from 'react-responsive';

import "./projects.css";

const Projects = () => {

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
    <Desktop>
    <div className="bloc_projects" id="projects">
      <h3 className="subTitle_xp">Mes réalisations</h3>
    </div>
    </Desktop>
  );
};

export default Projects;
