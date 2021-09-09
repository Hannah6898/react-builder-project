import React from "react";
import PropTypes from "prop-types";
import classes from "./IceCreamScoops.module.css";

const IceCreamScoops = (props) => {
  let scoop = null;

  switch (props.type) {
    /*if there is a match between props.type and any of the cases below then
    the associated block of code is executed. If there is no match the default 
    code block is executed*/
    case "chocolate":
      scoop = <div className={classes.scoop.chocolate}></div>;
      break;
    case "vanilla":
      scoop = <div className={classes.scoop.vanilla}></div>;
      break;
    case "strawberry":
      scoop = <div className={classes.scoop.strawberry}></div>;
      break;
    case "orange":
      scoop = <div className={classes.scoop.orange}></div>;
      break;
    case "lemon":
      scoop = <div className={classes.scoop.lemon}></div>;
    default:
      scoop = null;
  }
  return scoop;
};

IceCreamScoops.propTypes = {
  type: PropTypes.string.isRequired,
};
//Prop.types = provides informatin on what type of prop to expect
//isRequired = If this component is used without passing a type, we get an error

export default IceCreamScoops;
