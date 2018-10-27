import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import AccordionItem from ".";

const accordionTitle = text('Title', 'Red Wine');
const accordionDescription = text('Description', 'Good with red meat');

storiesOf("AccordionItem", module)
    .addDecorator(withKnobs)
    .add("default", () => <AccordionItem title={accordionTitle} description={accordionDescription}/>);
