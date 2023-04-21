import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeList(props) {

  return (
    <React.Fragment>
      {props.coffeeList.map((sack) =>
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          name={sack.name}
          origin={sack.origin}
          price={sack.price}
          roast={sack.roast}
          amount={sack.amount}
          id={sack.id}
          key={sack.id}
          whenCoffeeSold={props.onCoffeeSale}
        />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;