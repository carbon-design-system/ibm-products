//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import { PageHeader } from '.';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

import { BreadcrumbItem } from 'carbon-components-react';

import { Lightning20 } from '@carbon/icons-react';

import { ActionBar } from './ActionBar';

export default {
  title: 'Experimental/PageHeader',
  component: PageHeader,
  parameters: { styles, layout: 'fullscreen' },
};

const breadcrumbItems = [
  { label: 'Homepage', href: '/' },
  { label: 'Secondary page', href: '/secondary' },
];

const Template = (args) => {
  return (
    <PageHeader
      className="fish cake"
      {...args}
      breadcrumbItems={breadcrumbItems.map((item, index) => {
        return (
          <BreadcrumbItem href={item.href} key={`${index}-${item.label}`}>
            {item.label}
          </BreadcrumbItem>
        );
      })}
      actionBar={
        <ActionBar
          actions={[
            {
              description: 'Action 1',
              icon: Lightning20,
              handleClick: () => {
                console.log('click 1');
              },
            },
            {
              description: 'Action 2',
              icon: Lightning20,
              handleClick: () => {
                console.log('click 2');
              },
            },
          ]}
        />
      }
    />
  );
};

export const Minimal = Template.bind({});
Minimal.args = {};

export const Background = Template.bind({});
Background.args = {
  background: true,
};
