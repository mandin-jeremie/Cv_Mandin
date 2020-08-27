import React from "react";

import { useMediaQuery } from 'react-responsive';

import SkillCards from "../../components/SkillCards/index.js"
import "./skill.css";

const Skill = () => {

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
    <div className="bloc_skill" id="skill">
      <div className="bloc_skill_contain">
        <h3 className="subTitle_xp" >Compétances</h3>
        <div className="SkillCards">
          <SkillCards />
        </div>
      </div>
    </div>
    </Desktop>
  );
};

export default Skill;
