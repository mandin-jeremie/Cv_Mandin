import React from "react";

import { useMediaQuery } from 'react-responsive'

import "./contact.css";

const Contact = () => {

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
    <div className="bloc_contact" id="contact">
      <h3 className="subTitle_xp">Contact</h3>
    </div>
    </Desktop>
  );
};

export default Contact;
