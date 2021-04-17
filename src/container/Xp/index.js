import React from "react";

import { useMediaQuery } from "react-responsive";

import TimeLineXp from "../../components/TimeLineXp/index.js";
import "./xp.css";

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

const Xp = () => {
  return (
    <div>
      <Desktop>
        <div className="bloc_xp" id="xp">
          <h3 className="subTitle">Expériences</h3>
          <div className="Bloc_TimeLine">
            <TimeLineXp />
          </div>
        </div>
      </Desktop>
      <BigTablet>
        <div className="bloc_xp_BigTablet" id="xp">
          <h3 className="subTitle">Expériences</h3>
          <div className="Bloc_TimeLine">
            <TimeLineXp />
          </div>
        </div>
      </BigTablet>
      <Tablet>
        <div className="bloc_xp" id="xp">
          <h3 className="subTitle_mobile">Expériences</h3>
          <div className="Bloc_TimeLine_mobile">
            <TimeLineXp />
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="bloc_xp" id="xp">
          <h3 className="subTitle_mobile">Expériences</h3>
          <div className="Bloc_TimeLine_mobile">
            <TimeLineXp />
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default Xp;
