import React from "react";

import TimeLine from "../../components/TimeLine/index.js"
import "./xp.css";

const Xp = () => {
  return (
    <div className="bloc_xp" id="xp">
      <h3 className="subTitle_xp">Expériences Professionnelles</h3>
      <div className="Bloc_TimeLine">
      <TimeLine />
      </div>
    </div>
  );
};

export default Xp;
