import axios from "axios";
import * as actions from "./actions";

const loadCategories = () => dispatch => {
  dispatch(actions.categoriesLoading());
  axios
    .get("https://api.gousto.co.uk/products/v2.0/categories")
    .then(({ data }) => {
      dispatch(actions.loadCategoriesSuccess(data));
    })
    .catch(error => {
      console.log(error);
      dispatch(actions.categoriesLoading(false));
    });
};

const filterCategory = id => dispatch => {
  dispatch(actions.categoriesFilter(id));
};

export { loadCategories, filterCategory };
