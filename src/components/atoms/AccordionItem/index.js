import * as React from "react";
import PropTypes from "prop-types";
import styles from "./AccordionItem.module.scss";

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.triggerAccordion = this.triggerAccordion.bind(this);
  }

  triggerAccordion(event) {
    if (event.key === "enter" || event.type === "click") {
      this.setState(prevState => ({ active: !prevState.active }));
    }
  }

  render() {
    const { active } = this.state;
    const { title, description } = this.props;
    const activeClass = active ? styles.active : "";

    return (
      <div
        role="tab"
        tabIndex="0"
        className={`${styles.item} ${activeClass}`}
        onKeyPress={this.triggerAccordion}
        onClick={this.triggerAccordion}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default AccordionItem;
