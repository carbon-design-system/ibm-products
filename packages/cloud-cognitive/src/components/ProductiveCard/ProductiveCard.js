//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import { pkg } from '../../settings';
import { stripUnwantedProps } from '../../global/js/utils/props-helper';
const componentName = 'ProductiveCard';

export let ProductiveCard = (props) => {
  const validProps = stripUnwantedProps(props, [
    'media',
    'mediaPosition',
    'onSecondaryButtonClick',
    'pictogram',
    'primaryButtonClick',
    'productive',
    'secondaryButtonKind',
    'secondaryButtonText',
  ]);
  return <Card {...validProps} productive />;
};

// Return a placeholder if not released and not enabled by feature flag
ProductiveCard = pkg.checkComponentEnabled(ProductiveCard, componentName);

ProductiveCard.propTypes = {
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines
   */
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
  /**
   * Determines if the action icons are on the top or bottom of the card
   */
  actionIconsPosition: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Optional header caption
   */
  caption: PropTypes.string,
  /**
   * Content that shows in the body of the card
   */
  children: PropTypes.node,
  /**
   * Optional user provided class
   */
  className: PropTypes.string,
  /**
   * Optional label for the top of the card
   */
  label: PropTypes.string,
  /**
   * Provides the callback for a clickable card
   */
  onClick: PropTypes.func,
  /**
   * Designates which zones of the card are clickable. Refer to design documentation for implementation guidelines
   */
  onClickZone: PropTypes.oneOf(['one', 'two', 'three']),
  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick: PropTypes.func,
  /**
   * Use an overflow menu instead of action icons. Refer to design documentation for implementation guidelines
   */
  overflowActions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      itemText: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.string,
  /**
   * Determines title size
   */
  titleSize: PropTypes.oneOf(['default', 'large']),
};

ProductiveCard.defaultProps = {
  actionIcons: [],
  actionIconsPosition: 'top',
  overflowActions: [],
  titleSize: 'default',
};

ProductiveCard.displayName = componentName;
