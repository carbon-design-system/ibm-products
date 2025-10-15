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
import { prefix } from '../../../globals/settings';

// import styles from './story-styles.scss?lit';

export const Default = {
  args: {
    label: 'Show information',
    buttonProps: {
      id: 'coachmarkBeacon',
      tabindex: 0,
      onClick: () => console.log('click'),
    },
  },

  render: (args) => {
    return html`
      <c4p-coachmark-beacon label=${args.label} buttonProps=${args.buttonProps}>
      </c4p-coachmark-beacon>
    `;
  },
};

const meta = {
  title: 'Components/CoachmarkBeacon',
};

export default meta;
