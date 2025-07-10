/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import '@carbon/web-components/es/components/toggle/index.js';

const argTypes = {
  body: {
    control: 'text',
    description: 'Slot body content',
  },
  open: {
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

const handleOpen = (evt: Event) => {
  const tile = document.querySelector('#my-tile');
  tile?.setAttribute('open', 'true');
};

const handleClose = (evt: Event) => {
  const tile = document.querySelector('#my-tile');
  tile?.removeAttribute('open');
};

const renderTemplate = (args) => {
  const { open, size, titleText, titleId } = args;
  return html`
    <c4p-options-tile
      id="my-tile"
      ?open=${open}
      size=${size}
      titleId=${titleId}
      titleText=${titleText}
      @c4p-options-tile-open=${handleOpen}
      @c4p-options-tile-close=${handleClose}
    >
      <div slot="summary">
        <span>${args.summary}</span>
      </div>
      <div slot="toggle">
        <cds-toggle id="my-toggle" size="sm" hideLabel></cds-toggle>
      </div>
      <div slot="body">${args.body}</div>
    </c4p-options-tile>
  `;
};

export const Default = {
  args: {
    body: 'Body content',
    open: false,
    size: 'lg',
    summary: 'Back up every 10min',
    titleId: 'title-01',
    titleText: 'Auto recovery',
  },
  argTypes,
  render: renderTemplate,
};

const meta = {
  title: 'Components/OptionsTile',
};

export default meta;
