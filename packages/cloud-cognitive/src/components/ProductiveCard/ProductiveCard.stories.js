//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { TrashCan16, Edit16 } from '@carbon/icons-react';
import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { ProductiveCard } from '.';
import mdx from './ProductiveCard.mdx';
const storybookPrefix = getStorybookPrefix(pkg, ProductiveCard.displayName);

export default {
  title: `${storybookPrefix}/${ProductiveCard.displayName}`,
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
  label: 'Label',
  title: 'Title',
  children: (
    <div>
      <div className="graph" />
      <p>Productive content text</p>
      <p>Productive content text</p>
    </div>
  ),
  primaryButtonText: 'Ghost button',
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

export const Productive = Template.bind({});
Productive.args = {
  ...defaultProps,
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
