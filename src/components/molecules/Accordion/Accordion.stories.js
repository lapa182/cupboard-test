import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import Accordion from ".";

const productsList = object("Products", {
    "data": [
        {
            "id": "0009468c-33e9-11e7-b485-02859a19531d",
            "sku": "AP-ACH-WIN-WHI-23-P",
            "title": "Borsao Macabeo",
            "description": "A flavoursome Summer wine made from the indigenous Macabeo grape in northern Spain. A balanced, modern white with flavours of ripe peach, zesty lemon and nutty undertones, it leaves the palate with a clean and fruity finish.",
            "list_price": "6.95",
            "is_vatable": true,
            "is_for_sale": true,
            "age_restricted": true,
            "box_limit": 2,
            "always_on_menu": false,
            "created_at": "2017-05-08T13:22:27+01:00",
            "categories": [
                {
                    "id": "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
                    "title": "Drinks Cabinet",
                    "box_limit": 7,
                    "is_default": false,
                    "recently_added": false,
                    "hidden": false,
                    "pivot": {
                        "created_at": "2017-05-08T13:22:46+01:00"
                    }
                },
                {
                    "id": "785741fc-3854-11e6-87a5-06f9522b85fb",
                    "title": "Large Alcohol",
                    "box_limit": 2,
                    "is_default": false,
                    "recently_added": false,
                    "hidden": true,
                    "pivot": {
                        "created_at": "2017-05-08T13:22:46+01:00"
                    }
                }
            ],
            "tags": [],
            "images": []
        },
        {
            "id": "00a0130e-bfea-11e7-a2c2-0617e74d8914",
            "sku": "AP-FCD-BIS-06",
            "title": "Love Shortie All Butter Shortbread",
            "description": "A rich all butter shortbread, delicately sweet and crumbly with a hint of sea salt, straight out of Scotland. ",
            "list_price": "3.95",
            "is_vatable": false,
            "is_for_sale": true,
            "age_restricted": false,
            "box_limit": 2,
            "always_on_menu": false,
            "created_at": "2017-11-02T16:22:21+00:00",
            "categories": [
                {
                    "id": "17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9",
                    "title": "Snacks",
                    "box_limit": 10,
                    "is_default": false,
                    "recently_added": false,
                    "hidden": false,
                    "pivot": {
                        "created_at": "2017-12-29T14:55:56+00:00"
                    }
                }
            ],
            "tags": [],
            "images": []
        },
        {
            "id": "0126601a-26df-11e8-a736-0239a66a4b36",
            "sku": "AP-ACH-WIN-ROS-04-P",
            "title": "Domaine de L'Olibet 'Les Pujols' Cinsault Rosé",
            "description": "A little gem from Saint Georges d’Orques in the south of France. Delicate, sweet spice aromas lead on to a palate of abundant ripe fruit, lifted by a natural zing and finishing with texture and richness. Full of character. 11.5% ABV [France]",
            "list_price": "9.95",
            "is_vatable": true,
            "is_for_sale": true,
            "age_restricted": true,
            "box_limit": 2,
            "always_on_menu": true,
            "created_at": "2018-03-13T16:53:07+00:00",
            "categories": [
                {
                    "id": "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
                    "title": "Drinks Cabinet",
                    "box_limit": 7,
                    "is_default": false,
                    "recently_added": false,
                    "hidden": false,
                    "pivot": {
                        "created_at": "2018-03-13T16:54:41+00:00"
                    }
                },
                {
                    "id": "785741fc-3854-11e6-87a5-06f9522b85fb",
                    "title": "Large Alcohol",
                    "box_limit": 2,
                    "is_default": false,
                    "recently_added": false,
                    "hidden": true,
                    "pivot": {
                        "created_at": "2018-03-13T16:54:41+00:00"
                    }
                }
            ],
            "tags": [],
            "images": []
        },
        {
            "id": "01e33b6a-0ce7-4065-b4b9-d59de0828240",
            "sku": "G-063",
            "title": "We Are Tea A6 Notes",
            "description": "We Are Tea A6 Notes",
            "list_price": "0.00",
            "is_vatable": false,
            "is_for_sale": false,
            "age_restricted": false,
            "box_limit": null,
            "always_on_menu": false,
            "created_at": "2017-12-22T11:05:52+00:00",
            "categories": [],
            "tags": [
                "gift"
            ],
            "images": []
        }
    ]
});

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .add("default", () => <Accordion products={productsList.data} />);
