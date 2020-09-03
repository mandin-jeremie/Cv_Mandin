import React from "react";

import HeaderMobile from "../HeaderMobile/index.js";

import { useMediaQuery } from "react-responsive";

import logojm from "../../img/logo_J.M.png";

import { Link } from "react-scroll";

import "./header.css";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 767 });
  return isMobile ? children : null;
};
/*
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
*/

const Header = ({
  handleSetActive,
  handleClickHome,
  scrollStyle,
  handleClickNav,
}) => {
  return (
    <div>
      <Desktop>
        <div className={"bloc_header_" + scrollStyle}>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickHome}
          >
            Acceuil
          </Link>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Compétences
          </Link>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="xp"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Expériences
          </Link>
          <Link
            className={"title_" + scrollStyle}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickHome}
          >
            <img
              className={"logo_header_desktop_" + scrollStyle}
              src={logojm}
              alt="logo J.M"
            />
          </Link>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Mes formations
          </Link>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="description"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Qui suis-je ?
          </Link>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Contact
          </Link>
        </div>
      </Desktop>
      <Mobile>
        <div className={"bloc_header_mobile_" + scrollStyle}>
          <Link
            className={"title_mobile_" + scrollStyle}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={handleSetActive}
          >
            <img
              className={"logo_header_desktop_mobile_" + scrollStyle}
              src={logojm}
              alt="logo J.M"
            />
          </Link>
          <HeaderMobile />
        </div>
      </Mobile>
    </div>
  );
};

export default Header;
