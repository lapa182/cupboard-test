import initialState from "../initialState";
import * as types from "./types";

export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };
    case types.LOAD_PRODUCTS:
      return {
        ...state,
        list: action.list,
        loading: false
      };
    case types.FILTER_PRODUCTS:
      return {
        ...state,
        selectedCategory: action.id
      };
    default:
      return state;
  }
}
