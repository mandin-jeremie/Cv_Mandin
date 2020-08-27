import React from "react";

import { useMediaQuery } from 'react-responsive';

import TimeLine from "../../components/TimeLine/index.js"
import "./xp.css";

const Xp = () => {

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
    <div className="bloc_xp" id="xp">
      <h3 className="subTitle_xp">Expériences Professionnelles</h3>
      <div className="Bloc_TimeLine">
      <TimeLine />
      </div>
    </div>
    </Desktop>
  );
};

export default Xp;
