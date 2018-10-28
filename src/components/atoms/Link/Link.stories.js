import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Link from ".";

const link = text("Link", "#wine");
const withPreventDefault = handler => e => {
  e.preventDefault();
  handler(e);
};

storiesOf("Link", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Link href={link} onClick={withPreventDefault(action("link-click"))}>
      Wine
    </Link>
  ));
