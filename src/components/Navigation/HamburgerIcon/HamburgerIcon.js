import React from "react";
import classes from "./HamburgerIcon.module.css";

const HamburgerIcon = (props) => {
  return (
    <div onClick={props.clicked} className={classes.HamburgerIcon}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerIcon;
