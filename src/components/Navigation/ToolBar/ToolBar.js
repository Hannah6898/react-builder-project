import React from "react";
import classes from "./ToolBar.module.css";

const ToolBar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div>Logo</div>
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
};

export default ToolBar;
