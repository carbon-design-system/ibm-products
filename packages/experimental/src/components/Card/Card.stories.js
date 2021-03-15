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
    actionIconsPosition: {
      defaultValue: 'bottom',
      control: {
        type: 'select',
        options: ['bottom', 'top'],
      },
    },
    columnSize: {
      defaultValue: 4,
      control: {
        type: 'select',
        options: [4, 8, 12, 16],
      },
    },
    mediaPosition: {
      defaultValue: 'top',
      control: {
        type: 'select',
        options: ['top', 'left'],
      },
    },
    mediaRatio: {
      defaultValue: '1x1',
      control: {
        type: 'select',
        options: ['16x9', '9x16', '2x1', '1x2', '4x3', '3x4', '1x1'],
      },
    },
    primaryButtonKind: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'ghost'],
      },
    },
    secondaryButtonKind: {
      defaultValue: 'secondary',
      control: {
        type: 'select',
        options: ['secondary', 'ghost'],
      },
    },
    titleSize: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['default', 'large'],
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
  caption: '',
  label: 'Label',
  title: 'Title',
};

const expressiveProps = {
  ...defaultProps,
  children: (
    <p>
      expressive card body content block. description inviting the user to take
      action on the card.
    </p>
  ),
  primaryButtonText: 'Primary',
};

const productiveProps = {
  ...defaultProps,
  actionIconsPosition: 'bottom',
  children: (
    <div>
      <div className="graph" />
      <p>Productive content text</p>
      <p>Productive content text</p>
    </div>
  ),
  primaryButtonText: 'Ghost button',
  productive: true,
  titleSize: 'default',
};

const getColClasses = (col) => cx(`bx--col-lg-${col}`);

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  return (
    <div className="bx--row">
      <div className={getColClasses(columnSize)}>
        <Card {...args}>{children}</Card>
      </div>
    </div>
  );
};

const MediaTemplate = (opts) => {
  const { children, columnSize, mediaRatio, ...args } = opts;
  return (
    <div className="bx--row">
      <div className={getColClasses(columnSize)}>
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
  ...expressiveProps,
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  ...expressiveProps,
  title: '',
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...expressiveProps,
  caption: 'Description or long caption',
  label: '',
};

export const WithMedia = MediaTemplate.bind({});
WithMedia.args = {
  ...expressiveProps,
};

export const WithActionIcon = Template.bind({});
WithActionIcon.args = {
  ...expressiveProps,
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
  ...expressiveProps,
  pictogram: Cloud32,
};

export const WithSecondaryAction = Template.bind({});
WithSecondaryAction.args = {
  ...expressiveProps,
  secondaryButtonText: 'Secondary',
  secondaryButtonKind: 'ghost',
  columnSize: '8',
};

export const ClickableCardWithOnclick = Template.bind({});
ClickableCardWithOnclick.args = {
  ...expressiveProps,
  onClick: () => {},
  primaryButtonText: '',
};

export const Productive = Template.bind({});
Productive.args = {
  ...productiveProps,
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
  ...productiveProps,
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
