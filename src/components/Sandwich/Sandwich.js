import React from "react";
import classes from "./Sandwich.module.css";
import SandwichIngredients from "./SandwichIngredients/SandwichIngredients";

const Sandwich = (props) => {
  return (
    <div className={classes.Sandwich}>
      <SandwichIngredients type="BreadTop" />
      <SandwichIngredients type="Chicken" />
      <SandwichIngredients type="Cheese" />
      <SandwichIngredients type="Salad" />
      <SandwichIngredients type="Bacon" />
      <SandwichIngredients type="BreadBottom" />
    </div>
  );
};

export default Sandwich;
