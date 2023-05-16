//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { prepareProps } from '../../global/js/utils/props-helper';
import { pkg } from '../../settings';

const componentName = 'ProductiveCard';

// Default values for props
const defaults = {
  actionsPlacement: 'top',
};

export let ProductiveCard = forwardRef(
  ({ actionsPlacement = defaults.actionsPlacement, ...rest }, ref) => {
    const validProps = prepareProps(rest, [
      'media',
      'mediaPosition',
      'onSecondaryButtonClick',
      'pictogram',
      'primaryButtonClick',
      'productive',
      'secondaryButtonKind',
      'secondaryButtonText',
    ]);

    return (
      <Card
        {...{ ...validProps, actionsPlacement, ref }}
        productive
        {...getDevtoolsProps(componentName)}
      />
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
ProductiveCard = pkg.checkComponentEnabled(ProductiveCard, componentName);

ProductiveCard.propTypes = {
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines
   */
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      onKeyDown: PropTypes.func,
      onClick: PropTypes.func,
      iconDescription: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  /**
   * Determines if the action icons are on the top or bottom of the card
   */
  actionsPlacement: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Content that shows in the body of the card
   */
  children: PropTypes.node,
  /**
   * Optional user provided class
   */
  className: PropTypes.string,
  /**
   * Designates which zones of the card are clickable. Refer to design documentation for implementation guidelines
   */
  clickZone: PropTypes.oneOf(['one', 'two', 'three']),
  /**
   * Optional header description
   */
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  /**
   * Optional label for the top of the card
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  /**
   * Provides the callback for a clickable card
   */
  onClick: PropTypes.func,
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
      onKeyDown: PropTypes.func,
    })
  ),
  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  primaryButtonHref: PropTypes.string,
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Determines if the primary button is on the top or bottom of the card
   */
  primaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.node,
  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  /**
   * Determines title size
   */
  titleSize: PropTypes.oneOf(['default', 'large']),
};

ProductiveCard.displayName = componentName;
