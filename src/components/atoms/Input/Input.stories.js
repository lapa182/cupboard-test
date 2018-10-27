import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Input from ".";

const placeholderText = text("Alternative Text", "Filter value");

storiesOf("Input", module)
    .addDecorator(withKnobs)
    .add("default", () => <Input placeholder={placeholderText} />);
