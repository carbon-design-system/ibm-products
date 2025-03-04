/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import styles from './story-styles.scss?lit';
import '@carbon/web-components/es/components/tag/index.js';

const storyPrefix = 'overflow-handler-stories__';

const getTags = (n: number = 5) => {
  return Array(n)
    .fill(null)
    .map((_, idx) => ({
      label: `tag-${idx + 1}`,
    }));
};

const tagTemplate = {
  args: {},
  argTypes: {},
  render: () => {
    return html`
      <div>
        ${getTags().map(
          (tag) => html`<cds-tag title=${tag.label}>${tag.label}</cds-tag>`
        )}
      </div>
    `;
  },
};

export const WithTags = {
  ...tagTemplate,
  args: {},
};

const meta = {
  title: 'Experimental/Utilities/overflowHandler',
};

export default meta;
