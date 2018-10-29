import React from "react";
import { connect } from "react-redux";
import CategoriesFilter from "components/molecules/CategoriesFilter";
import Accordion from "components/molecules/Accordion";
import makeProductsByCategory from "../store/selectors";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { products } = this.props;

    this.state = {
      productsFiltered: products
    };
  }

  render() {
    const { productsFiltered } = this.state;
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
                <CategoriesFilter categories={categories} />
              </article>
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
  const mapStateToProps = (state, ownProps) => ({
    categories: state.categories.list.data,
    loading: state.categories.loading,
    products: getProductsByCategory(state, ownProps)
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(App);
