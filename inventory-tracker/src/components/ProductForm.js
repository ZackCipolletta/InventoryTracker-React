import React from "react";
import PropTypes from "prop-types";

function ProductForm(props) {
  return (
    <React.Form>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Name"
        />
        <input
          type='text'
          name='origin'
          placeholder="Origin"
        />
        <input
          type='number'
          name='price'
          placeholder="Price"
        />
        <input
          type='text'
          name='roast'
          placeholder="Roast"
        />
        <input
          type='number'
          name='amount'
          placeholder="Amount"
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Form>
  )
}

ProductForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ProductForm;