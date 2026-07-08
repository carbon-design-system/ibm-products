/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, useEffect, useRef, useState, Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { OverflowMenu, OverflowMenuItem, FeatureFlags } from '@carbon/react';
import { createOverflowHandler } from '@carbon/utilities';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--card-next`;
const componentName = 'CardActions';

export interface CardActionsProps {
  /**
   * Provide the contents of the CardActions (typically CardAction components).
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Aria label for the overflow menu
   */
  overflowMenuLabel?: string;
}

interface ActionItem {
  id: string;
  element: React.ReactElement;
  label?: string;
}

/**
 * CardActions is a container for action buttons in the card header.
 * Positioned in the top-right corner with 8px gap between actions.
 * When actions exceed 50% of available header space, overflow menu is shown.
 */
export const CardActions = ({
  children,
  className,
  overflowMenuLabel = 'More actions',
  ...rest
}: CardActionsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hiddenItems, setHiddenItems] = useState<ActionItem[]>([]);
  const classes = cx(`${blockClass}__actions`, className);

  // Convert children to array of action items with IDs
  const actionItems: ActionItem[] = [];
  Children.forEach(children, (child, index) => {
    if (React.isValidElement(child)) {
      const id = `action-${index}`;
      // Try to extract label from IconButton props
      let label = overflowMenuLabel;
       
      const childProps = child.props as any;
      if (childProps.children && React.isValidElement(childProps.children)) {
         
        const iconButton = childProps.children as any;
        label =
          iconButton.props?.label ||
          iconButton.props?.iconDescription ||
          `Action ${index + 1}`;
      }
      actionItems.push({ id, element: child, label });
    }
  });

  useEffect(() => {
    if (!containerRef.current || actionItems.length === 0) {
      return;
    }

    const handler = createOverflowHandler({
      container: containerRef.current,
      onChange: (_visible, hidden) => {
        const hiddenIds = hidden.map((el) => el.dataset.id);
        setHiddenItems(
          actionItems.filter((item) => hiddenIds.includes(item.id))
        );
      },
    });

    return () => handler.disconnect();
  }, [children]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      className={classes}
      {...rest}
      {...getDevtoolsProps(componentName)}
    >
      {actionItems.map((item) => (
        <div key={item.id} data-id={item.id}>
          {item.element}
        </div>
      ))}
      <div
        data-offset
        data-hidden
        data-floating-menu-container
        style={{
          position: 'relative',
        }}
      >
        <FeatureFlags enableV12Overflowmenu>
          <OverflowMenu size="sm" aria-label={overflowMenuLabel}>
            {hiddenItems.map((item) => (
              <OverflowMenuItem
                key={item.id}
                itemText={item.label || 'Action'}
                onClick={() => {
                  // Try to trigger the click on the original button
                   
                  const elementProps = item.element.props as any;
                  const button = elementProps.children;
                  if (button && React.isValidElement(button)) {
                     
                    const buttonProps = button.props as any;
                    if (buttonProps.onClick) {
                      buttonProps.onClick();
                    }
                  }
                }}
              />
            ))}
          </OverflowMenu>
        </FeatureFlags>
      </div>
    </div>
  );
};

CardActions.propTypes = {
  /**
   * Provide the contents of the CardActions.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Aria label for the overflow menu
   */
  overflowMenuLabel: PropTypes.string,
};

CardActions.displayName = componentName;
