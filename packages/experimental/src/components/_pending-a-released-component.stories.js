//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import CustomIllustration from './EmptyState/assets/light/error.svg';
import { storybookPrefixReleased as storybookPrefix } from '../../config';

import { EmptyState } from './EmptyState';
import styles from './EmptyState/_index.scss';

export default {
  title: `${storybookPrefix}/Empty just now`,
  component: EmptyState,
  parameters: {
    styles,
  },
};

const Templatex = (args) => {
  return <EmptyState {...args} />;
};

export const Defaultx = Templatex.bind({});
Defaultx.args = {
  heading: "Don't worry there will be lemon soaked paper napkins soon.",
  illustration: CustomIllustration,
  linkText: 'View components in progress instead.',
  linkUrl: '/?path=/story/cloud-cognitive-canary-emptystate--default',
  subtext: (
    <p>
      If you have not read the Hitch Hikers Guide to the Universe, DON&apos;T
      PANIC.
    </p>
  ),
};
