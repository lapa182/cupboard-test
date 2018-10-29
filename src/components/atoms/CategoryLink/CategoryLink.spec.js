import React from "react";
import renderer from "react-test-renderer";
import Link from "./index";

describe("Link", () => {
  it("renders without crashing", () => {
    const linkEl = renderer
      .create(
        <Link id="001-01" href="#wine" onClick={() => {}}>
          Wine
        </Link>
      )
      .toJSON();
    expect(linkEl).toMatchSnapshot();
  });
});
