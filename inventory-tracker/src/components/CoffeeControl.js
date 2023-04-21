import React from "react";
import Coffee from "./Coffee";
import CoffeeList from "./CoffeeList";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeList: []
    };
  }


  render() {

    return (
      <React.Fragment>
        <CoffeeList />
        <Coffee />
      </React.Fragment>
    );
  }
}

export default CoffeeControl;