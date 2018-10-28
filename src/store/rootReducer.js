import { combineReducers } from "redux";
import categories from "./categories/reducer";
import products from "./products/reducer";

const rootReducer = combineReducers({
  categories,
  products
});

export default rootReducer;
