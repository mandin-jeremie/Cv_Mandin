import React from "react";

import { useMediaQuery } from "react-responsive";

import TimeLineFormations from "../../components/TimeLineFormations";

import CardsFormationsMobile from "../../components/CardsFormationsMobile";
import "./projects.css";
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

const Formations = () => {
  return (
    <div>
      <Desktop>
        <div className="bloc_projects" id="projects">
          <h3 className="subTitle">Mes Formations</h3>
          <div className="Bloc_TimeLine">
            <TimeLineFormations />
          </div>
        </div>
      </Desktop>
      <BigTablet>
        {" "}
        <div className="bloc_projects_BigTablet" id="projects">
          <h3 className="subTitle">Mes Formations</h3>
          <div className="Bloc_TimeLine">
            <TimeLineFormations />
          </div>
        </div>
      </BigTablet>
      <Tablet>
        <div className="bloc_projects_mobile" id="projects">
          <h3 className="subTitle_mobile">Mes Formations</h3>
          <CardsFormationsMobile />
        </div>
      </Tablet>
      <Mobile>
        <div className="bloc_projects_mobile" id="projects">
          <h3 className="subTitle_mobile">Mes Formations</h3>
          <CardsFormationsMobile />
        </div>
      </Mobile>
    </div>
  );
};

export default Formations;
