import React from "react";
import { connect } from "react-redux";
import CategoriesFilter from "components/molecules/CategoriesFilter";
import Accordion from "components/molecules/Accordion";

const App = ({ categories, loading, products }) => (
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

const mapStateToProps = state => ({
  categories: state.categories.list.data,
  loading: state.categories.loading,
  products: state.products.list.data
});

export default connect(mapStateToProps)(App);
