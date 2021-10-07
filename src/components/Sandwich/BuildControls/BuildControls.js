import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Chicken", type: "chicken" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div>
      <div className={classes.BuildControls}>
        <p>
          Current Price: <strong>£{props.price.toFixed(2)}</strong>
        </p>
        {controls.map((control) => (
          <BuildControl
            key={control.label}
            ingredientLabel={control.label}
            added={() => props.ingredientAdded(control.type)}
            //Pass the control type to keep track of which type this build control is
            remove={() => props.ingredientRemoved(control.type)}
            disabled={props.disableInfo[control.type]}
          />
        ))}

        <button
          className={classes.OrderButton}
          disabled={!props.purchaseable}
          onClick={props.clicked}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default BuildControls;
