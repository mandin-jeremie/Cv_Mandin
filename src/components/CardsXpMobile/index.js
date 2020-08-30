import React from "react";

import { useMediaQuery } from "react-responsive";

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

const CardsXpMobile = () => {
  return (
    <div className="PagesofCards_mobile">
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile">Stagiaire Web Developpeur</h3>
        <div className="cardsContain_mobile">En Juillet 2020 à Bordeaux.</div>
        <div className="cardsContain_mobile">
          A l'Addition en tant que developpeur React.
        </div>
      </div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile">Agent Cynophile de Sécurité</h3>
        <div className="cardsContain_mobile">De 2014 à 2019 :</div>
        <div className="cardsContain_mobile">
          Dans différentes société privée dernièrement chez RVF Sécurité pendant
          3 ans assurant des missions dans la Gironde.
        </div>
      </div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile">Electricien en bâtiment</h3>
        <div className="cardsContain_mobile">De 2012 à 2013 :</div>
        <div className="cardsContain_mobile">
          Chez Bourdouleix dans la Gironde
        </div>
      </div>
      <div className="cardsPage_mobile">
        <h3 className="cardsTitle_mobile">Différents métiers de services</h3>
        <div className="cardsContain_mobile">De 2007 à 2012 :</div>
        <div className="cardsContain_mobile">
          <ul>
            <li>Serveur</li>
            <li>Receptioniste</li>
            <li>Barman</li>
            <li>Livreur de pizza</li>
            <li>Vendeur</li>
          </ul>
        </div>
        <div className="cardsContain_mobile">
          A Monaco, Londres, Val Louron dans les Pyrénées et en Gironde.
        </div>
      </div>
    </div>
  );
};
export default CardsXpMobile;
