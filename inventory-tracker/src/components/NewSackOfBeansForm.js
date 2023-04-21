import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import NewForm from "./NewForm";

function NewSackOfBeansForm(props) {

  function handleNewSackOfBeansFormSubmission(event) {
    event.preventDefault();
    props.onNewSackOfBeansCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      amount: event.target.amount.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h1>Add New Sack of beans:</h1>
      <NewForm
        formSubmissionHandler={handleNewSackOfBeansFormSubmission}
        buttonText={"Add"} />
    </React.Fragment>
  )
};

NewSackOfBeansForm.propTypes = {
  onNewSackOfBeansCreation: PropTypes.func
}

export default NewSackOfBeansForm;