import * as React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, onKeyPress }) => (
  <div className="field">
    <div className="control">
      <input
        className="input"
        type="text"
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onKeyPress: PropTypes.func.isRequired
};

Input.defaultProps = {
  placeholder: "Filter value"
};

export default Input;
