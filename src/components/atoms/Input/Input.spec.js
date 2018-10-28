import React from "react";
import renderer from "react-test-renderer";
import Input from "./index";

describe("Input", () => {
  it("renders without crashing", () => {
    const input = renderer.create(<Input />).toJSON();
    expect(input).toMatchSnapshot();
  });
});
