import { configure, addDecorator } from "@storybook/react";
// https://github.com/storybooks/storybook/tree/release/3.4/addons/info
import { withInfo, setDefaults } from "@storybook/addon-info";
import "../src/index.scss";

const req = require.context("../src/components", true, /\.stories\.js$/);

addDecorator(withInfo({
  inline: true
}));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
