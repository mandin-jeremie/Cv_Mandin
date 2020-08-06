import React from "react";

import "./app.css";
import Header from "../Header";
import Skill from "../Skill";
import Xp from "../Xp";
import Projects from "../Projects";
import Description from "../Description";
import Contact from "../Contact";
import Home from "../Home";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Skill />
      <Xp />
      <Projects />
      <Description />
      <Contact />
    </div>
  );
};

export default App;
