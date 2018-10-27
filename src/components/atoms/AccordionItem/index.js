import * as React from "react";
import PropTypes from "prop-types";
import styles from "./AccordionItem.module.scss";

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.setState({
            active: !this.state.active,
            className: "active"
        });
    }

    render() {
        const activeClass = this.state.active ? styles.active : "";

        return (
            <div className={styles.item + ' ' + activeClass} onClick={this._handleClick}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccordionItem;