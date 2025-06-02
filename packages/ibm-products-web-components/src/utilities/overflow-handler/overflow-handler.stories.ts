/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import styles from './story-styles.scss?lit';
import '@carbon/web-components/es/components/tag/index.js';
import '@carbon/web-components/es/components/slider/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '../../components/user-avatar/index.js';
import { createOverflowHandler } from '@carbon/utilities';

const storyPrefix = 'overflow-handler-stories__';

const argTypes = {
  dimension: {
    control: 'select',
    options: ['width', 'height'],
  },
  variant: {
    table: {
      disable: true,
    },
  },
  onChange: { action: 'onChange' },
};

const makeItems = (n: number = 5) => {
  return Array(n)
    .fill(null)
    .map((_, idx) => ({
      label: `item ${idx + 1}`,
    }));
};

const renderTemplate = (args) => {
  const { variant, dimension, maxVisibleItems, onChange } = args;
  let width = 1000;
  let handler;

  const initializeHandler = () => {
    if (handler) {
      console.log('handler found. removing ...');
      document.removeEventListener('DOMContentLoaded', initializeHandler);
      handler.disconnect();
      return;
    }
    const visibleContainer = document.querySelector(
      '#visible-items'
    ) as HTMLElement;
    // initiate the handler only when the dom settles and is stable, so that the items are at right dimensions before initialization.
    requestAnimationFrame(() => {
      handler = createOverflowHandler({
        container: visibleContainer,
        onChange: (visible, hidden) => {
          onChange({ visible, hidden });
        },
        dimension,
        maxVisibleItems,
      });
    });
  };

  document.addEventListener('DOMContentLoaded', initializeHandler);

  const makeTags = () => {
    return makeItems(10).map(
      (item) =>
        html`<span
          ><cds-tag type="blue" title=${item.label}
            >${item.label}</cds-tag
          ></span
        >`
    );
  };

  const makeButtons = () => {
    return makeItems(10).map(
      (item) => html`<span><cds-button>${item.label}</cds-button></span>`
    );
  };

  const makeUserAvatars = () => {
    return makeItems(10).map(
      (item) => html`<span><c4p-user-avatar></c4p-user-avatar></span>`
    );
  };

  const widthHandler = (evt: CustomEvent) => {
    const { value } = evt.detail;
    width = value;
    const slider = document.querySelector('#width-slider');
    slider?.setAttribute('value', value);
    const container = document.querySelector('.parent') as HTMLElement;
    if (container) {
      container.style.width = `${width}px`;
    }
  };

  const getBody = () => {
    if (variant === 'button') {
      return makeButtons();
    }
    if (variant === 'user avatar') {
      return makeUserAvatars();
    }
    return makeTags();
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
      <div class="parent">
        <div class="annotation">
          <div class="annotation__label">Parent container</div>
          <div class="annotation__content">
            <p>Visible items:</p>
            <div id="visible-items">${getBody()}</div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const defaultProps = {
  maxVisibleItems: 10,
  dimension: 'width',
};

export const WithTags = {
  args: {
    ...defaultProps,
    variant: 'tag',
  },
  argTypes,
  render: renderTemplate,
};

export const WithUserAvatar = {
  args: {
    ...defaultProps,
    variant: 'user avatar',
  },
  argTypes,
  render: renderTemplate,
};

export const WithButtons = {
  args: {
    ...defaultProps,
    variant: 'button',
  },
  argTypes,
  render: renderTemplate,
};

const meta = {
  title: 'Experimental/Utilities/overflowHandler',
};

export default meta;
