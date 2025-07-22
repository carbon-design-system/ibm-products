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
import styles from './story-styles.scss?lit';
import mdx from './full-page-error.mdx';
import CDSFullPageError from './full-page-error';

import { BUTTON_KIND } from '@carbon/web-components/es/components/button/defs.js';

const storyPrefix = 'full-page-error-stories__';

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

    return html`
      <style>
        ${styles}
      </style>
      <div class="${storyPrefix}story-container">
        <div class="${storyPrefix}story-header"></div>
        <c4p-full-page-error
          label=${label}
          class=${className}
          title=${title}
          description=${description}
          kind=${kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `;
  },
};

export const Default = {
  ...defaultTemplate,
};

export const Error403 = {
  ...defaultTemplate,
  args: {
    title: 'Access denied',
    label: 'Error 403',
    description:
      'You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.',
    kind: '403',
  },
};

export const Error404 = {
  ...defaultTemplate,
  args: {
    title: 'Page not found',
    label: 'Error 404',
    description:
      'The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.',
    kind: '404',
  },
};

const meta = {
  title: 'Components/FullPageError',
  component: 'c4p-full-page-error',
};

export default meta;
