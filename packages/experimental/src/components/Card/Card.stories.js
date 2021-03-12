//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { ArrowRight24, Cloud32, TrashCan16, Edit16 } from '@carbon/icons-react';
import { AspectRatio } from 'carbon-components-react';
import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { Card } from '.';
import mdx from './Card.mdx';
const storybookPrefix = getStorybookPrefix(pkg, Card.displayName);

export default {
  title: `${storybookPrefix}/${Card.displayName}`,
  component: Card,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    columnSize: {
      defaultValue: 'lg-4',
      control: {
        type: 'select',
        options: ['sm-4', 'md-8', 'lg-12', 'max-16'],
      },
    },
    mediaRatio: {
      defaultValue: '1x1',
      control: {
        type: 'select',
        options: ['16x9', '9x16', '2x1', '1x2', '4x3', '3x4', '1x1'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bx--grid card-story">
        <Story />
      </div>
    ),
  ],
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
};

const defaultProductiveProps = {
  productive: true,
  label: 'Label',
  title: 'Title',
  onActionClick: () => {},
  children: (
    <div>
      <div className="graph" />
      <p>Productive content text</p>
      <p>Productive content text</p>
    </div>
  ),
  primaryButtonText: 'Ghost button',
  actionIconsPosition: 'bottom',
  titleSize: 'default',
};

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  const colClasses = cx(`bx--col-${columnSize}`);
  return (
    <div className="bx--row">
      <div className={colClasses}>
        <Card {...args}>{children}</Card>
      </div>
    </div>
  );
};

const MediaTemplate = (opts) => {
  const { children, columnSize, mediaRatio, ...args } = opts;
  const colClasses = cx(`bx--col-${columnSize}`);
  return (
    <div className="bx--row">
      <div className={colClasses}>
        <Card
          media={<AspectRatio ratio={mediaRatio}>{mediaRatio}</AspectRatio>}
          {...args}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  ...defaultProps,
  title: '',
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...defaultProps,
  caption: 'Description or long caption',
  label: '',
};

export const WithMedia = MediaTemplate.bind({});
WithMedia.args = {
  ...defaultProps,
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  ...defaultProps,
  actionIcons: [
    {
      id: '1',
      icon: <ArrowRight24 onClick={() => {}} />,
    },
  ],
  primaryButtonText: '',
};

export const WithPictogram = Template.bind({});
WithPictogram.args = {
  ...defaultProps,
  pictogram: Cloud32,
};

export const WithSecondaryAction = Template.bind({});
WithSecondaryAction.args = {
  ...defaultProps,
  secondaryButtonText: 'Secondary',
  secondaryButtonKind: 'ghost',
  columnSize: 'md-4',
};

export const ClickableCardWithOnclick = Template.bind({});
ClickableCardWithOnclick.args = {
  ...defaultProps,
  onClick: () => {},
  primaryButtonText: '',
};

export const Productive = Template.bind({});
Productive.args = {
  ...defaultProductiveProps,
  actionIcons: [
    {
      id: '1',
      icon: <Edit16 onClick={() => {}} />,
    },
    {
      id: '2',
      icon: <TrashCan16 onClick={() => {}} />,
    },
  ],
};

export const ProductiveOverflow = Template.bind({});
ProductiveOverflow.args = {
  ...defaultProductiveProps,
  overflowActions: [
    {
      id: '1',
      itemText: 'Edit',
      onClick: () => {},
    },
    {
      id: '2',
      itemText: 'Delete',
      onClick: () => {},
    },
  ],
};
