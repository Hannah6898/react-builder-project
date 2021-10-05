import React from "react";
import classes from "./Sandwich.module.css";
import SandwichIngredients from "./SandwichIngredients/SandwichIngredients";

const Sandwich = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(
      /*Object (a default JS object) is used. Object has a method called keys
    which extracts the keys (e.g. salad) from a given object and turns into an Array.
    Now we have an array of keys we can map through them*/
      (ingKey) => {
        return (
          [...Array(props.ingredients[ingKey])]

            /* We now want to transform this string array into an array with as many elements 
      stated on the value in the builder component
      We spread a new array we have to construct using the default JS method
      the length of this new array should be the amount of the given ingredient which is why props.ingredient is passed 
       */
            .map((_, i) => {
              //_ used to represent a blank, i = index
              return <SandwichIngredients key={ingKey + i} type={ingKey} />;
              /*returning an array of JSX elements (SandwichIngredients) which has a key (ingKey= salad/cheese... i=1,2,3....)
            the type = salad, cheese....*/
            })
        );
      }
    )
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  /*We use reduce to transform the array into a flattened array. arr is the previous element of the array and el is the current element in the array.
   We concat the current element to the previous element to produce a flattened array that we can now use for the if statement below */

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Sandwich}>
      <SandwichIngredients type="breadTop" />
      {transformedIngredients}
      <SandwichIngredients type="breadBottom" />
    </div>
  );
};

export default Sandwich;
