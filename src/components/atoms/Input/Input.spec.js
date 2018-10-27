import React from "react";
import ReactDOM from "react-dom";
import Input from "./index";

describe("Picture", () => {
  it("renders without crashing", () => {
    const picture = document.createElement("input");
    ReactDOM.render(<Input />, Input);
    ReactDOM.unmountComponentAtNode(picture);
  });
});
