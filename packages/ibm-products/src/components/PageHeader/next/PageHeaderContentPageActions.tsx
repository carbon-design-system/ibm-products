/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState, useRef } from 'react';
import { useIsomorphicEffect } from '../../../global/js/hooks';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MenuItem, MenuItemProps, MenuButton } from '@carbon/react';
import { blockClass } from '../PageHeaderUtils';
import { createOverflowHandler } from '@carbon/utilities';
import { usePageHeader } from './context';

/**
 * ----------------
 * PageHeaderContentPageActions
 * ----------------
 */
export interface PageHeaderContentPageActionsProps {
  /**
   * Provide child elements to be rendered inside PageHeaderContentPageActions.
   */
  children?: React.ReactNode;
  /**
   * Specify an optional className to be added to your PageHeaderContentPageActions
   */
  className?: string;
  /**
   * The PageHeaderContent's page actions collapsible Menu button label
   */
  menuButtonLabel?: string;
  /**
   * The PageHeaderContent's page actions
   */
  actions?: React.ReactNode;
}

export const PageHeaderContentPageActions = ({
  className,
  children,
  menuButtonLabel = 'Actions',
  actions,
  ...other
}: PageHeaderContentPageActionsProps) => {
  const {
    setRefs,
    contentActionsClipped,
    breadcrumbActionsClipped,
    isContentActionsInBreadcrumbBar: isInBreadcrumbBar,
  } = usePageHeader();
  const classNames = classnames(
    `${blockClass}__content__page-actions`,
    {
      // Revisit this:
      // May want to only add this class if there are content actions in the breadcrumb bar as well
      [`${blockClass}__content__page-actions--clipped`]: isInBreadcrumbBar
        ? breadcrumbActionsClipped
        : contentActionsClipped,
    },
    className
  );

  type action = {
    id: string;
    onClick?: () => void;
    body: React.ReactNode;
    menuItem: MenuItemProps;
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<HTMLDivElement>(null);
  const [menuButtonVisibility, setMenuButtonVisibility] = useState(false);
  const [hiddenItems, setHiddenItems] = useState<action[]>([]);

  // need to set the grid columns width based on the menu button's width
  // to avoid overlapping when resizing
  useIsomorphicEffect(() => {
    if (menuButtonVisibility && offsetRef.current) {
      const width = offsetRef.current.offsetWidth;
      document.documentElement.style.setProperty(
        '--page-header-title-grid-width',
        `${width}px`
      );
    }
  }, [menuButtonVisibility]);

  useEffect(() => {
    if (isInBreadcrumbBar) {
      setRefs((prev) => ({ ...prev, breadcrumbActions: containerRef }));
    } else {
      setRefs((prev) => ({ ...prev, contentActions: containerRef }));
    }
  }, [isInBreadcrumbBar, setRefs]);

  useEffect(() => {
    if (!containerRef.current || !Array.isArray(actions)) {
      return;
    }
    createOverflowHandler({
      container: containerRef.current,
      // exclude the hidden menu button from children
      maxVisibleItems: containerRef.current.children.length - 1,
      onChange: (visible, hidden) => {
        setHiddenItems(actions?.slice(visible.length));

        if (hidden.length > 0) {
          setMenuButtonVisibility(true);
        }
      },
    });
  }, [actions]);

  return (
    <div className={classNames} ref={containerRef} {...other}>
      {Array.isArray(actions) && (
        <>
          {actions.map((action) => (
            <div key={action.id}>
              {React.cloneElement(action.body, {
                ...action.body.props,
                onClick: action.onClick,
              })}
            </div>
          ))}
          <span data-offset data-hidden ref={offsetRef}>
            <MenuButton
              menuAlignment="bottom-end"
              label={menuButtonLabel}
              size="md"
            >
              {[...hiddenItems].reverse().map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={item.onClick}
                  {...item.menuItem}
                />
              ))}
            </MenuButton>
          </span>
        </>
      )}
    </div>
  );
};

PageHeaderContentPageActions.displayName = 'PageHeaderContentPageActions';

PageHeaderContentPageActions.propTypes = {
  /**
   * The PageHeaderContent's page actions
   */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  /**
   * Provide child elements to be rendered inside PageHeaderContentPageActions.
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to your PageHeaderContentPageActions
   */
  className: PropTypes.string,
  /**
   * The PageHeaderContent's collapsible Menu button label
   */
  menuButtonLabel: PropTypes.string,
};
