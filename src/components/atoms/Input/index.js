import * as React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, onKeyUp }) => (
  <div className="field">
    <div className="control">
      <input
        className="input"
        type="text"
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onKeyUp: PropTypes.func.isRequired
};

Input.defaultProps = {
  placeholder: "Filter value"
};

export default Input;
