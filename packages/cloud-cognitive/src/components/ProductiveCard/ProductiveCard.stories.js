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
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { ProductiveCard } from '.';
import mdx from './ProductiveCard.mdx';
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
      defaultValue: 4,
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
      onClick: () => {},
      iconDescription: 'Edit',
    },
    {
      id: '2',
      icon: TrashCan16,
      onClick: () => {},
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
  actionIconsPosition: 'bottom',
  primaryButtonText: 'Ghost button',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  ...defaultProps,
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

export const SupplementalBottomBar = Template.bind({});
SupplementalBottomBar.args = {
  ...defaultProps,
  primaryButtonText: 'Ghost button',
};

export const ComplexBottomBar = Template.bind({});
ComplexBottomBar.args = {
  ...defaultProps,
  primaryButtonText: 'Ghost button',
  actionIconsPosition: 'bottom',
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...defaultProps,
  onClick: () => {},
  primaryButtonText: 'Ghost button',
  actionIcons: [],
};
