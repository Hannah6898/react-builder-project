import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.label}>{props.ingredientLabel}</div>
      <button className={classes.button} onClick={props.added}>
        Add
      </button>
      <button className={classes.button} onClick={props.remove}>
        Remove
      </button>
    </div>
  );
};

export default BuildControl;
