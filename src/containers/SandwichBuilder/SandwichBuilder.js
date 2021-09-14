import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";

//Global const
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.9,
  chicke: 1.2,
  cheese: 0.6,
};

class SandwichBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      chicken: 0,
      cheese: 0,
    },
    totalPrice: 2,
  };

  addIngredientHandler = (type) => {
    //type is the content of the ingredient state
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
      //distribute the properties of the old ingredient state into the new object created here
    };
    updatedIngredients[type] = updatedCount;
    //Accessing the ingredients in the new object created and setting the value to the updated count

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    console.log(disableInfo);
    return (
      <Aux>
        <Sandwich ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disableInfo={disableInfo}
        />
      </Aux>
    );
  }
}

export default SandwichBuilder;
