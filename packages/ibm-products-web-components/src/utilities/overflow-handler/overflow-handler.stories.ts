/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { render } from 'lit-html';
import styles from './story-styles.scss?lit';
import '@carbon/web-components/es/components/tag/index.js';
import '@carbon/web-components/es/components/slider/index.js';

const storyPrefix = 'overflow-handler-stories__';

const getItems = (n: number = 5) => {
  return Array(n)
    .fill(null)
    .map((_, idx) => ({
      label: `item-${idx + 1}`,
    }));
};

const tagTemplate = {
  args: {},
  argTypes: {},
  render: () => {
    let tags = 5;
    let width = 500;
    let items = getItems(tags);

    const getTags = () => {
      return items.map(
        (tag) => html`<cds-tag title=${tag.label}>${tag.label}</cds-tag>`
      );
    };

    const widthHandler = (evt: CustomEvent) => {
      const { value } = evt.detail;
      width = value;
      const slider = document.querySelector('#width-slider');
      slider?.setAttribute('value', value);
      const container = document.querySelector('.annotation') as HTMLElement;
      if (container) {
        container.style.maxWidth = `${width}px`;
      }
    };

    const tagsHandler = (evt: CustomEvent) => {
      const { value } = evt.detail;
      tags = value;
      items = getItems(value);
      const slider = document.querySelector('#tag-slider');
      slider?.setAttribute('value', value);
      const container = document.querySelector('#tag-container') as HTMLElement;
      const newTags = getTags();
      if (container) {
        render(newTags, container);
      }
    };

    return html`
      <style>
        ${styles}
      </style>
      <div class="example">
        <cds-slider
          id="width-slider"
          label-text="Parent container width"
          class="slider"
          max="1000"
          min="200"
          step="1"
          @cds-slider-changed="${widthHandler}"
          value="${width}"
        >
          <cds-slider-input aria-label="Width" type="number"></cds-slider-input>
        </cds-slider>
        <cds-slider
          id="tag-slider"
          label-text="Number of total tags"
          class="slider"
          max="50"
          min="1"
          step="1"
          @cds-slider-changed="${tagsHandler}"
          value="${tags}"
        >
          <cds-slider-input aria-label="Tags" type="number"></cds-slider-input>
        </cds-slider>
        <div class="parent">
          <div class="annotation">
            <div class="annotation__label">Parent container</div>
            <div class="annotation__content">
              <p>Visible items:</p>
              <div id="tag-container">${getTags()}</div>
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

export const WithUserAvatar = {
  ...tagTemplate,
  args: {},
};

export const WithButtons = {
  ...tagTemplate,
  args: {},
};

const meta = {
  title: 'Experimental/Utilities/overflowHandler',
};

export default meta;
