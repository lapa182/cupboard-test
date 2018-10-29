import axios from "axios";
import * as actions from "./actions";

const loadProducts = () => dispatch => {
  dispatch(actions.productsLoading());
  axios
    .get(
      "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120"
    )
    .then(({ data }) => {
      dispatch(actions.loadProductsSuccess(data));
    })
    .catch(error => {
      console.log(error);
      dispatch(actions.productsLoading(false));
    });
};

const filterProducts = keyword => dispatch => {
  dispatch(actions.productsFilter(keyword));
};

export { loadProducts, filterProducts };
