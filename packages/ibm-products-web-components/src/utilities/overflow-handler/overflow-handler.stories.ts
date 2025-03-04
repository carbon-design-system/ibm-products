/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import styles from './story-styles.scss?lit';
import '@carbon/web-components/es/components/tag/index.js';
import '@carbon/web-components/es/components/slider/index.js';

const storyPrefix = 'overflow-handler-stories__';

const getTags = (n: number = 5) => {
  return Array(n)
    .fill(null)
    .map((_, idx) => ({
      label: `tag-${idx + 1}`,
    }));
};

const tagTemplate = {
  args: {},
  argTypes: {},
  render: () => {
    const width = 500;
    const tags = 5;
    const widthHandler = (evt) => {
      // todo
    };
    const tagsHandler = (evt) => {
      // todo
    };
    return html`
      <style>
        ${styles}
      </style>
      <div class="example">
        <cds-slider
          label-text="Parent container width"
          class="slider"
          max="1000"
          min="200"
          step="1"
          @cds-slider-changed="${widthHandler}"
          value="${width}"
        ></cds-slider>
        <cds-slider
          label-text="Number of total tags"
          class="slider"
          max="50"
          min="1"
          step="1"
          @cds-slider-changed="${tagsHandler}"
          value="${tags}"
        ></cds-slider>
        <div class="parent">
          <div class="annotation">
            <div class="annotation__label">Parent container</div>
            <div class="annotation__content">
              <p>Visible items:</p>
              ${getTags().map(
                (tag) =>
                  html`<cds-tag title=${tag.label}>${tag.label}</cds-tag>`
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export const WithTags = {
  ...tagTemplate,
  args: {},
};

const meta = {
  title: 'Experimental/Utilities/overflowHandler',
};

export default meta;
