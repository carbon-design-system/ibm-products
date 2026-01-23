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

import { BUTTON_KIND } from '@carbon/web-components/es/components/button/defs.js';

const argTypes = {
  kind: {
    control: {
      type: 'select',
    },
    options: ['403', '404', 'custom'],
  },
};

export const Default = {
  args: {
    class: 'custom-class',
    label: 'Error ###',
    title: '[Error title]',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    kind: 'custom',
  },
  argTypes,
  render: (args) => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=${args.label}
          class=${args.class}
          title=${args.title}
          description=${args.description}
          kind=${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `;
  },
};
export const Error403 = {
  args: {
    class: 'custom-class',
    title: 'Access denied',
    label: 'Error 403',
    description:
      'You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.',
    kind: '403',
  },
  argTypes,
  render: (args) => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=${args.label}
          class=${args.class}
          title=${args.title}
          description=${args.description}
          kind=${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `;
  },
};

export const Error404 = {
  args: {
    title: 'Page not found',
    label: 'Error 404',
    description:
      'The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.',
    kind: '404',
    class: 'custom-class',
  },
  argTypes,
  render: (args) => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <div class="full-page-error-stories__story-header"></div>
        <c4p-full-page-error
          label=${args.label}
          class=${args.class}
          title=${args.title}
          description=${args.description}
          kind=${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `;
  },
};

const meta = {
  title: 'Components/FullPageError',
  component: 'c4p-full-page-error',
};

export default meta;
