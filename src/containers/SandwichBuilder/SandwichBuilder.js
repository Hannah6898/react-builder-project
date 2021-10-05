import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";

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
    purchaseable: false,
  };

  //check whether we can turn purchaseable to true or false
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      //output: Array ["salad", "bacon"....]
      //But we need the values not the names of the ingredients
      .map((igKey) => {
        return ingredients[igKey];
        //Returning the value for each ingredient, creating an array of values
      })
      //Reduce is turning values into a single number, the sum of all ingredients
      .reduce((sum, el) => {
        //el is the value accessed above for each ingredient. Below we are adding them all together to create 1 number
        return sum + el;
      }, 0);
    //starting number of 0

    this.setState({ purchaseable: sum > 0 });
    // if sum >0 = true and is purchasable and we can order else false
  }

  addIngredientHandler = (type) => {
    //type is the content of the ingredient state
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
      //distribute the properties of the old ingredient state into the new object created here
    };
    updatedIngredients[type] = updatedCount;
    //Accessing the ingredients in the new object created and setting the value to the updated count

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Sandwich ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disableInfo={disableInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default SandwichBuilder;
