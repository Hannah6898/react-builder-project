import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Sandwich from "../../components/Sandwich/Sandwich";

class SandwichBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      chicken: 2,
    },
  };
  render() {
    return (
      <Aux>
        <Sandwich ingredients={this.state.ingredients} />
        <div>Control element</div>
      </Aux>
    );
  }
}

export default SandwichBuilder;
