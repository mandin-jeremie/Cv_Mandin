import React from "react";

import { useMediaQuery } from "react-responsive";

import "./description.css";
import CardsDescription from "../../components/CardsDescription/";

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
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
const Description = () => {
  return (
    <div>
      <Desktop>
        <div className="bloc_description" id="description">
          <h3 className="subTitle">Qui suis-je ?</h3>
          <CardsDescription />
        </div>
      </Desktop>
      <Mobile>
        <div className="bloc_description" id="description">
          <h3 className="subTitle">Qui suis-je ?</h3>
          <CardsDescription />
        </div>
      </Mobile>
    </div>
  );
};

export default Description;
