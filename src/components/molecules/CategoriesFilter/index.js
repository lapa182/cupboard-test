import * as React from "react";
import PropTypes from "prop-types";
import CategoryLink from "components/atoms/CategoryLink";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterCategory } from "../../../store/GoustoApi";

class CategoriesFilter extends React.Component {
  filterCategory(event, id) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(filterCategory(id));
  }

  render() {
    const { categories, selectedCategory } = this.props;

    return (
      <nav className="tabs">
        <ul>
          {categories.filter(data => data.hidden === false).map(data => (
            <li
              className={selectedCategory === data.id ? "is-active" : ""}
              key={data.id}
            >
              <CategoryLink
                {...data}
                onClick={event => this.filterCategory(event, data.id)}
              >
                {data.title}
              </CategoryLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

CategoriesFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = () => dispatch =>
  bindActionCreators({ filterCategory }, dispatch);

export default connect(mapDispatchToProps)(CategoriesFilter);
