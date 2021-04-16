//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { BreadcrumbItem } from 'carbon-components-react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { BreadcrumbWithOverflow } from '.';
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(
  pkg,
  BreadcrumbWithOverflow.displayName
);

const blockClass = `${pkg.prefix}--breadcrumb-with-overflow`;

export default {
  title: `${storybookPrefix}/${BreadcrumbWithOverflow.displayName}`,
  component: BreadcrumbWithOverflow,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => <div className={`${blockClass}__story-viewport`}>{story()}</div>,
  ],
  parameters: { styles },
};

const BreadcrumbItems = [
  <BreadcrumbItem key="1">
    <a
      href="/#"
      onClick={(ev) => {
        ev.preventDefault();
        action('Breadcrumb 1 click')();
      }}>
      Breadcrumb 1
    </a>
  </BreadcrumbItem>,
  <BreadcrumbItem
    key="2"
    onClick={(ev) => {
      ev.preventDefault();
      action('Breadcrumb 2 click')();
    }}>
    <a href="/#">Breadcrumb 2</a>
  </BreadcrumbItem>,
  <BreadcrumbItem
    key="3"
    onClick={(ev) => {
      ev.preventDefault();
      action('Breadcrumb 3 click')();
    }}>
    <a href="/#">Breadcrumb 3</a>
  </BreadcrumbItem>,
  <BreadcrumbItem
    key="4"
    onClick={(ev) => {
      ev.preventDefault();
      action('Breadcrumb 4 click')();
    }}>
    <a href="/#">Breadcrumb 4</a>
  </BreadcrumbItem>,
  <BreadcrumbItem
    key="5"
    onClick={(ev) => {
      ev.preventDefault();
      action('Breadcrumb 5 click')();
    }}>
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
