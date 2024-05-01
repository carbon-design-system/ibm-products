/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import PropTypes from 'prop-types';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

import { Card } from '../Card';
const componentName = 'GetStarted';

/**
 * GetStarted a card with icon, number, and media variants
 */
export let GetStarted = React.forwardRef(
  (
    {
      ...rest
    },
    ref
  ) => {
    return (
      <Card 
        getStarted
        ref={ref} 
        {...rest}
        {...getDevtoolsProps(componentName)}
        />
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
GetStarted = pkg.checkComponentEnabled(GetStarted, componentName);

GetStarted.displayName = componentName;

GetStarted.propTypes = {
  
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Optional if the card should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provides the action icon that's displayed at the footer of the card
   */
  footerActionIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Optional label for the top of the card
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),

  /**
   * Optional media content like an image to be placed in the card
   */
  media: PropTypes.node,

  /**
   * Icons that are displayed on the card showing the time and skill needed
   */
  metaData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      iconDescription: PropTypes.string,
    })
  ),

  /**
   * Provides the callback for a clickable card
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Provides the icon that's displayed at the top of the card
   */
  pictogram: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Provides the status that's displayed at the top of the card
   */
  status: PropTypes.oneOf(['none', 'complete', 'incomplete']),

  /**
   * Provides step for card for tasks in a sequential order
   */
  step: PropTypes.number,

   /**
   * Title that's displayed at the top of the card
   */
   title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};
