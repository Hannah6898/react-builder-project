import React from "react";
import classes from "./Logo.module.css";
import Sandwich from "../../assets/logo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={Sandwich} alt="Logo" />
    </div>
  );
};

export default Logo;
