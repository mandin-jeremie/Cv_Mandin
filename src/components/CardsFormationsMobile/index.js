import React from "react";

import oclocklogo from "../../img/K81NHwiA_400x400.jpg";
import stgervlogo from "../../img/logo combrailles.jpg";
import lthmlogo from "../../img/Logo-LTHM_900x900.jpg";
import ssiaplogo from "../../img/logo-formation-ssiap1-300x300.png";
import sstlogo from "../../img/Sauveteur_secouriste_du_travail_Logo.svg.png";

const CardsFormationMobile = () => {
  return (
    <div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile"> DÉVELOPPEUR WEB</h3>
        <div className="cardsContain_mobile">De Octobre 2019 à Mars 2020</div>
        <div className="bloc_logo_formations">
          <a
            className="link_logo_formations"
            href="https://oclock.io/formations/developpeur-web"
          >
            <img className="logo_formations" src={oclocklogo} alt="Moi" />
            O'clock
          </a>
        </div>
        <div className="cardsContain_mobile">
          À O’clock, école de développement web en téléprésentiel.
        </div>
        <div className="cardsContain_mobile">
          Titre Professionnel de Développeur Web et Web Mobile, niveau III
          (bac+2) (non présenté).
        </div>
      </div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile"> Agent Cynophile de Sécurité</h3>
        <div className="cardsContain_mobile">De Decembre 2013 à Mai 2014</div>
        <div className="bloc_logo_formations">
          <a
            className="link_logo_formations"
            href="https://metiers-chien-animalerie.fr/formation-adulte/formations-longues/agent-cynophile-de-securite"
          >
            <img className="logo_formations" src={stgervlogo} alt="Moi" />
            ACS Lycée des Combrailles
          </a>
        </div>
        <div className="cardsContain_mobile">
          Au C.F.P.P.A de Blanquefort. Formations de Saint Gervais d'Auvergne.
        </div>
        <div className="cardsContain_mobile">
          Agent Cynophile de Sécurité, niveau V (BEP).
        </div>
      </div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile"> Electricien</h3>
        <div className="cardsContain_mobile"> De 2005 à 2007 :</div>
        <div className="bloc_logo_formations">
          <a
            className="link_logo_formations"
            href="https://lycee-technique.gouv.mc/A-propos-de-l-etablissement/Sections"
          >
            <img className="logo_formations" src={lthmlogo} alt="Moi" />
            L.T.H.Monaco
          </a>
        </div>
        <div className="cardsContain_mobile">
          Au Lycée Technique et Hôtelier de Monaco.
        </div>
        <div className="cardsContain_mobile">
          Métier de l’électrotechnique, niveau V (BEP).
        </div>
      </div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile">
          Agent de sécurité incendie et sauveteur secouriste
        </h3>
        <div className="cardsContain_mobile">Valide jusqu'en 2021</div>
        <div className="bloc_logo_formations">
          <a
            className="link_logo_formations"
            href="https://www.pompiers.fr/grand-public/devenir-sapeur-pompier/metiers-surete-et-securite/diplome-service-de-securite-incendie"
          >
            <img className="logo_formations" src={ssiaplogo} alt="Moi" />
            SSIAP
          </a>
          <a
            className="link_logo_formations"
            href="http://www.inrs.fr/services/formation/publics/sauveteur-secouriste.html"
          >
            <img className="logo_formations" src={sstlogo} alt="Moi" />
            INRS - SST
          </a>
        </div>
        <div className="cardsContain_mobile">
          Agent S.S.I.A.P 1 ( service de sécurité incendie et d’assistance à
          personnes niveau 1 ) et S.S.T ( sauveteur secouriste du travail ) à ce
          jour recyclés.
        </div>
      </div>
    </div>
  );
};
export default CardsFormationMobile;
