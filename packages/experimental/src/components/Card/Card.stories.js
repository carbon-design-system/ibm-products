//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Card } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './Card.mdx';
import { ArrowRight24, Cloud32 } from '@carbon/icons-react';
import {
  storybookPrefixCanary as storybookPrefix /* , storybookPrefixReleased */,
} from '../../../config';

export default {
  title: `${storybookPrefix}/Card`,
  component: Card,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  label: 'Label',
  title: 'Title',
  onActionClick: () => {},
  children: (
    <p>
      expressive card body content block. description inviting the user to take
      action on the card.
    </p>
  ),
  primaryButtonText: 'Primary',
  cols: 4,
};

const Template = (opts) => {
  const { children, cols, ...args } = opts;
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className={`bx--col-lg-${cols}`}>
          <Card {...args}>{children}</Card>
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  media: <img src="https://via.placeholder.com/300x200/000/fff" alt="img" />,
};

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  ...defaultProps,
  mediaPosition: 'left',
  media: <img src="https://via.placeholder.com/400x300/000/fff" alt="img" />,
  cols: 12,
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  ...defaultProps,
  actionIcon: ArrowRight24,
  primaryButtonText: '',
};

export const WithPictogram = Template.bind({});
WithPictogram.args = {
  ...defaultProps,
  pictogram: Cloud32,
};

export const WithSeondaryAction = Template.bind({});
WithSeondaryAction.args = {
  ...defaultProps,
  secondaryButtonText: 'Secondary',
  secondaryButtonKind: 'secondary',
  cols: 8,
};

export const ClickableCardWithOnclick = Template.bind({});
ClickableCardWithOnclick.args = {
  ...defaultProps,
  onClick: () => {},
  primaryButtonText: '',
};

export const ClickableCardWithLink = Template.bind({});
ClickableCardWithLink.args = {
  ...defaultProps,
  href: '/',
  primaryButtonText: '',
};
