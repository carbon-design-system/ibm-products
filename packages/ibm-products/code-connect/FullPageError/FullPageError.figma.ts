// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=16334-6720&t=5yzhjTPMSThoAGdh-4
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/FullPageError/FullPageError.tsx
// component=FullPageError

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

const presets: Record<
  string,
  { label: string; title: string; description: string }
> = {
  '403': {
    label: 'Error 403',
    title: 'Access denied',
    description:
      'You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.',
  },
  '404': {
    label: 'Error 404',
    title: 'Page not found',
    description:
      'The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.',
  },
  '408': {
    label: 'Error 408',
    title: 'Request time-out',
    description:
      'The server fails to complete a request within the given time due to increased network activity causing delays.',
  },
  '500': {
    label: 'Error 500',
    title: 'Internal server error',
    description: 'A general error message for undefined server-side issues.',
  },
  '502': {
    label: 'Error 502',
    title: 'Bad gateway',
    description:
      'A gateway or proxy server receives an invalid response from an upstream server.',
  },
  '503': {
    label: 'Error 503',
    title: 'Service unavailable',
    description:
      'A gateway or proxy server receives an invalid response from an upstream server.',
  },
  '504': {
    label: 'Error 504',
    title: 'Gateway timeout',
    description:
      "The server doesn't receive a response from another server within the specified time period.",
  },
};

function createTemplate() {
  const kind = instance.getEnum('Type', {
    Custom: 'custom',
    '403 – Access denied': '403',
    '404 – Page not found': '404',
  });

  const base = instance.findInstance('_FP error content base');
  let label = '';
  let title = '';
  let description = '';
  if (base.type !== 'ERROR') {
    const type = base.getString('Type');
    const preset = presets[type];
    label = preset ? preset.label : base.getString('Error code');
    title = preset ? preset.title : base.getString('Title text');
    description = preset ? preset.description : base.getString('Description');
  }

  return {
    id: 'FullPageError',
    imports: ["import { FullPageError } from '@carbon/ibm-products';"],
    example: figma.code`<FullPageError${figma.helpers.react.renderProp('kind', kind)}
  description="${description}"
  label="${label}"
  title="${title}"
/>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
