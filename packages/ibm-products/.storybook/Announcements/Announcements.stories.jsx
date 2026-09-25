/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_release-notes-styles.scss?inline';
import tocStyles from '../Toc/_toc.scss?inline';
import ReleaseNotes from './ReleaseNotes';
import Announcements from './Announcements';

export default {
  title: 'Overview/Announcements',
  parameters: {
    styles: `${styles}\n${tocStyles}`,
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
    chromatic: { disableSnapshot: true },
  },
};

export const Announcements1 = () => <ReleaseNotes />;
Announcements1.storyName = 'Announcements 1';
export const Announcements2 = () => <Announcements />;
Announcements2.storyName = 'Announcements 2';

// Made with Bob
