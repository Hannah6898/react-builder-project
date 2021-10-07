import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../../components/Logo/Logo";

const ToolBar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
};

export default ToolBar;
