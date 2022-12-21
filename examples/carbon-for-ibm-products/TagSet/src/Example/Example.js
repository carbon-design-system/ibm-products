import React from "react";

import "./_example.scss";

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import { TagSet } from "@carbon/ibm-products";
import { DisplayBox } from "../components/DisplayBox";

const tagTypes = Object.keys({
  red: "Red",
  magenta: "Magenta",
  purple: "Purple",
  blue: "Blue",
  cyan: "Cyan",
  teal: "Teal",
  green: "Green",
  gray: "Gray",
  "cool-gray": "Cool-Gray",
  "warm-gray": "Warm-Gray",
  "high-contrast": "High-Contrast",
  outline: "Outline"
});

console.log(tagTypes);

const tags = [];
for (let i = 0; i < 200; i++) {
  const label = `Label_${i + 1}`;
  const type = tagTypes[i % tagTypes.length];

  tags.push({ type, label });
}

export const Example = () => (
  <>
    <DisplayBox componentName={TagSet.displayName}>
      <TagSet
        tags={tags}
        allTagsModalSearchLabel='Filter tags'
        allTagsModalTitle='All tags'
        allTagsModalSearchPlaceholderText='Filter tags'
        showAllTagsLabel='Show all tags'
      />
    </DisplayBox>
  </>
);
