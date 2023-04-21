import React from "react";
import CoffeeList from "./CoffeeList";
import NewForm from "./NewForm";
import NewSackOfBeansForm from "./NewSackOfBeansForm";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addNewFormVisible: false,
      coffeeList: []
    };
  }

  handleAddingNewSackOfBeansToList = (newSackOfBeans) => {
    const newCoffeeList = this.state.coffeeList.concat(newSackOfBeans);
    this.setState({
      coffeeList: newCoffeeList,
      addNewFormVisible: false
    });
  };

  handleClick = () => {
    if (!this.state.addNewFormVisible) {
      this.setState({
        addNewFormVisible: true
      });
    } else {
      this.setState(prevState => ({
        addNewFormVisible: !prevState.addNewFormVisible
      }));
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.addNewFormVisible) {
      console.log("button clicked, new form called");
      currentlyVisibleState = <NewSackOfBeansForm onNewSackOfBeansCreation={this.handleAddingNewSackOfBeansToList} />;
      buttonText = "Return to Coffee List";
    }
    else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.coffeeList}
      />;
      buttonText = "Add Sack of Beans";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;