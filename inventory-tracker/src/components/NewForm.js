import React from "react";
import PropTypes from "prop-types";

function NewForm(props) {

  const { name, origin, price, roast, amount } = props;

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Name"
          defaultValue={name} />
        <input
          type='text'
          name='origin'
          placeholder="Origin"
          defaultValue={origin} />
        <input
          type='number'
          name='price'
          placeholder="Price"
          defaultValue={price} />
        <input
          type='text'
          name='roast'
          placeholder="Roast"
          defaultValue={roast} />
        {props.showAmount && (
          <input
            type='number'
            name='amount'
            placeholder="Amount"
            defaultValue={amount} />
        )}
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

NewForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  amount: PropTypes.number,
};

export default NewForm;