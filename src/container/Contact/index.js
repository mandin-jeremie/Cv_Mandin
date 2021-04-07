import React from "react";

import { useMediaQuery } from "react-responsive";

import "./contact.css";
import CardsContact from "../../components/CardsContact";
import ContactForm from "../../components/ContactForm";

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
const Contact = () => {
  return (
    <div>
      <Desktop>
        <div className="bloc_contact" id="contact">
          <h3 className="subTitle">Contact</h3>
          <ContactForm />
          <CardsContact />
        </div>
      </Desktop>
      <Tablet>
        <div className="bloc_contact" id="contact">
          <h3 className="subTitle">Contact</h3>
          <CardsContact />
        </div>
      </Tablet>
      <Mobile>
        <div className="bloc_contact" id="contact">
          <h3 className="subTitle">Contact</h3>
          <CardsContact />
        </div>
      </Mobile>
    </div>
  );
};

export default Contact;
