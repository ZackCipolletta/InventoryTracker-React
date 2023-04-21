import React from "react";
import PropTypes from "prop-types";
import NewForm from "./NewForm";

function EditSackOfBeansForm(props) {
  const { coffee } = props;

  function handleEditSackOfBeansFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      amount: coffee.amount,
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <NewForm
        formSubmissionHandler={handleEditSackOfBeansFormSubmission}
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

export default EditSackOfBeansForm;

EditSackOfBeansForm.propTypes = {
  product: PropTypes.object,
  onEditCoffee: PropTypes.func
};