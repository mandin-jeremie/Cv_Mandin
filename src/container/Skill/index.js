import React from "react";

import { useMediaQuery } from "react-responsive";

import CardsSkill from "../../components/CardsSkill/index.js";

import "./skill.css";

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

const Skill = () => {
  return (
    <div>
      <Desktop>
        <div className="bloc_skill" id="skill">
          <div className="bloc_skill_contain">
            <h3 className="subTitle">Compétances</h3>
            <div className="SkillCards">
              <CardsSkill />
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="bloc_skill_mobile" id="skill">
          <div className="bloc_skill_contain_mobile">
            <h3 className="subTitle_mobile">Compétances</h3>
            <div className="SkillCards_mobile">
              <CardsSkill />
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default Skill;
