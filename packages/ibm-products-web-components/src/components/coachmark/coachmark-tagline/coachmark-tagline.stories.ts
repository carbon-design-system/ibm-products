/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import styles from './coachmark-tagline.scss?lit';

const args = {
  title: 'This is a tagline',
  closeIconDescription: 'Close',
  open: false,
};

const argTypes = {
  title: {
    control: 'text',
    description: 'The title of the tagline',
  },
  closeIconDescription: {
    control: 'text',
    description: 'Tooltip text and aria label for the Close button icon',
  },
  open: {
    control: 'boolean',
    description: 'Whether the tagline is open',
  },
};

export const Default = {
  args,
  argTypes,
  render: (args: any) => {
    const handleClose = () => {
      console.log('Close button clicked');
      const tagline = document.querySelector('c4p-coachmark-tagline');
      if (tagline) {
        tagline.remove(); // Remove the tagline from DOM when close is clicked
      }
    };

    const handleCtaClick = () => {
      console.log('CTA clicked');
    };

    return html`
      <style>
        ${styles}
      </style>
      <div style="padding: 20px;">
        <c4p-coachmark-tagline
          title="${args.title}"
          close-icon-description="${args.closeIconDescription}"
          ?open="${args.open}"
          @c4p-coachmark-tagline-close="${handleClose}"
          @c4p-coachmark-tagline-cta-click="${handleCtaClick}"
        >
        </c4p-coachmark-tagline>
      </div>
    `;
  },
};

const meta = {
  title: 'Components/Coachmark/CoachmarkTagline',
  parameters: {
    docs: {
      description: {
        component:
          'DO NOT USE. This component is for the exclusive use of other Onboarding components.',
      },
    },
  },
};

export default meta;

// Made with Bob
