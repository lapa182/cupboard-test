import { createSelector } from "reselect";

const getProducts = state => state.products.list.data;
const getCategoryFilter = state => state.products.selectedCategory;

const makeProductsByCategory = () =>
  createSelector(
    [getProducts, getCategoryFilter],
    (products, selectedCategory) => {
      if (selectedCategory) {
        const filteredProducts = [];
        products.forEach(product => {
          if (product.categories) {
            const productFiltered = product.categories.filter(
              data => data.id === selectedCategory
            );

            if (productFiltered.length > 0) {
              filteredProducts.push(product);
            }
          }
        });

        return filteredProducts;
      }
      return products;
    }
  );

export default makeProductsByCategory;
