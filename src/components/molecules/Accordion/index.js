import * as React from "react";
import PropTypes from "prop-types";
import AccordionItem from "components/atoms/AccordionItem";
import "./Accordion.module.scss";

class Accordion extends React.Component {
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
        const products = this.props.products;

        return (
            <div className="section">
                {products.map((data) => {
                    return (
                        <AccordionItem key={data.id} {...data}/>
                    )
                })}
            </div>
        )
    }
}

Accordion.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
};

Accordion.defaultProps = {
    alt: "Filter value"
};

export default Accordion;
