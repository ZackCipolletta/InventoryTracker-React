import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {

  const handleSellButtonClick = () => {
    props.whenCoffeeSold(props.id);

    // Check if amount is 0 and remove the button
    if (props.amount === 0) {
      const sellButton = document.getElementById(`coffee-${props.id}-sell-button`);
      sellButton.remove();
    }
  };
  
  return (
    <React.Fragment>
      <h4><span onClick={() => props.whenCoffeeClicked(props.id)}>Name: {props.name}</span></h4>
      <p><span>Origin: {props.origin}</span></p>
      <p><span>price: ${props.price}</span></p>
      <p><span>roast: {props.roast}</span></p>
      {/* {props.amount <= 100 ? <p>Oh no we're out!</p> : null} */}
      {props.amount > 0 && <button id={`coffee-${props.id}-sell-button`} onClick={handleSellButtonClick}>Sell coffee</button>}
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