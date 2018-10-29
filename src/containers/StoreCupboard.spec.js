import React from "react";
import ReactDOM from "react-dom";
import StoreCupboard from "./StoreCupboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StoreCupboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
