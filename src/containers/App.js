import React from "react";
import { connect } from "react-redux";
import CategoriesFilter from "components/molecules/CategoriesFilter";
import Accordion from "components/molecules/Accordion";
import Input from "components/atoms/Input";
import makeProductsByCategory from "../store/selectors";
import { filterProducts } from "../store/GoustoApi";

// Simple function to debounce
// https://toughcompetent.com/blog/es5-es6-debounce-react-events-on-inputs/
function debounce(a, b, c) {
  let d;
  let e;
  return function() {
    function h() {
      (d = null), c || (e = a.apply(f, g));
    }
    var f = this;

    var g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

class App extends React.Component {
  filterByKeyword(event) {
    const { dispatch } = this.props;

    debounce(dispatch(filterProducts(event.target.value)), 500);
  }

  render() {
    const { categories, loading, products } = this.props;

    return (
      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <main className="container">
            <section className="columns is-vcentered">
              <header className="column is-2">
                <h1>Store Cupboard</h1>
              </header>
              <article className="column is-10">
                <CategoriesFilter
                  categories={categories.list.data}
                  selectedCategory={categories.selectedCategory}
                />
              </article>
            </section>
            <section className="columns">
              <div className="column is-5">
                <Input onKeyUp={event => this.filterByKeyword(event)} />
              </div>
            </section>
            <section className="columns">
              <div className="column">
                {products && <Accordion products={products} />}
              </div>
            </section>
          </main>
        )}
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getProductsByCategory = makeProductsByCategory();
  const mapStateToProps = state => ({
    categories: state.categories,
    loading: state.categories.loading,
    products: getProductsByCategory(state)
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(App);
