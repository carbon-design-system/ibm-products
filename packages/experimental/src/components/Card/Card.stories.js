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
import { ArrowRight24 } from '@carbon/icons-react';

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
  onActionSubmit: () => {},
  children: (
    <p>
      expressive card body content block. description inviting the user to take
      action on the card.
    </p>
  ),
  mediaUrl: 'https://via.placeholder.com/400x300/000/fff',
  mediaAltText: 'alt text',
};

const Template = (opts) => {
  const { children, ...args } = opts;
  return (
    <div className="card-demo-container">
      <Card {...args}>{children}</Card>
    </div>
  );
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  ...defaultProps,
  actionButtonText: 'Primary button',
};

export const ActionIcon = Template.bind({});
ActionIcon.args = {
  ...defaultProps,
  actionIcon: ArrowRight24,
};

export const ClickableWithFunction = Template.bind({});
ClickableWithFunction.args = {
  ...defaultProps,
  onClick: () => {},
};

export const ClickableWithLink = Template.bind({});
ClickableWithLink.args = {
  ...defaultProps,
  href: '/',
};
