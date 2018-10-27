import * as React from "react";
import PropTypes from "prop-types";
import "./Input.module.scss";

const Input = ({ placeholder }) => {
    return (
        <div className="field">
            <div className="control">
                <input 
                    className="input" 
                    type="text" 
                    placeholder={placeholder} 
                    aria-label={placeholder} />
            </div>
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string
};

Input.defaultProps = {
    alt: "Filter value"
};

export default Input;