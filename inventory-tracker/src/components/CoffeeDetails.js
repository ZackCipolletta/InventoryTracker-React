import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props) {
  const { coffee, onDeleteCoffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h4>{coffee.name}</h4>
      <p><span>Origin: {coffee.origin}</span></p>
      <p><span>price: ${coffee.price}</span></p>
      <p><span>roast: {coffee.roast}</span></p>
      <p><span>amount: {coffee.amount}lbs</span></p>

      <button onClick={() => onDeleteCoffee(coffee.id)}>Delete this Coffee</button>
      <button onClick={() => props.onClickingEdit(coffee.id)}>Edit this sack of beans</button>
    </React.Fragment>
  )
}

CoffeeDetails.protoTypes = {
  coffee: PropTypes.object,
  onDeleteCoffee: PropTypes.func,
};

export default CoffeeDetails;