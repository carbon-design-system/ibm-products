import React from 'react';
import { ExpressiveCard } from '@carbon/ibm-cloud-cognitive';

export const TestComponent = () => {
  const defaultProps = {
    label: 'Label',
    title: 'Title',
    children: (
      <p>
        expressive card body content block. description inviting the user to
        take action on the card.
      </p>
    ),
    primaryButtonText: 'Primary',
  };
  return <ExpressiveCard {...defaultProps} />;
};
