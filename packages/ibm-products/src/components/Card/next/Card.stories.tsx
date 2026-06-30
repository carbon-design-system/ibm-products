/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Card, Header, Body, Footer } from './';
import { Button } from '@carbon/react';
import './_storybook-styles.scss';

export default {
  title: 'Preview/Card',
  component: Card,
  subcomponents: {
    Header,
    Body,
    Footer,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    clickable: {
      control: { type: 'boolean' },
      description: 'Makes the entire card clickable',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the card and all interactive elements',
    },
  },
};

const Template = (args) => (
  <Card {...args}>
    <Header>
      <h3>Card Title</h3>
    </Header>
    <Body>
      <p>
        This is the card body content. It can contain any custom content you
        need.
      </p>
    </Body>
    <Footer>
      <Button size="sm">Action</Button>
    </Footer>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  clickable: false,
  disabled: false,
};

export const Clickable = Template.bind({});
Clickable.args = {
  clickable: true,
  onClick: () => console.log('Card clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const MinimalCard = () => (
  <Card>
    <Body>
      <p>A minimal card with just body content.</p>
    </Body>
  </Card>
);

export const HeaderOnly = () => (
  <Card>
    <Header>
      <h3>Header Only Card</h3>
      <p>This card only has a header section.</p>
    </Header>
  </Card>
);

export const WithFooterActions = () => (
  <Card>
    <Header>
      <h3>Card with Actions</h3>
    </Header>
    <Body>
      <p>This card has multiple actions in the footer.</p>
    </Body>
    <Footer>
      <Button kind="secondary" size="sm">
        Cancel
      </Button>
      <Button size="sm">Confirm</Button>
    </Footer>
  </Card>
);
