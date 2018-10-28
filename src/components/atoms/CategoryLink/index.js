import * as React from "react";
import PropTypes from "prop-types";

const CategoryLink = ({ id, onClick, children }) => (
  <a href={id} onClick={onClick}>
    {children}
  </a>
);

CategoryLink.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default CategoryLink;
