import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import CategoryLink from ".";

const link = text("Link", "#wine");
const withPreventDefault = handler => e => {
  e.preventDefault();
  handler(e);
};

storiesOf("CategoryLink", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CategoryLink
      href={link}
      onClick={withPreventDefault(action("link-click"))}
    >
      Wine
    </CategoryLink>
  ));
