import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import LaptopMacIcon from "@material-ui/icons/LaptopMac";

import PetsIcon from "@material-ui/icons/Pets";
import PowerIcon from "@material-ui/icons/Power";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import oclocklogo from "../../img/K81NHwiA_400x400.jpg";
import stgervlogo from "../../img/logo combrailles.jpg";
import lthmlogo from "../../img/Logo-LTHM_900x900.jpg";
import ssiaplogo from "../../img/logo-formation-ssiap1-300x300.png";
import sstlogo from "../../img/Sauveteur_secouriste_du_travail_Logo.svg.png";

import SkillCardsXpMobile from "../CardsXpMobile/index.js";

import "./timelineformations.css";

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
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 20px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div>
      <Desktop>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">
                De Octobre 2019 à Mars 2020
              </div>
              <div className="bloc_logo_formations">
                <a
                  className="link_logo_formations"
                  href="https://oclock.io/formations/developpeur-web"
                >
                  <img className="logo_formations" src={oclocklogo} alt="Moi" />
                  O'clock
                </a>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <div className="cardsContain">Développeur Web</div>
                <Typography>
                  À O’clock, école de développement web en téléprésentiel.
                  <br /> Titre Professionnel de Développeur Web et Web Mobile,
                  niveau III (bac+2) (non présenté).
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">
                De Decembre 2013 à Mai 2014
              </div>
              <div className="bloc_logo_formations">
                <a
                  className="link_logo_formations"
                  href="https://metiers-chien-animalerie.fr/formation-adulte/formations-longues/agent-cynophile-de-securite"
                >
                  <img className="logo_formations" src={stgervlogo} alt="Moi" />
                  ACS Lycée des Combrailles
                </a>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <PetsIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <div className="cardsContain">Agent Cynophile de Sécurité</div>
                <Typography>
                  Au C.F.P.P.A de Blanquefort. Formations de Saint Gervais
                  d'Auvergne.
                  <br />
                  Agent Cynophile de Sécurité, niveau V (BEP).
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">De 2005 à 2007</div>
              <div className="bloc_logo_formations">
                <a
                  className="link_logo_formations"
                  href="https://lycee-technique.gouv.mc/A-propos-de-l-etablissement/Sections"
                >
                  <img className="logo_formations" src={lthmlogo} alt="Moi" />
                  L.T.H.Monaco
                </a>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <PowerIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <div className="cardsContain">Electricien en bâtiment</div>
                <Typography>
                  {" "}
                  Au Lycée Technique et Hôtelier de Monaco.
                  <br />
                  Métier de l’électrotechnique, niveau V (BEP).
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">Valide jusqu'en 2021</div>
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
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <LocalCafeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <div className="cardsContain">
                  Agent de sécurité incendie et sauveteur secouriste
                </div>
                <Typography>
                  Agent S.S.I.A.P 1 ( service de sécurité incendie et
                  d’assistance à personnes niveau 1 ) et S.S.T ( sauveteur
                  secouriste du travail ) à ce jour recyclés.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Desktop>
      <Tablet>
        <div className="SkillCards">
          <SkillCardsXpMobile />
        </div>
      </Tablet>
      <Mobile>
        <div className="SkillCards">
          <SkillCardsXpMobile />
        </div>
      </Mobile>
    </div>
  );
}
