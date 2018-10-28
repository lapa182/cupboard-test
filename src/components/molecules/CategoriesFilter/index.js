import * as React from "react";
import PropTypes from "prop-types";
import CategoryLink from "components/atoms/CategoryLink";

class CategoriesFilter extends React.Component {
  constructor(props) {
    super(props);
    const { categories } = this.props;

    this.state = {
      categoryDisplayed: categories
    };

    this.filterCategory = this.filterCategory.bind(this);
  }

  filterCategory(event, id) {
    event.preventDefault();
    const { categories } = this.props;

    const filteredValue = categories.filter(category => category.id === id);

    this.setState({
      categoryDisplayed: filteredValue
    });
  }

  render() {
    const { categoryDisplayed } = this.state;

    return (
      <nav className="tabs">
        <ul>
          {categoryDisplayed.filter(data => data.hidden === false).map(data => (
            <li key={data.id}>
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

export default CategoriesFilter;
