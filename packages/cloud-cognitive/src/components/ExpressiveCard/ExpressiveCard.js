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
const componentName = 'ExpressiveCard';

export let ExpressiveCard = ({
  actionIcons,
  actionIconsPosition,
  caption,
  children,
  className,
  label,
  media,
  mediaPosition,
  onClick,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  pictogram: Pictogram,
  primaryButtonKind,
  primaryButtonText,
  secondaryButtonKind,
  secondaryButtonText,
  title,
}) => {
  const props = {
    actionIcons,
    actionIconsPosition,
    caption,
    children,
    className,
    label,
    media,
    mediaPosition,
    onClick,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    pictogram: Pictogram,
    primaryButtonKind,
    primaryButtonText,
    secondaryButtonKind,
    secondaryButtonText,
    title,
  };
  return <Card {...props} />;
};

// Return a placeholder if not released and not enabled by feature flag
ExpressiveCard = pkg.checkComponentEnabled(ExpressiveCard, componentName);

ExpressiveCard.propTypes = {
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
   * Optional media content like an image to be placed in the card
   */
  media: PropTypes.node,
  /**
   * Establishes the position of the media in the card
   */
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  /**
   * Provides the callback for a clickable card
   */
  onClick: PropTypes.func,
  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick: PropTypes.func,
  /**
   * Function that's called from the secondary button
   */
  onSecondaryButtonClick: PropTypes.func,
  /**
   * Provides the icon that's displayed at the top of the card
   */
  pictogram: PropTypes.object,
  /**
   * Establishes the kind of button displayed for the primary button
   */
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Establishes the kind of button displayed for the secondary button
   */
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  /**
   * The text that's displayed in the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.string,
};

ExpressiveCard.defaultProps = {
  actionIcons: [],
  actionIconsPosition: 'bottom',
  mediaPosition: 'top',
  overflowActions: [],
  primaryButtonKind: 'primary',
  secondaryButtonKind: 'secondary',
};

ExpressiveCard.displayName = componentName;
