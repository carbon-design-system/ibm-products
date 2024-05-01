// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { GetStarted } from '@carbon/ibm-products';
import { ArrowRight, Time, SkillLevelBasic } from '@carbon/react/icons';

import './_example.scss';

export const Example = () => {
  const defaultProps = {
    label: 'Label',
    title: 'Title',
    metaData: [
      {
        id: '1',
        icon: () => <Time size={16} />,
        iconDescription: 'Duration',
      },
      {
        id: '2',
        icon: () => <SkillLevelBasic size={16} />,
        iconDescription: 'Level',
      },
    ],
    footerActionIcon: () => <ArrowRight size={16}></ArrowRight>,
    onClick: () => {},
    step: 3,
    status: 'incomplete'
  };

  return (
    <FlexGrid>
      <Row>
        <Column sm={4} md={8} lg={4}>
          <GetStarted {...defaultProps} />
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default Example;
