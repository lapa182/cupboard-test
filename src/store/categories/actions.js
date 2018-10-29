import * as types from "./types";

export function loadCategoriesSuccess(list) {
  return { type: types.LOAD_CATEGORIES, list };
}

export function categoriesLoading(isLoading = true) {
  return { type: types.CATEGORIES_LOADING, isLoading };
}

export function categoriesFilter(id) {
  return { type: types.SELECTED_CATEGORY, id };
}
