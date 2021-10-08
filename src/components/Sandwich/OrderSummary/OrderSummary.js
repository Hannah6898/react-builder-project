import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious Sandwich with the following fillings:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: £{this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <div style={{ display: "flex" }}>
          <Button btnType="Danger" clicked={this.props.cancelClick}>
            CANCEL
          </Button>
          <Button btnType="Success" clicked={this.props.continueClick}>
            CONTINUE
          </Button>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
