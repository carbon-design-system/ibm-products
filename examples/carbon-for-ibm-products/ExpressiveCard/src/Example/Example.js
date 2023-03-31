import React from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
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
        <Column sm={4} md={8} lg={4}>
          <ExpressiveCard {...defaultProps} />
        </Column>
      </Row>
    </Grid>
  );
};
