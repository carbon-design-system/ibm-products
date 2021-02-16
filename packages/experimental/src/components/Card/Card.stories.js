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

export default {
  title: 'Experimental/Card',
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
  actionButtonText: 'Primary button',
};

const Template = (opts) => {
  const { children, ...args } = opts;
  return (
    <div className="card-demo-container">
      <Card {...args}>{children}</Card>
    </div>
  );
};

const TemplateWide = (opts) => {
  const { children, ...args } = opts;
  return (
    <div className="card-demo-container--wide">
      <Card {...args}>{children}</Card>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  media: <img src="https://via.placeholder.com/300x200/000/fff" alt="img" />,
};

export const MediaLeft = TemplateWide.bind({});
MediaLeft.args = {
  ...defaultProps,
  mediaPosition: 'left',
  media: <img src="https://via.placeholder.com/300x225/000/fff" alt="img" />,
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  ...defaultProps,
  actionIcon: ArrowRight24,
  actionButtonText: '',
};

export const WithPictogram = Template.bind({});
WithPictogram.args = {
  ...defaultProps,
  pictogram: Cloud32,
};

export const ClickableCardWithOnclick = Template.bind({});
ClickableCardWithOnclick.args = {
  ...defaultProps,
  onClick: () => {},
  actionButtonText: '',
};

export const ClickableCardWithLink = Template.bind({});
ClickableCardWithLink.args = {
  ...defaultProps,
  href: '/',
  actionButtonText: '',
};
