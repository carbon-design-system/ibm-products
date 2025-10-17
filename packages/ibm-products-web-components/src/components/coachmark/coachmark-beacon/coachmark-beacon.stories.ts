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

export const Default = {
  args: {
    label: 'Show information',
    id: 'coachmarkBeacon',
  },

  render: (args) => {
    return html`
      <c4p-coachmark-beacon
        label=${args.label}
        @c4p-coachmark-beacon-clicked=${(e: CustomEvent) => {
          console.log('Beacon clicked!', e.detail.expanded);
        }}
      >
      </c4p-coachmark-beacon>
    `;
  },
};

const meta = {
  title: 'Components/CoachmarkBeacon',
};

export default meta;
