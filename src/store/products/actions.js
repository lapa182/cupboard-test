import * as types from "./types";

export function loadProductsSuccess(list) {
  return { type: types.LOAD_PRODUCTS, list };
}

export function productsLoading(isLoading = true) {
  return { type: types.PRODUCTS_LOADING, isLoading };
}

export function productsFilter(id) {
  return { type: types.FILTER_PRODUCTS, id };
}
