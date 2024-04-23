//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { PropsWithChildren, ReactNode, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { prepareProps } from '../../global/js/utils/props-helper';
import { pkg } from '../../settings';

type ActionIcon = {
  id?: string;
  icon?: () => void | object;
  onKeydown?: () => void;
  onClick?: () => void;
  iconDescription?: string;
  href?: string;
};

interface ExpressiveCardProps extends PropsWithChildren {
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines. Note- href will supersede onClick
   */
  actionIcons?: ActionIcon[];
  /**
   * Content that shows in the body of the card
   */
  // children: PropTypes.node,
  /**
   * Optional user provided class
   */
  className?: string;
  /**
   * Optional header description
   */
  description?: string | object | ReactNode;
  /**
   * Optional label for the top of the card
   */
  label?: string | object | ReactNode;
  /**
   * Optional media content like an image to be placed in the card
   */
  media?: ReactNode;
  /**
   * Establishes the position of the media in the card
   */
  mediaPosition?: 'top' | 'left';
  /**
   * Provides the callback for a clickable card
   */
  onClick?: () => void;
  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick?: () => void;
  /**
   * Function that's called from the secondary button
   */
  onSecondaryButtonClick?: () => void;
  /**
   * Provides the icon that's displayed at the top of the card
   */
  pictogram?: () => void | object;
  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  primaryButtonHref?: string;
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  primaryButtonIcon?: () => void | object;
  /**
   * Establishes the kind of button displayed for the primary button
   */
  primaryButtonKind?: 'primary' | 'ghost';
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText?: string;
  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  secondaryButtonHref?: string;
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  secondaryButtonIcon?: () => void | object;
  /**
   * Establishes the kind of button displayed for the secondary button
   */
  secondaryButtonKind?: 'secondary' | 'ghost';
  /**
   * The text that's displayed in the secondary button
   */
  secondaryButtonText?: string;
  /**
   * **Experimental:** For all cases a `Slug` component can be provided.
   * Clickable tiles only accept a boolean value of true and display a hollow slug.
   */
  slug?: ReactNode | boolean;

  /**
   * Title that's displayed at the top of the card
   */
  title?: string | object | ReactNode;
}

const componentName = 'ExpressiveCard';

export let ExpressiveCard = forwardRef(
  (props: ExpressiveCardProps, ref: React.Ref<HTMLDivElement>) => {
    const validProps = prepareProps(props, [
      'actionIconsPosition',
      'overflowActions',
      'productive',
      'titleSize',
    ]);

    return (
      <Card ref={ref} {...validProps} {...getDevtoolsProps(componentName)} />
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
ExpressiveCard = pkg.checkComponentEnabled(ExpressiveCard, componentName);

ExpressiveCard.propTypes = {
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines. Note- href will supersede onClick
   */
  /**@ts-ignore */
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
   * Content that shows in the body of the card
   */
  children: PropTypes.node,
  /**
   * Optional user provided class
   */
  className: PropTypes.string,
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
  /**@ts-ignore */
  pictogram: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  primaryButtonHref: PropTypes.string,
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  /**@ts-ignore */
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Establishes the kind of button displayed for the primary button
   */
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  secondaryButtonHref: PropTypes.string,
  /**
   * Optional prop to allow overriding the icon rendering. Can be a React component class
   */
  /**@ts-ignore */
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Establishes the kind of button displayed for the secondary button
   */
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  /**
   * The text that's displayed in the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * **Experimental:** For all cases a `Slug` component can be provided.
   * Clickable tiles only accept a boolean value of true and display a hollow slug.
   */
  slug: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),

  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

ExpressiveCard.displayName = componentName;
