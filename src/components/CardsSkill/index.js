import React from "react";

import { useMediaQuery } from "react-responsive";

import htmlLogo from "../../img/HTML.png";
import cssLogo from "../../img/CSS.png";
import jsLogo from "../../img/JS.png";
import reactLogo from "../../img/REACT.png";
import vscodelogo from "../../img/vscode_logo.png";
import gitlogo from "../../img/github_logo.png";
import maclogo from "../../img/apple_logo.png";
import linuxlogo from "../../img/linux_logo.png";
import windowslogo from "../../img/windows_logo.png";

import "./skillcard.css";

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
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
*/
const CardsSkill = () => {
  return (
    <div>
      <Desktop>
        <div className="PagesofCards">
          <div className="cardsPage_skill">
            <h3 className="cardsTitle">Langage de développement</h3>
            <div className="cardsContain_Description">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={htmlLogo}
                    alt="Moi"
                  />
                  Html
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={cssLogo}
                    alt="Moi"
                  />
                  CSS
                </li>
                <li className="list_lang_card">
                  <img className="list_lang_logo_card" src={jsLogo} alt="Moi" />
                  Java Script
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={reactLogo}
                    alt="Moi"
                  />
                  React
                </li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_skill">
            <h3 className="cardsTitle">Outils de développement</h3>
            <div className="cardsContain_Description">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={vscodelogo}
                    alt="Moi"
                  />
                  VSCode
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={gitlogo}
                    alt="Moi"
                  />
                  Git
                </li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_skill">
            <h3 className="cardsTitle">Environement de développement</h3>
            <div className="cardsContain_Description">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={maclogo}
                    alt="Moi"
                  />
                  Mac
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={linuxlogo}
                    alt="Moi"
                  />
                  Linux
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={windowslogo}
                    alt="Moi"
                  />
                  WSL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="PagesofCards_mobile">
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Langage de développement</h3>
            <div className="cardsContain_mobile">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={htmlLogo}
                    alt="Moi"
                  />
                  Html
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={cssLogo}
                    alt="Moi"
                  />
                  CSS
                </li>
                <li className="list_lang_card">
                  <img className="list_lang_logo_card" src={jsLogo} alt="Moi" />
                  Java Script
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={reactLogo}
                    alt="Moi"
                  />
                  React
                </li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Outils de développement</h3>
            <div className="cardsContain_mobile">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={vscodelogo}
                    alt="Moi"
                  />
                  VSCode
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={gitlogo}
                    alt="Moi"
                  />
                  Git
                </li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Environement de développement</h3>
            <div className="cardsContain_mobile">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={maclogo}
                    alt="Moi"
                  />
                  Mac
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={linuxlogo}
                    alt="Moi"
                  />
                  Linux
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={windowslogo}
                    alt="Moi"
                  />
                  WSL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="PagesofCards_mobile">
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Langage de développement</h3>
            <div className="cardsContain_mobile">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={htmlLogo}
                    alt="Moi"
                  />
                  Html
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={cssLogo}
                    alt="Moi"
                  />
                  CSS
                </li>
                <li className="list_lang_card">
                  <img className="list_lang_logo_card" src={jsLogo} alt="Moi" />
                  Java Script
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={reactLogo}
                    alt="Moi"
                  />
                  React
                </li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Outils de développement</h3>
            <div className="cardsContain_mobile">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={vscodelogo}
                    alt="Moi"
                  />
                  VSCode
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={gitlogo}
                    alt="Moi"
                  />
                  Git
                </li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Environement de développement</h3>
            <div className="cardsContain_mobile">
              <ul className="List_card">
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={maclogo}
                    alt="Moi"
                  />
                  Mac
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={linuxlogo}
                    alt="Moi"
                  />
                  Linux
                </li>
                <li className="list_lang_card">
                  <img
                    className="list_lang_logo_card"
                    src={windowslogo}
                    alt="Moi"
                  />
                  WSL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
};
export default CardsSkill;
