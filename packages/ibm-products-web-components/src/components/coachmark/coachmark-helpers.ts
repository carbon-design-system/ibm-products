/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';

export const handleClick = () => {
  const coachmark = document.querySelector('c4p-coachmark');
  coachmark?.toggleAttribute('open');
};

export const handleDone = () => {
  document.querySelector(`${prefix}-coachmark`)?.removeAttribute('open');
};

// Listen for coachmark-opened event to focus the Done button
export const handleCoachmarkOpened = () => {
  setTimeout(() => {
    const doneButton = document.querySelector('.coachmark-body cds-button');
    (doneButton as HTMLElement)?.focus();
  }, 100);
};
