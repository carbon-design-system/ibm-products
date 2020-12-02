//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import { BreadcrumbWithOverflow } from '.';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { BreadcrumbItem } from 'carbon-components-react';

import { expPrefix } from '../../global/js/settings';
const blockClass = `${expPrefix}-breadcrumb-with-overflow`;

export default {
  title: 'Experimental/BreadcrumbWithOverflow',
  component: BreadcrumbWithOverflow,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 50, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => (
      <div className={`${blockClass}--story__viewport`}>{story()}</div>
    ),
  ],
  parameters: { styles },
};

const BreadcrumbItems = [
  <BreadcrumbItem key="1">
    <a href="/#">Breadcrumb 1</a>
  </BreadcrumbItem>,
  <BreadcrumbItem key="2">
    <a href="/#">Breadcrumb 2</a>
  </BreadcrumbItem>,
  <BreadcrumbItem key="3">
    <a href="/#">Breadcrumb 3</a>
  </BreadcrumbItem>,
  <BreadcrumbItem key="4">
    <a href="/#">Breadcrumb 4</a>
  </BreadcrumbItem>,
  <BreadcrumbItem key="5">
    <a href="/#">Breadcrumb 5</a>
  </BreadcrumbItem>,
];

const Template = (argsIn) => {
  const { children, containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <BreadcrumbWithOverflow {...args}>{children}</BreadcrumbWithOverflow>
    </div>
  );
};

export const BreadcrumbItemArray = Template.bind({});
BreadcrumbItemArray.args = {
  children: BreadcrumbItems,
  containerWidth: 500,
};

// export const ManyTags = Template.bind({});
// ManyTags.args = {
//   children: BreadcrumbItems,
//   containerWidth: 500,
// };
