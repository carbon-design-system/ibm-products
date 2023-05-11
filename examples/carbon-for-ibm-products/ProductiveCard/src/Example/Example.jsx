import React from "react";
import { FlexGrid, Row, Column } from "@carbon/react";
import { ProductiveCard } from "@carbon/ibm-products";
import { TrashCan, Edit } from "@carbon/icons-react";

import "./_example.scss";

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
        icon: (props) => <Edit size={16} {...props} />,
        onClick: action,
        onKeyDown: action,
        iconDescription: "Edit"
      },
      {
        id: "2",
        icon: (props) => <TrashCan size={16} {...props} />,
        onClick: action,
        onKeyDown: action,
        iconDescription: "Delete"
      }
    ]
  };
  return (
    <div className="container">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={4}>
            <ProductiveCard {...defaultProps} />
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
};

export default Example;
