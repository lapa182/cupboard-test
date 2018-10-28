import * as React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder }) => (
  <div className="field">
    <div className="control">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string
};

Input.defaultProps = {
  placeholder: "Filter value"
};

export default Input;
