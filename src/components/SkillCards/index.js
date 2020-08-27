import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import htmlLogo from "../../img/HTML.png";
import cssLogo from "../../img/CSS.png";
import jsLogo from "../../img/JS.png";
import reactLogo from "../../img/REACT.png";
import vscodelogo from "../../img/vscode_logo.png";
import gitlogo from "../../img/github_logo.png";
import maclogo from "../../img/apple_logo.png";
import linuxlogo from "../../img/linux_logo.png";
import windowslogo from "../../img/windows_logo.png";
import { positions } from '@material-ui/system';

import "./skillcard.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Desktop>
    <div className="cardsSkill">
    <Card className="card">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
        Langage de développement
        </Typography>
        <Typography variant="h5" component="h2">
        <ul className="List_card">
            <li className="list_lang_card"><img className="list_lang_logo_card" src={htmlLogo} alt="Moi" />Html</li>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={cssLogo} alt="Moi" />CSS</li>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={jsLogo} alt="Moi" />Java Script</li>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={reactLogo} alt="Moi" />React</li>
          </ul>
        </Typography>
      </CardContent>

    </Card>
        <Card className="card">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Outils de développement
        </Typography>
        <Typography variant="h5" component="h2">
        <ul className="List_card">
            <li className="list_lang_card"><img className="list_lang_logo_card" src={vscodelogo} alt="Moi" />VSCode</li>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={gitlogo} alt="Moi" />Git</li>
        </ul>
        </Typography>
      </CardContent>

    </Card>
    <Card className="card">
      <CardContent>
      <Typography className={classes.title} gutterBottom>
          Environement de développement
        </Typography>
        <Typography>
        <ul>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={maclogo} alt="Moi" />Mac</li>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={linuxlogo} alt="Moi" />Linux</li>
            <li className="list_lang_card"><img className="list_lang_logo_card" src={windowslogo} alt="Moi" />WSL</li>
          </ul>
          </Typography>
      </CardContent>
    </Card>
    </div>
    </Desktop>
  );
}