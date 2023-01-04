import React from 'react';
import { Grid, Row, Column } from '@carbon/react';
import { ExpressiveCard } from '@carbon/ibm-products';

export const Example = () => {
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
  return (
    <Grid>
      <Row>
        <Column lg={8}></Column>
        <ExpressiveCard {...defaultProps} />
      </Row>
    </Grid>
  );
};
