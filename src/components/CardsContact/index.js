import React from "react";

import { useMediaQuery } from "react-responsive";

import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";

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

const CardsContact = () => {
  return (
    <div>
      <Desktop>
        <div className="PagesofCards">
          <div className="cardsPage">
            <h3 className="cardsTitle">Mes Coordonées</h3>
            <div className="cardsContain_mobile">
              E-mail :{" "}
              <a className="cardCom_mobile" href="mailto:mandin.j@outlook.fr">
                <MailIcon />
                mandin.j@outlook.fr
              </a>
            </div>
            <div className="cardsContain_mobile">
              Phone :
              <a className="cardCom_mobile" href="tel:+33676691562">
                <CallIcon />
                +33676691562
              </a>
            </div>
          </div>
          <div className="cardsPageEnd">
            <div className="cardsContainEnd">
              <p>Réaliser par M.MANDIN. 2020</p>
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="cardsPage_mobile">
          <h3 className="cardsTitle_mobile">Mes Coordonées</h3>
          <div className="cardsContain_mobile">
            E-mail :{" "}
            <a className="cardCom_mobile" href="mailto:mandin.j@outlook.fr">
              <MailIcon />
              mandin.j@outlook.fr
            </a>
          </div>
          <div className="cardsContain_mobile">
            Phone :
            <a className="cardCom_mobile" href="tel:+33676691562">
              <CallIcon />
              +33676691562
            </a>
          </div>
        </div>
        <div className="cardsPageEnd_mobile">
          <div className="cardsContainEnd_mobile">
            <p>Réaliser par M.MANDIN. 2020</p>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="cardsPage_mobile">
          <h3 className="cardsTitle_mobile">Mes Coordonées</h3>
          <div className="cardsContain_mobile">
            E-mail :{" "}
            <a className="cardCom_mobile" href="mailto:mandin.j@outlook.fr">
              <MailIcon />
              mandin.j@outlook.fr
            </a>
          </div>
          <div className="cardsContain_mobile">
            Phone :
            <a className="cardCom_mobile" href="tel:+33676691562">
              <CallIcon />
              +33676691562
            </a>
          </div>
        </div>
        <div className="cardsPageEnd_mobile">
          <div className="cardsContainEnd_mobile">
            <p>Réaliser par M.MANDIN. 2020</p>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default CardsContact;
