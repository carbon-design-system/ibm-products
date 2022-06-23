/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductiveCard as CCProductiveCard } from '../../../../../cloud-cognitive/src';
import { TrashCan16, Edit16 } from '@carbon/icons-react';
import { StatusIcon } from '../../../../../cloud-cognitive/src';
import { usePrefix } from '@carbon/react';

const ProductiveCard = (props) => {
  const carbonPrefix = usePrefix();
  const kinds = [
    { type: 'fatal', label: 'Fatal' },
    { type: 'critical', label: 'Critical' },
    { type: 'major-warning', label: 'Major warning' },
    { type: 'minor-warning', label: 'Minor warning' },
    { type: 'undefined', label: 'Undefined' },
    { type: 'unknown', label: 'Unknown' },
    { type: 'normal', label: 'Normal' },
    { type: 'info', label: 'Info' },
    { type: 'in-progress', label: 'In progress' },
    { type: 'running', label: 'Running' },
    { type: 'pending', label: 'Pending' },
  ];

  const [statusIconKind /*setStatusIconKind*/] = useState(
    kinds[Math.floor(Math.random() * (kinds.length - 1))]
  );

  const actionIcons = [
    {
      id: '1',
      icon: () => (
        <StatusIcon
          iconDescription={statusIconKind.label}
          kind={statusIconKind.type}
          size="sm"
          theme="dark"
        />
      ),
      iconDescription: statusIconKind.label,
    },
    {
      id: '2',
      icon: TrashCan16,
      //onClick: action,
      //onKeyDown: action,
      iconDescription: 'Delete',
    },
    {
      id: '3',
      icon: Edit16,
      onClick: () => {
        props.actions.setSidePanelOpen(true);
        props.actions.setCardToEdit(props.index);
      },
      //onKeyDown: action,
      iconDescription: 'Edit',
    },
  ];
  // const actions = {
  //     "openSidePanel" : () => props.actions.setSidePanelOpen(true),
  //     "openNarrowTearsheet": () => props.actions.setNarrowTearsheetOpen(true),
  //     "openWideTearsheet": () => props.actions.setWideTearsheetOpen(true),
  //     "openTester" : () => {
  //         props.actions.setSidePanelOpen(true);
  //         console.log('tester', props.data[props.index].config);
  //         props.actions.setComponentConfig({ ...props.config, "sidePanel" : {
  //             title: props.data[props.index].title,
  //             subtitle: props.data[props.index].subtitle
  //         }})
  //     }
  // }

  return (
    <CCProductiveCard
      label={props.data.topic.author ? props.data.topic.author : 'No Author'}
      actionIcons={actionIcons}
      actionsPlacement="bottom"
      description={props.data.topic.description}
      //onPrimaryButtonClick={props.data[props.index] ? actions[props.data[props.index].onPrimaryButtonClick] : () => console.log('clicking')}
      //primaryButtonText={ props.data[props.index].primaryButtonText ? props.data[props.index].primaryButtonText : "Button action" }
      title={props.data.topic.name}
    >
      <div className={`${carbonPrefix}--row`}>
        <div className={`${carbonPrefix}--col-lg-6`}>Partitions</div>
        <div className={`${carbonPrefix}--col-lg-6`}>
          {props.data.partitions}
        </div>
      </div>
      <div className={`${carbonPrefix}--row`}>
        <div className={`${carbonPrefix}--col-lg-6`}>Replicas</div>
        <div className={`${carbonPrefix}--col-lg-6`}>{props.data.replicas}</div>
      </div>
      <div className={`${carbonPrefix}--row`}>
        <div className={`${carbonPrefix}--col-lg-6`}>Message Retention</div>
        <div className={`${carbonPrefix}--col-lg-6`}>
          {props.data.retention}
        </div>
      </div>
    </CCProductiveCard>
  );
};
ProductiveCard.propTypes = {
  actions: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
};

export default ProductiveCard;
