import React from "react";
import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Sandwich with the following fillings:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default OrderSummary;
