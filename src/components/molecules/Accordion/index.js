import * as React from "react";
import PropTypes from "prop-types";
import AccordionItem from "components/atoms/AccordionItem";

const Accordion = ({ products }) => (
  <div className="section">
    {products.map(data => (
      <AccordionItem key={data.id} {...data} />
    ))}
  </div>
);

Accordion.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Accordion;
