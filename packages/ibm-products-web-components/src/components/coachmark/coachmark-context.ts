/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { signal } from '@lit-labs/signals';

interface CoachmarkDetailsType {
  open?: boolean;
  align?: string;
  floating?: boolean;
}

export const coachmarkDetailsSignal = signal<CoachmarkDetailsType>({
  open: false,
  align: 'bottom',
  floating: false,
});

export const resetCoachmarkDetailsSignal = () => {
  coachmarkDetailsSignal.set({
    open: false,
    align: 'bottom',
    floating: false,
  });
};
export const updateCoachmarkDetailsSignal = ({ name, detail }) => {
  if (name === 'open') {
    coachmarkDetailsSignal.set({
      ...coachmarkDetailsSignal.get(),
      open: detail,
    });
  } else if (name === 'align') {
    coachmarkDetailsSignal.set({
      ...coachmarkDetailsSignal.get(),
      align: detail,
    });
  } else if (name === 'floating') {
    coachmarkDetailsSignal.set({
      ...coachmarkDetailsSignal.get(),
      floating: detail,
    });
  }
};
