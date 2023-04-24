import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {

  return (
    <React.Fragment>
      <h4><span onClick={() => props.whenCoffeeClicked(props.id)}>Name: {props.name}</span></h4>
      <p><span>Origin: {props.origin}</span></p>
      <p><span>price: ${props.price}</span></p>
      <p><span>roast: {props.roast}</span></p>
      {/* {props.amount <= 100 ? <p>Oh no we're out!</p> : null} */}
      <button onClick={() => props.whenCoffeeSold(props.id)}>Sell coffee</button>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string
};

export default Coffee;