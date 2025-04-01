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
    description: 'Text that is displayed under the title',
  },
  title: {
    control: 'text',
    description: 'Text for the title',
  },
  titleId: {
    control: 'text',
    description: 'ID for the title',
  },
};

const toggleOpen = () => {
  const tile = document.querySelector('#my-tile');
  tile?.toggleAttribute('open');
};

const renderTemplate = (args) => {
  const { open, size, summary, title, titleId } = args;
  return html`
    <c4p-options-tile
      id="my-tile"
      ?open=${open}
      size=${size}
      summary=${summary}
      title=${title}
      titleId=${titleId}
      @toggle=${toggleOpen}
    >
      <div slot="toggle">
        <cds-toggle id="my-toggle" size="sm" hideLabel></cds-toggle>
      </div>
      <div slot="body">
        <div>
          <p>Body content</p>
        </div>
      </div>
    </c4p-options-tile>
  `;
};

export const Default = {
  args: {
    open: false,
    size: 'lg',
    title: 'Auto recovery',
    titleId: 'title-01',
    summary: 'Back up every 10min',
  },
  argTypes,
  render: renderTemplate,
};

const meta = {
  title: 'Experimental/OptionsTile',
};

export default meta;
