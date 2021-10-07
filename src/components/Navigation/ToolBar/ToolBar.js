import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

const ToolBar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerIcon clicked={props.drawerOpenedHandler} />
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default ToolBar;
