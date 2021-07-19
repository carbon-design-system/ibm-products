//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import { BreadcrumbItem } from 'carbon-components-react';

import { pkg } from '../../settings';
import { BreadcrumbWithOverflow } from '.';
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(
  pkg,
  BreadcrumbWithOverflow.displayName
);

export default {
  title: `${storybookPrefix}/${BreadcrumbWithOverflow.displayName}`,
  component: BreadcrumbWithOverflow,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => <div className={`ccs-sb__display-box`}>{story()}</div>,
  ],
};

const breadcrumbItems = [
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
];

const stdBreadcrumbItems = (current) =>
  breadcrumbItems.concat([
    <BreadcrumbItem
      key="5"
      onClick={(ev) => {
        ev.preventDefault();
        action('Breadcrumb 5 click')();
      }}
      isCurrentPage={current}>
      <a href="/#">
        Breadcrumb 5 is a longer breadcrumb it could go on for much longer than
        expected
      </a>
    </BreadcrumbItem>,
  ]);

const Template = (argsIn) => {
  const { children, containerWidth, ...args } = { ...argsIn };

  return (
    <div style={{ width: containerWidth }}>
      <BreadcrumbWithOverflow {...args}>{children}</BreadcrumbWithOverflow>
    </div>
  );
};

export const BreadcrumbLastCurrent = Template.bind({});
BreadcrumbLastCurrent.args = {
  children: stdBreadcrumbItems(true),
  containerWidth: 500,
  overflowAriaLabel: 'Open and close additional breadcrumb item list.',
};

export const BreadcrumbLastNotCurrent = Template.bind({});
BreadcrumbLastNotCurrent.args = {
  children: stdBreadcrumbItems(false),
  containerWidth: 500,
  overflowAriaLabel: 'Open and close additional breadcrumb item list.',
};

export const BreadcrumbWithDataTitle = Template.bind({});
BreadcrumbWithDataTitle.args = {
  children: breadcrumbItems.concat([
    <BreadcrumbItem
      key="5"
      onClick={(ev) => {
        ev.preventDefault();
        action('Breadcrumb 5 click')();
      }}
      data-title="An alternative title"
      isCurrentPage={true}>
      <a href="/#">
        Breadcrumb 5 is a longer breadcrumb it could go on for much longer than
        expected
      </a>
    </BreadcrumbItem>,
  ]),
  containerWidth: 500,
  overflowAriaLabel: 'Open and close additional breadcrumb item list.',
};

export const BreadcrumbWithTitle = Template.bind({});
BreadcrumbWithTitle.args = {
  children: breadcrumbItems.concat([
    <BreadcrumbItem
      key="5"
      onClick={(ev) => {
        ev.preventDefault();
        action('Breadcrumb 5 click')();
      }}
      title="A use of the standard title attribute"
      isCurrentPage={true}>
      <a href="/#">
        Breadcrumb 5 is a longer breadcrumb it could go on for much longer than
        expected
      </a>
    </BreadcrumbItem>,
  ]),
  containerWidth: 500,
  overflowAriaLabel: 'Open and close additional breadcrumb item list.',
};
