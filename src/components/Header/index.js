import React from "react";

import HeaderMobile from "../HeaderMobile/index.js";

import { useMediaQuery } from "react-responsive";

import logojm from "../../img/logo_J.M.png";

import { Link } from "react-scroll";

import "./header.css";

import HomeIcon from "@material-ui/icons/Home";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1368 });
  return isDesktop ? children : null;
};
const BigTablet = ({ children }) => {
  const BigTablet = useMediaQuery({ minWidth: 900, maxWidth: 1367 });
  return BigTablet ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 901 });
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
          <div className="bloc_logo">
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
          </div>
          <div className="bloc_nav">
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
              <h2 className={"h2_link_" + scrollStyle}>Accueil</h2>
              <HomeIcon
                style={{ fontSize: 40 }}
                className={"icon_link_" + scrollStyle}
              />
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
              <h2 className={"h2_link_" + scrollStyle}>Compétences</h2>
              <CheckBoxIcon
                style={{ fontSize: 40 }}
                className={"icon_link_" + scrollStyle}
              />
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
              <h2 className={"h2_link_" + scrollStyle}>Expériences</h2>
              <WorkIcon
                style={{ fontSize: 40 }}
                className={"icon_link_" + scrollStyle}
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
              <h2 className={"h2_link_" + scrollStyle}>Mes formations</h2>
              <SchoolIcon
                style={{ fontSize: 40 }}
                className={"icon_link_" + scrollStyle}
              />
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
              <h2 className={"h2_link_" + scrollStyle}>Qui suis-je ?</h2>
              <PermIdentityIcon
                style={{ fontSize: 40 }}
                className={"icon_link_" + scrollStyle}
              />
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
              <h2 className={"h2_link_" + scrollStyle}>Contact</h2>
              <ContactPhoneIcon
                style={{ fontSize: 40 }}
                className={"icon_link_" + scrollStyle}
              />
            </Link>
          </div>
        </div>
      </Desktop>
      <BigTablet>
        <div className={"bloc_header_BigTablet_" + scrollStyle}>
          <div className="bloc_logoBigTablet_">
            <Link
              className={"title_BigTablet_" + scrollStyle}
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
                className={"logo_header_desktop_BigTablet_" + scrollStyle}
                src={logojm}
                alt="logo J.M"
              />
            </Link>
          </div>
          <div className="bloc_navBigTablet_">
            <Link
              className={"NavPage_BigTablet_" + scrollStyle}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onSetActive={handleSetActive}
              onClick={handleClickHome}
            >
              <h2 className={"h2_link_BigTablet_" + scrollStyle}>Accueil</h2>
              <HomeIcon
                style={{ fontSize: 30 }}
                className={"icon_link_BigTablet_" + scrollStyle}
              />
            </Link>
            <Link
              className={"NavPage_BigTablet_" + scrollStyle}
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onSetActive={handleSetActive}
              onClick={handleClickNav}
            >
              <h2 className={"h2_link_BigTablet_" + scrollStyle}>
                Compétences
              </h2>
              <CheckBoxIcon
                style={{ fontSize: 30 }}
                className={"icon_link_BigTablet_" + scrollStyle}
              />
            </Link>
            <Link
              className={"NavPage_BigTablet_" + scrollStyle}
              activeClass="active"
              to="xp"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onSetActive={handleSetActive}
              onClick={handleClickNav}
            >
              <h2 className={"h2_link_BigTablet_" + scrollStyle}>
                Expériences
              </h2>
              <WorkIcon
                style={{ fontSize: 30 }}
                className={"icon_link_BigTablet_" + scrollStyle}
              />
            </Link>
            <Link
              className={"NavPage_BigTablet_" + scrollStyle}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onSetActive={handleSetActive}
              onClick={handleClickNav}
            >
              <h2 className={"h2_link_BigTablet_" + scrollStyle}>
                Mes formations
              </h2>
              <SchoolIcon
                style={{ fontSize: 30 }}
                className={"icon_link_BigTablet_" + scrollStyle}
              />
            </Link>
            <Link
              className={"NavPage_BigTablet_" + scrollStyle}
              activeClass="active"
              to="description"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onSetActive={handleSetActive}
              onClick={handleClickNav}
            >
              <h2 className={"h2_link_BigTablet_" + scrollStyle}>
                Qui suis-je ?
              </h2>
              <PermIdentityIcon
                style={{ fontSize: 30 }}
                className={"icon_link_BigTablet_" + scrollStyle}
              />
            </Link>
            <Link
              className={"NavPage_BigTablet_" + scrollStyle}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onSetActive={handleSetActive}
              onClick={handleClickNav}
            >
              <h2 className={"h2_link_BigTablet_" + scrollStyle}>Contact</h2>
              <ContactPhoneIcon
                style={{ fontSize: 30 }}
                className={"icon_link_BigTablet_" + scrollStyle}
              />
            </Link>
          </div>
        </div>
      </BigTablet>
      <Tablet>
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
      </Tablet>
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
