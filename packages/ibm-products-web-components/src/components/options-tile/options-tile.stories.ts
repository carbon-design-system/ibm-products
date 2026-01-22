/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { fn } from 'storybook/test';
import './index';
import '@carbon/web-components/es/components/toggle/index.js';
import '@carbon/web-components/es/components/dropdown/index.js';
import styles from './story-styles.scss?lit';

const argTypes = {
  body: {
    control: 'text',
    description: 'Slot body content',
  },
  defaultOpen: {
    control: 'boolean',
    description: 'If `true` the body of the component is shown',
  },
  size: {
    control: 'radio',
    options: ['lg', 'xl'],
    description: 'Determines the size of the header',
  },
  summary: {
    control: 'text',
    description: 'Slot text that is displayed under the title',
  },
  titleId: {
    control: 'text',
    description: 'ID for the title',
  },
  titleText: {
    control: 'text',
    description: 'Text for the title',
  },
};

const blockClass = 'options-tile';

export const Default = {
  args: {
    defaultOpen: false,
    size: 'lg',
    titleId: 'title-01',
    titleText: 'Language',
  },
  argTypes,
  render: (args) => {
    return html`
      <style>
        ${styles}
      </style>
      <c4p-options-tile
        class=${blockClass}
        ?defaultOpen=${args.defaultOpen}
        id="my-tile"
        size=${args.size}
        titleId=${args.titleId}
        titleText=${args.titleText}
        @c4p-options-tile-open=${console.log('open option tile')}
        @c4p-options-tile-close=${console.log('close option tile')}
      >
        <div slot="summary">
          <span>English | Locale: English</span>
        </div>
        <div slot="toggle">
          <cds-toggle id="my-toggle" size="sm" hideLabel></cds-toggle>
        </div>
        <div slot="body">
          <div class=${`${blockClass}__body`}>
            <p>
              User interface defines the language the application is displayed
              in. Locale sets the regional display formats for information like
              time, date, currency and decimal delimiters.
            </p>
            <div class=${`${blockClass}__dropdown`}>
              <cds-dropdown title-text="User interface" label="User interface">
                <cds-dropdown-item value="option-0">English</cds-dropdown-item>
              </cds-dropdown>
            </div>
            <div class=${`${blockClass}__dropdown`}>
              <cds-dropdown title-text="Locale" label="Locale">
                <cds-dropdown-item value="option-0">English</cds-dropdown-item>
              </cds-dropdown>
            </div>
          </div>
        </div>
      </c4p-options-tile>
    `;
  },
};

const meta = {
  title: 'Components/OptionsTile',
};

export default meta;
