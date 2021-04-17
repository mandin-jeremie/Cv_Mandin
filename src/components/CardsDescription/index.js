import React from "react";

import { useMediaQuery } from "react-responsive";

import "./cardsdescription.css";

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
const CardsDescription = () => {
  return (
    <div>
      <Desktop>
        <div className="PagesofCards">
          <div className="cardsPage">
            <h3 className="cardsTitle">M.Mandin Jérémie</h3>
            <div className="cardsContain_Description">
              Né le 10 Novembre 1990 à Menton (06).
            </div>
            <div className="cardsContain_Description">
              Résident à Cussac-Fort-Medoc (33460).
            </div>
          </div>
          <div className="cardsPage">
            <h3 className="cardsTitle">Langues vivantes</h3>
            <div className="cardsContain_Description">
              <ul>
                <li>Anglais : Courant</li>
                <li>Italien: Débutant</li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_loisirs">
            <h3 className="cardsTitle">Mes Loisirs</h3>
            <div className="cardsContain_Description_loisirs">
              <div className="loisirs">Golf</div>
              <div className="loisirs">Vidéaste amateur</div>
              <div className="loisirs">SnowBoard</div>
              <div className="loisirs">WakeBoard</div>
              <div className="loisirs">VTT</div>
              <div className="loisirs">Guitariste</div>
              <div className="loisirs">Jeux Vidéo</div>
              <div className="loisirs">Voyages</div>
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="PagesofCards_mobile">
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">M.Mandin Jérémie</h3>
            <div className="cardsContain_mobile">
              Né le 10 Novembre 1990 à Menton (06).
            </div>
            <div className="cardsContain_mobile">
              Résident à Cussac-Fort-Medoc (33460).
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Langues vivantes</h3>
            <div className="cardsContain_mobile">
              <ul>
                <li>Anglais : Courant</li>
                <li>Italien: Débutant</li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Mes Loisirs</h3>
            <div className="cardsContain_mobile">
              <ul>
                <li>Vidéaste amateur</li>
                <li>SnowBoard</li>
                <li>WakeBoard</li>
                <li>VTT</li>
                <li>Guitariste</li>
                <li>Jeux Vidéo</li>
                <li>Voyages</li>
              </ul>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="PagesofCards_mobile">
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">M.Mandin Jérémie</h3>
            <div className="cardsContain_mobile">
              Né le 10 Novembre 1990 à Menton (06).
            </div>
            <div className="cardsContain_mobile">
              Résident à Cussac-Fort-Medoc (33460).
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Langues vivantes</h3>
            <div className="cardsContain_mobile">
              <ul>
                <li>Anglais : Courant</li>
                <li>Italien: Débutant</li>
              </ul>
            </div>
          </div>
          <div className="cardsPage_mobile">
            <h3 className="cardsTitle_mobile">Mes Loisirs</h3>
            <div className="cardsContain_mobile">
              <ul>
                <li>Vidéaste amateur</li>
                <li>SnowBoard</li>
                <li>WakeBoard</li>
                <li>VTT</li>
                <li>Guitariste</li>
                <li>Jeux Vidéo</li>
                <li>Voyages</li>
              </ul>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default CardsDescription;
