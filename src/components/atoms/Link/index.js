import * as React from "react";
import PropTypes from "prop-types";

const Link = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick}>
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
