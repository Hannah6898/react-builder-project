import React from "react";
import classes from "./Logo.module.css";
import Sandwich from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={Sandwich} alt="Logo" />
    </div>
  );
};

export default Logo;
