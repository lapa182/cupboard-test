import { createSelector } from "reselect";

const getProducts = state => state.products.list.data;
const getCategoryFilter = state => state.categories.selectedCategory;
const getProductKeyword = state => state.products.keyword;

const makeProductsByCategory = () =>
  createSelector(
    [getProducts, getCategoryFilter, getProductKeyword],
    (products, selectedCategory, keyword) => {
      const filteredProducts = [];
      if (selectedCategory || keyword) {
        let productFiltered;

        products.forEach(product => {
          if (selectedCategory && product.categories) {
            productFiltered = product.categories.filter(
              data => data.id === selectedCategory
            );

            if (
              keyword &&
              productFiltered.length > 0 &&
              (product.title.toLowerCase().indexOf(keyword) > -1 ||
                product.description.toLowerCase().indexOf(keyword) > -1)
            ) {
              filteredProducts.push(product);
              return;
            }

            if (productFiltered.length > 0) {
              filteredProducts.push(product);
              return;
            }

            return;
          }

          if (
            keyword &&
            (product.title.toLowerCase().indexOf(keyword) > -1 ||
              product.description.toLowerCase().indexOf(keyword) > -1)
          ) {
            filteredProducts.push(product);
          }
        });

        return filteredProducts;
      }

      return products;
    }
  );

export default makeProductsByCategory;
