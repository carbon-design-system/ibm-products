//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { TrashCan16, Edit16 } from '@carbon/icons-react';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { ProductiveCard } from '.';
import mdx from './ProductiveCard.mdx';
import { action } from '@storybook/addon-actions';
const storybookPrefix = getStorybookPrefix(pkg, ProductiveCard.displayName);

export default {
  title: `${storybookPrefix}/Cards/${ProductiveCard.displayName}`,
  component: ProductiveCard,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    columnSize: {
      control: {
        type: 'select',
        options: [4, 8, 12, 16],
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
  title: 'Title',
  columnSize: 4,
  children: (
    <>
      <div className="graph" />
      <p>Productive content text</p>
      <p>Productive content text</p>
    </>
  ),
  actionIcons: [
    {
      id: '1',
      icon: Edit16,
      onClick: () => action('on click'),
      onKeyDown: () => action('on keydown'),
      iconDescription: 'Edit',
    },
    {
      id: '2',
      icon: TrashCan16,
      onClick: () => action('on click'),
      onKeyDown: () => action('on keydown'),
      iconDescription: 'Delete',
    },
  ],
};

const getColClasses = (col) => cx(`bx--col-lg-${col}`);

const Template = (opts) => {
  const { children, columnSize, ...args } = opts;
  return (
    <div className="bx--row">
      <div className={getColClasses(columnSize)}>
        <ProductiveCard {...args}>{children}</ProductiveCard>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...defaultProps,
  caption: 'caption',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultProps,
  label: 'Label',
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  ...defaultProps,
  title: '',
  label: 'Label',
  actionsPlacement: 'bottom',
  primaryButtonText: 'Ghost button',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  ...defaultProps,
  overflowActions: [
    {
      id: '1',
      itemText: 'Edit',
      onClick: () => action('on click'),
      onKeyDown: () => action('on keydown'),
    },
    {
      id: '2',
      itemText: 'Delete',
      onClick: () => action('on click'),
      onKeyDown: () => action('on keydown'),
    },
  ],
};

export const SupplementalBottomBar = Template.bind({});
SupplementalBottomBar.args = {
  ...defaultProps,
  primaryButtonText: 'Ghost button',
};

export const ComplexBottomBar = Template.bind({});
ComplexBottomBar.args = {
  ...defaultProps,
  primaryButtonText: 'Ghost button',
  actionsPlacement: 'bottom',
  title: '',
  label: 'label',
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...defaultProps,
  onClick: () => action('on click'),
  onKeyDown: () => action('on keydown'),
  primaryButtonText: 'Ghost button',
  actionIcons: [],
};
