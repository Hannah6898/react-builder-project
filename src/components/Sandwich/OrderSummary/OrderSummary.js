import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: £{props.totalPrice.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.cancelClick}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continueClick}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
