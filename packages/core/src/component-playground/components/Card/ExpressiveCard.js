/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { ExpressiveCard as CCExpressiveCard } from '../../../../../cloud-cognitive/src';

const ExpressiveCard = (props) => {
  console.log('card data', props.data);
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
    <CCExpressiveCard
      label={props.data.topic.author ? props.data.topic.author : 'No Author'}
      //onPrimaryButtonClick={props.data[props.index] ? actions[props.data[props.index].onPrimaryButtonClick] : () => console.log('clicking')}
      //primaryButtonText={ props.data[props.index].primaryButtonText ? props.data[props.index].primaryButtonText : "Button action" }
      title={props.data.topic.name ? props.data.topic.name : 'Card Title'}
    >
      <p>
        {
          //props.data[props.index].content ? props.data[props.index].content : "Card content here"
        }
      </p>
    </CCExpressiveCard>
  );
};
ExpressiveCard.propTypes = {
  data: PropTypes.object,
};

export default ExpressiveCard;
