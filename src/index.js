import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { loadCategories, loadProducts } from "./store/GoustoApi";
import App from "./containers/App";

// Redux Store
import configureStore from "./store";
import "./index.scss";

const store = configureStore();
store.dispatch(loadCategories());
store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
