import initialState from "../initialState";
import * as types from "./types";

export default function categoriesReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case types.CATEGORIES_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };
    case types.LOAD_CATEGORIES:
      return {
        ...state,
        list: action.list,
        loading: false
      };
    case types.SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.id
      };
    default:
      return state;
  }
}
