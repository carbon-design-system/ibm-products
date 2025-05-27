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
import { createOverflowHandler } from '@carbon/utilities';

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
    let width = 750;
    let handler;

    document.addEventListener('DOMContentLoaded', () => {
      const visibleContainer = document.querySelector(
        '#visible-tags'
      ) as HTMLElement;
      const hiddenContainer = document.querySelector(
        '#hidden-tags'
      ) as HTMLElement;
      handler = createOverflowHandler({
        container: visibleContainer,
        onChange: (visible, hidden) => {
          render(visible, visibleContainer);
          render(hidden, hiddenContainer);
        },
      });
    });

    const getTags = () => {
      return getItems(10).map(
        (tag) => html`<cds-tag title=${tag.label}>${tag.label}</cds-tag>`
      );
    };

    const widthHandler = (evt: CustomEvent) => {
      const { value } = evt.detail;
      width = value;
      const slider = document.querySelector('#width-slider');
      slider?.setAttribute('value', value);
      const container = document.querySelector('#visible-tags') as HTMLElement;
      if (container) {
        container.style.width = `${width}px`;
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
        <div class="parent" style="width:${width}px">
          <div id="visible-tags">
            <cds-tag title="1">1</cds-tag>
            <cds-tag title="2">2</cds-tag>
            <cds-tag title="3">3</cds-tag>
            <cds-tag title="4">4</cds-tag>
            <cds-tag title="5">5</cds-tag>
            <cds-tag title="6">6</cds-tag>
            <cds-tag title="7">7</cds-tag>
            <cds-tag title="8">8</cds-tag>
            <cds-tag title="9">9</cds-tag>
            <cds-tag title="10000">10000</cds-tag>
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
