import React from "react";
import { FlexGrid, Row, Column } from "@carbon/react";
import { ExpressiveCard } from "@carbon/ibm-products";

export const Example = () => {
  const defaultProps = {
    label: "Label",
    title: "Title",
    children: (
      <p>
        expressive card body content block. description inviting the user to
        take action on the card.
      </p>
    ),
    primaryButtonText: "Primary"
  };
  return (
    <FlexGrid>
      <Row>
        <Column sm={4} md={8} lg={4}>
          <ExpressiveCard {...defaultProps} />
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default Example;
