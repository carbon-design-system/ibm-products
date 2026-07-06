/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { preview__Card as Card } from '../..';
import { CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '@carbon/react';
import './_storybook-styles.scss';

export default {
  title: 'Preview/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardBody,
    CardFooter,
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
  <Card.Root {...args}>
    <Card.Header>
      <h3>Card Title</h3>
    </Card.Header>
    <Card.Body>
      <p>
        This is the card body content. It can contain any custom content you
        need.
      </p>
    </Card.Body>
    <Card.Footer>
      <Button size="sm">Action</Button>
    </Card.Footer>
  </Card.Root>
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
  <Card.Root>
    <Card.Body>
      <p>A minimal card with just body content.</p>
    </Card.Body>
  </Card.Root>
);

export const HeaderOnly = () => (
  <Card.Root>
    <Card.Header>
      <h3>Header Only Card</h3>
      <p>This card only has a header section.</p>
    </Card.Header>
  </Card.Root>
);

export const WithFooterActions = () => (
  <Card.Root>
    <Card.Header>
      <h3>Card with Actions</h3>
    </Card.Header>
    <Card.Body>
      <p>This card has multiple actions in the footer.</p>
    </Card.Body>
    <Card.Footer>
      <Button kind="secondary" size="sm">
        Cancel
      </Button>
      <Button size="sm">Confirm</Button>
    </Card.Footer>
  </Card.Root>
);
