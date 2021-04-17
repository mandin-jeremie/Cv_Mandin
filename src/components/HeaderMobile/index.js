import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Link } from "react-scroll";

const HeaderMobile = ({
  handleSetActive,
  handleClickHome,
  handleClickNav,
  scrollStyle,
}) => {
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      fontSize: 20,
      "&:focus": {
        backgroundColor: theme.palette.grey.main,

        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        className="bouton_menu"
        style={{ fontSize: 50 }}
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link
            className={"NavPage_" + scrollStyle}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={handleSetActive}
            onClick={handleClickHome}
          >
            Acceuil
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            className={"NavPage_mobile_" + scrollStyle}
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Compétences
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            className={"NavPage_mobile_" + scrollStyle}
            activeClass="active"
            to="xp"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Expériences
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            className={"NavPage_mobile_" + scrollStyle}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Mes formations
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            className={"NavPage_mobile_" + scrollStyle}
            activeClass="active"
            to="description"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Qui suis-je ?
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link
            className={"NavPage_mobile_" + scrollStyle}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={handleSetActive}
            onClick={handleClickNav}
          >
            Contact
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default HeaderMobile;
