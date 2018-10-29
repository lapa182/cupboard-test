import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { Provider as ReduxProvider } from "react-redux";
import CategoriesFilter from ".";

import configureStore from "../../../store";

let store = configureStore();

export default function Provider({ story }) {
  return <ReduxProvider store={store}>{story}</ReduxProvider>;
}

const response = object("Categories", {
  data: [
    {
      id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
      title: "Drinks Cabinet",
      box_limit: 7,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
      title: "Kitchenware",
      box_limit: 6,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
      title: "Desserts",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "01b06fa0-bf7e-11e5-9c1e-02fada0dd3b9",
      title: "Food Cupboard",
      box_limit: 10,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9",
      title: "Snacks",
      box_limit: 10,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "c2b64b58-5280-11e6-b304-02cd0b1dc697",
      title: "Kids",
      box_limit: 5,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "287ad10e-e186-11e6-86d4-0297f19e8e45",
      title: "Valentines",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "47d0e046-d12e-11e7-aba4-0617e74d8914",
      title: "Christmas sm",
      box_limit: 4,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "83281818-3854-11e6-8771-06f9522b85fb",
      title: "Mug BakedIn",
      box_limit: 4,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "785741fc-3854-11e6-87a5-06f9522b85fb",
      title: "Large Alcohol",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "52a565d2-d12e-11e7-a210-0617e74d8914",
      title: "Christmas lg",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "8b349cfc-ff3c-11e6-bf7e-02d1dd7f0ccb",
      title: "Easter",
      box_limit: 4,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "89f0f70a-3854-11e6-8218-06f9522b85fb",
      title: "Small Breakfast",
      box_limit: 5,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "8302b6ae-3854-11e6-9e42-06f9522b85fb",
      title: "Little Pot",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "f76c6640-97c9-11e7-aecd-067ba2f0c390",
      title: "Small free from",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "384da59c-9452-11e6-87b0-06981aa90cf9",
      title: "Christmas",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "831b3f8a-3854-11e6-86cf-06f9522b85fb",
      title: "Small BakedIn",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "4cb35a02-27da-11e6-bf1e-026e15ef4a55",
      title: "Lunch",
      box_limit: 5,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "4dd32756-d12e-11e7-b28b-0617e74d8914",
      title: "Christmas md",
      box_limit: 3,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "a44b4c22-e489-11e6-9d77-027ca04bdf39",
      title: "Most Popular",
      box_limit: 2,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "89e489de-3854-11e6-ae7c-06f9522b85fb",
      title: "Large Breakfast",
      box_limit: 1,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "7867356c-3854-11e6-ab35-06f9522b85fb",
      title: "Mini Alcohol",
      box_limit: 5,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "dd25600c-97c9-11e7-b173-067ba2f0c390",
      title: "Free from",
      box_limit: 4,
      is_default: false,
      recently_added: false,
      hidden: false
    },
    {
      id: "830f0a62-3854-11e6-8999-06f9522b85fb",
      title: "Large BakedIn",
      box_limit: 1,
      is_default: false,
      recently_added: false,
      hidden: true
    },
    {
      id: "48dc8dc2-27da-11e6-9902-026e15ef4a55",
      title: "Breakfast",
      box_limit: 6,
      is_default: false,
      recently_added: false,
      hidden: false
    }
  ]
});

storiesOf("CategoriesFilter", module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CategoriesFilter
      categories={response.data}
      selectedCategory="48dc8dc2-27da-11e6-9902-026e15ef4a55"
    />
  ));
