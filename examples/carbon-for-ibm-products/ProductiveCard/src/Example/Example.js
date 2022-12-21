import React from "react";
import { Grid, Row, Column } from "@carbon/react";
import { ProductiveCard } from "@carbon/ibm-products";
import { TrashCan, Edit } from "@carbon/icons-react";

import "./_example.scss";

const TrashCan16 = (props) => <TrashCan size={16} />;
const Edit16 = (props) => <Edit size={16} />;

export const Example = () => {
  const action = () => {
    console.log("action");
  };
  const defaultProps = {
    title: "Title",
    children: (
      <>
        <div className='graph' />
        <p>Productive content text 1</p>
        <p>Productive content text 2</p>
      </>
    ),
    actionIcons: [
      {
        id: "1",
        icon: Edit16,
        onClick: action,
        onKeyDown: action,
        iconDescription: "Edit"
      },
      {
        id: "2",
        icon: TrashCan16,
        onClick: action,
        onKeyDown: action,
        iconDescription: "Delete"
      }
    ]
  };
  return (
    <Grid>
      <Row>
        <Column lg={8}>
          <ProductiveCard {...defaultProps} />
        </Column>
      </Row>
    </Grid>
  );
};
