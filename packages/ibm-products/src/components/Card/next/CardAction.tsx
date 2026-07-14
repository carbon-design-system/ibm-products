/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';
import { useCardContext } from './CardContext';

const blockClass = `${pkg.prefix}--card-next`;
const componentName = 'CardAction';

export interface CardActionProps {
  /**
   * Provide the contents of the CardAction (typically a Button or IconButton).
   * Wrapping content in CardAction opts into action-set layout: no footer
   * padding, automatic top border, and stretch/fixed-width button behavior.
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Optional click handler for the action.
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

/**
 * CardAction is a wrapper for interactive elements in the card footer.
 * Its presence signals action-set layout to the footer (no padding, auto
 * border, stretch behavior). It also prevents click propagation on
 * clickable cards so actions fire independently of the card click handler.
 */
export const CardAction = ({
  children,
  className,
  onClick,
  ...rest
}: CardActionProps) => {
  const { clickable } = useCardContext();
  const classes = cx(`${blockClass}__action`, className);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    // Prevent card click when action is clicked
    if (clickable) {
      event.stopPropagation();
    }
    onClick?.(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      {...rest}
      className={classes}
      onClick={handleClick}
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </div>
  );
};

CardAction.propTypes = {
  /**
   * Provide the contents of the CardAction.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Optional click handler for the action.
   */
  onClick: PropTypes.func,
};

CardAction.displayName = componentName;
