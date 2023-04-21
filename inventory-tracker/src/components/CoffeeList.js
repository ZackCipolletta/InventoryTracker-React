import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeList(props) {

  const sack = [
    {
      name: "House Blend",
      origin: "Sumatra",
      price: 8,
      roast: "Medium"
    },
    {
      name: "Breakfast Blend",
      origin: "Papua New Guinea",
      price: 9,
      roast: "Dark"
    },
    {
      name: "Afternoon Blend",
      origin: "Brazil",
      price: 9,
      roast: "Light"
    },
    {
      name: "Espresso Roast",
      origin: "Africa",
      price: 9,
      roast: "Very Dark"
    }
  ];

  return (
    <React.Fragment>
      {props.coffeeList.map((sack) =>
        <Coffee
          name={sack.name}
          origin={sack.origin}
          price={sack.price}
          roast={sack.roast}
        />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;