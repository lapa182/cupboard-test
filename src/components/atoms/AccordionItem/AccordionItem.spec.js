import React from "react";
import renderer from "react-test-renderer";
import AccordionItem from "./index";

describe("Accordion Item", () => {
  it("renders without crashing", () => {
    const accordionItem = renderer
      .create(<AccordionItem title="test" description="test" />)
      .toJSON();
    expect(accordionItem).toMatchSnapshot();
  });
});
