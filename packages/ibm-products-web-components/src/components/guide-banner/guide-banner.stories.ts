/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { fn } from 'storybook/test';
import './index';
import styles from './story-styles.scss?lit';

const argTypes = {};

const blockClass = 'guide-banner-story';

const renderTemplate = (args) => {
  const {
    '@c4p-guidebanner-ontoggle': handleToggle,
    '@c4p-guidebanner-onclose': handleOnClose,
    collapseText,
    expandText,
    titleText,
    open,
  } = args;
  return html`
    <style>
      ${styles}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${handleToggle}
      @c4p-guidebanner-close=${handleOnClose}
      class=${blockClass}
      collapseText=${collapseText}
      expandText=${expandText}
      ?open=${open}
      titleText=${titleText}
    >
      <div slot="body">
        <div class="body-container">
          <c4p-guide-banner-element class="body-elm">
            <p>example body content</p>
          </c4p-guide-banner-element>
          <c4p-guide-banner-element class="body-elm">
            <p>example body content</p>
          </c4p-guide-banner-element>
          <c4p-guide-banner-element class="body-elm">
            <p>example body content</p>
          </c4p-guide-banner-element>
        </div>
      </div>
    </c4p-guide-banner>
  `;
};

export const Default = {
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: 'Page-related heading that can stand on its own',
    open: true,
  },
  argTypes,
  render: renderTemplate,
};

const meta = {
  title: 'Components/GuideBanner',
};

export default meta;
