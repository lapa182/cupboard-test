import React from "react";
import renderer from "react-test-renderer";
import Link from "./index";

describe("Link", () => {
  it("renders without crashing", () => {
    const linkEl = renderer.create(<Link href="#wine">Wine</Link>).toJSON();
    expect(linkEl).toMatchSnapshot();
  });
});
