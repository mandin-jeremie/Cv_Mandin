import React from "react";

import htmlLogo from "../../img/HTML.png";
import cssLogo from "../../img/CSS.png";
import jsLogo from "../../img/JS.png";
import reactLogo from "../../img/REACT.png";
import vscodelogo from "../../img/vscode_logo.png";
import gitlogo from "../../img/github_logo.png";
import maclogo from "../../img/apple_logo.png";
import linuxlogo from "../../img/linux_logo.png";
import windowslogo from "../../img/windows_logo.png";

import oclocklogo from "../../img/K81NHwiA_400x400.jpg";
import stgervlogo from "../../img/logo combrailles.jpg";
import lthmlogo from "../../img/Logo-LTHM_900x900.jpg";
import ssiaplogo from "../../img/logo-formation-ssiap1-300x300.png";
import sstlogo from "../../img/Sauveteur_secouriste_du_travail_Logo.svg.png";

const CardsFormation = () => {
  return (
    <div>
      <div className="PagesofCards">
        <div className="cardsPage">
          <h3 className="cardsTitle">DÉVELOPPEUR WEB</h3>
          <div className="cardsContain">De Octobre 2019 à Mars 2020</div>
          <div className="cardsContain">
            <div className="bloc_logo_formations">
              <a
                className="link_logo_formations"
                href="https://oclock.io/formations/developpeur-web"
              >
                <img className="logo_formations" src={oclocklogo} alt="Moi" />
                O'clock
              </a>
            </div>
            <div className="cardsContain">
              À O’clock, école de développement web en téléprésentiel.
            </div>
            <div className="cardsContain">
              Titre Professionnel de Développeur Web et Web Mobile, niveau III
              (bac+2) (non présenté).
            </div>
          </div>
        </div>
        <div className="cardsPage">
          <h3 className="cardsTitle">Agent Cynophile de Sécurité</h3>
          <div className="cardsContain">De Decembre 2013 à Mai 2014</div>
          <div className="cardsContain">
            <div className="bloc_logo_formations">
              <a
                className="link_logo_formations"
                href="https://metiers-chien-animalerie.fr/formation-adulte/formations-longues/agent-cynophile-de-securite"
              >
                <img className="logo_formations" src={stgervlogo} alt="Moi" />
                ACS Lycée des Combrailles
              </a>
            </div>
            <div className="cardsContain">
              Au C.F.P.P.A de Blanquefort. Formations de Saint Gervais
              d'Auvergne.
            </div>
            <div className="cardsContain">
              Agent Cynophile de Sécurité, niveau V (BEP).
            </div>
          </div>
        </div>
        <div className="cardsPage">
          <h3 className="cardsTitle">DÉVELOPPEUR WEB</h3>
          <div className="cardsContain">De Octobre 2019 à Mars 2020</div>
          <div className="cardsContain">
            <div className="bloc_logo_formations">
              <a
                className="link_logo_formations"
                href="https://oclock.io/formations/developpeur-web"
              >
                <img className="logo_formations" src={oclocklogo} alt="Moi" />
                O'clock
              </a>
            </div>
            <div className="cardsContain">
              À O’clock, école de développement web en téléprésentiel.
            </div>
            <div className="cardsContain">
              Titre Professionnel de Développeur Web et Web Mobile, niveau III
              (bac+2) (non présenté).
            </div>
          </div>
        </div>
        <div className="cardsPage">
          <h3 className="cardsTitle">DÉVELOPPEUR WEB</h3>
          <div className="cardsContain">De Octobre 2019 à Mars 2020</div>
          <div className="cardsContain">
            <div className="bloc_logo_formations">
              <a
                className="link_logo_formations"
                href="https://oclock.io/formations/developpeur-web"
              >
                <img className="logo_formations" src={oclocklogo} alt="Moi" />
                O'clock
              </a>
            </div>
            <div className="cardsContain">
              À O’clock, école de développement web en téléprésentiel.
            </div>
            <div className="cardsContain">
              Titre Professionnel de Développeur Web et Web Mobile, niveau III
              (bac+2) (non présenté).
            </div>
          </div>
        </div>
        <div className="cardsPage">
          <h3 className="cardsTitle">DÉVELOPPEUR WEB</h3>
          <div className="cardsContain">De Octobre 2019 à Mars 2020</div>
          <div className="cardsContain">
            <div className="bloc_logo_formations">
              <a
                className="link_logo_formations"
                href="https://oclock.io/formations/developpeur-web"
              >
                <img className="logo_formations" src={oclocklogo} alt="Moi" />
                O'clock
              </a>
            </div>
            <div className="cardsContain">
              À O’clock, école de développement web en téléprésentiel.
            </div>
            <div className="cardsContain">
              Titre Professionnel de Développeur Web et Web Mobile, niveau III
              (bac+2) (non présenté).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFormation;
