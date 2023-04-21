import React from "react";
import PropTypes from "prop-types";


function Coffee(props) {

  return (
    <React.Fragment>
      <h4><span>Name: {props.name}</span></h4>
      <p><span>Origin: {props.origin}</span></p>
      <p><span>price: ${props.price}</span></p>
      <p><span>roast: ${props.roast}</span></p>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.number
}


export default Coffee;