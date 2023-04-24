import React from "react";
import CoffeeList from "./CoffeeList";
import NewSackOfBeansForm from "./NewSackOfBeansForm";
import CoffeeDetails from "./CoffeeDetails";
import EditSackOfBeansForm from "./EditSackOfBeansForm";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addNewFormVisible: false,
      coffeeList: [],
      editingCoffee: false
    };
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.coffeeList.filter(coffee => coffee.id === id)[0];
    console.log("coffee clicked id:" + id);
    console.log(selectedCoffee);
    this.setState({ selectedCoffee: selectedCoffee });
  };

  handleCoffeeSale = (id) => {
    const updatedCoffeeList = this.state.coffeeList.filter((obj) => obj.id !== id);
    const coffeeSold = this.state.coffeeList.filter(coffee => coffee.id === id)[0];
    const soldIndex = this.state.coffeeList.indexOf(coffeeSold);
    coffeeSold.amount -= 1;
    updatedCoffeeList.splice(soldIndex, 0, coffeeSold);

  }

  handleAddingNewSackOfBeansToList = (newSackOfBeans) => {
    const newCoffeeList = this.state.coffeeList.concat(newSackOfBeans);
    this.setState({
      coffeeList: newCoffeeList,
      addNewFormVisible: false
    });
  };

  handleClick = () => {
    if (this.state.selectedCoffee !=null) {
      this.setState({
        addNewFormVisible: false,
        editingCoffee: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        addNewFormVisible: !prevState.addNewFormVisible
      }));
    }
  };

  handleDeleteCoffee = (id) => {
    const updatedCoffeeList = this.state.coffeeList.filter((obj) => obj.id !== id);
    this.setState({
      coffeeList: updatedCoffeeList,
      selectedCoffee: null
    });
  };

  handleEditingCoffeeList = (coffeeToBeEdited) => {
    const editedCoffeeList = this.state.coffeeList
      .filter((obj) => obj.id !== this.state.selectedCoffee.id)
      .concat(coffeeToBeEdited);
    this.setState({
      coffeeList: editedCoffeeList,
      editingCoffee: false,
      selectedCoffee: null
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!")
    this.setState({ editingCoffee: true });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editingCoffee) {
      currentlyVisibleState = <EditSackOfBeansForm coffee={this.state.selectedCoffee}
        onEditCoffee={this.handleEditingCoffeeList} />
      buttonText="Return to Coffee List"
    }
    else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetails coffee={this.state.selectedCoffee}
        onDeleteCoffee={this.handleDeleteCoffee}
        onClickingEdit={this.handleEditClick} // this allows the program to listen for a call to the handleEditClick method inside the CoffeeDetails component. When a user clicks the right button inside the CoffeeDetails component, this will call the handleEditClick method here in CoffeeControl. The method will then update state.editingCoffee to true, which will then call for the EditSackOfBeansForm component to be displayed.
        />
      buttonText = "Return to Coffee List";
    }
    else if (this.state.addNewFormVisible) {
      currentlyVisibleState = <NewSackOfBeansForm onNewSackOfBeansCreation={this.handleAddingNewSackOfBeansToList} />;
      buttonText = "Return to Coffee List";
    }
    else {
      currentlyVisibleState = <CoffeeList
        coffeeList={this.state.coffeeList}
        onCoffeeSelection={this.handleChangingSelectedCoffee}
        onCoffeeSale={this.handleCoffeeSale}
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