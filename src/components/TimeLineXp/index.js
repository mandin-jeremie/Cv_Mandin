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

import SkillCardsXpMobile from "../CardsXpMobile/index.js";

import "./timeline.css";

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
                Juillet 2020
                <p>A Bordeaux</p>
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
                <div className="cardsContain">Stagiaire Web Developpeur</div>
                <Typography>
                  A l'Addition en tant que developpeur React.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">
                De 2014 à 2019
                <p>En Gironde</p>
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
                  Dans différentes société privée dernièrement chez RVF Sécurité
                  pendant 3 ans assurant des missions dans la Gironde.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">
                De 2012 à 2013
                <p>En Gironde</p>
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
                <Typography>Chez Bourdouleix dans la Gironde.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <div className="cardsContain_white">
                De 2007 à 2012
                <p>
                  A Monaco, Londres, Val Louron dans les Pyrénées et en Gironde.
                </p>
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
                  Différents métiers de services
                </div>
                <Typography>
                  Serveur
                  <br />
                  Receptioniste
                  <br />
                  Barman
                  <br />
                  Livreur de pizza
                  <br />
                  Vendeur
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
