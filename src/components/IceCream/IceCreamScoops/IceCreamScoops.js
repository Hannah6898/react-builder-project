import React from "react";
import Aux from "../../hoc/Aux";
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

export default IceCreamScoops;
