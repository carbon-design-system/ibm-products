//cspell: disable
/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import { prefix } from '../../globals/settings';
import styles from './story-styles.scss?lit';

// import styles from './story-styles.scss?lit';
import { BUTTON_KIND } from '@carbon/web-components/es/components/button/defs.js';

const storyPrefix = 'side-panel-stories__';

const defaultTemplate = {
  args: {
    class: 'custom-class',
    label: 'Error ###',
    title: '[Error title]',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    kind: 'custom',
  },
  argTypes: {
    kind: {
      control: {
        type: 'select',
      },
      options: ['403', '404', 'custom'],
    },
  },
  render: (args) => {
    const { label, class: className, title, description, kind } = args;

    return html`<c4p-full-page-error
      label=${label}
      class=${className}
      title=${title}
      description=${description}
      kind=${kind}
    >
      <a class="cds--link" href="#">– Forwarding link 1</a>
      <br />
      <a class="cds--link" href="#">– Forwarding link 2</a>
    </c4p-full-page-error>`;
  },
};

export const Default = {
  ...defaultTemplate,
};

const meta = {
  title: 'Experimental/FullPageError',
};

export default meta;
