import React from "react";
import Coffee from "./Coffee";

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
        <Coffee />
      </React.Fragment>
    );
  }
}

export default CoffeeControl;