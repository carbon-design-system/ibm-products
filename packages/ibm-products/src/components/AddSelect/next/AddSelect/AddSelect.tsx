/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  ForwardedRef,
  ReactNode,
  useState,
  FC,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass, AddSelectContext } from '../context';
import AddSelectBody, {
  AddSelectBodyProps,
} from '../AddSelectBody/AddSelectBody';
import AddSelectList, {
  AddSelectListProps,
} from '../AddSelectList/AddSelectList';
import AddSelectRow, { AddSelectRowProps } from '../AddSelectRow/AddSelectRow';
import AddSelectBreadcrumbs, {
  AddSelectBreadcrumbsProps,
} from '../AddSelectBreadcrumbs/AddSelectBreadcrumbs';

/**
 * ----------
 * AddSelect
 * ----------
 */

export interface AddSelectProps {
  children?: ReactNode;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Whether this is a multi-select
   */
  multi?: boolean;
  /**
   * Callback when an item is selected/deselected
   */
  onItemSelect?: (itemId: string, selected: boolean, value: string) => void;
  /**
   * Callback when navigating to children
   */
  onNavigate?: (itemId: string, title: string, parentId: string) => void;
  /**
   * Set of selected item IDs
   */
  selectedItems?: Set<string>;
}

export type AddSelectComponentType = React.ForwardRefExoticComponent<
  AddSelectProps & React.RefAttributes<HTMLDivElement>
> & {
  Body: FC<AddSelectBodyProps>;
  List: FC<AddSelectListProps>;
  Row: FC<AddSelectRowProps>;
  Breadcrumbs: FC<AddSelectBreadcrumbsProps>;
};

/**
 * AddSelect - Composable component for adding/selecting items
 * @example
 * ```jsx
 * <AddSelect multi onItemSelect={handleSelect}>
 *   <AddSelect.Body
 *     itemsLabel="Items"
 *     globalSearchLabel="Search"
 *     itemCount={items.length}
 *   >
 *     <AddSelect.List>
 *       {items.map(item => (
 *         <AddSelect.Row
 *           key={item.id}
 *           itemId={item.id}
 *           title={item.title}
 *           value={item.value}
 *         />
 *       ))}
 *     </AddSelect.List>
 *   </AddSelect.Body>
 * </AddSelect>
 * ```
 */
export const AddSelect = forwardRef<HTMLDivElement, AddSelectProps>(
  (
    {
      children,
      className,
      multi = false,
      onItemSelect,
      onNavigate,
      selectedItems,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <AddSelectContext.Provider
        value={{
          multi,
          onItemSelect,
          onNavigate,
          selectedItems,
        }}
      >
        <div className={cx(blockClass, className)} ref={ref} {...rest}>
          {children}
        </div>
      </AddSelectContext.Provider>
    );
  }
) as AddSelectComponentType;

AddSelect.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  multi: PropTypes.bool,
  /**@ts-ignore */
  onItemSelect: PropTypes.func,
  /**@ts-ignore */
  onNavigate: PropTypes.func,
  /**@ts-ignore */
  selectedItems: PropTypes.instanceOf(Set),
};

AddSelect.Body = AddSelectBody;
AddSelect.List = AddSelectList;
AddSelect.Row = AddSelectRow;
AddSelect.Breadcrumbs = AddSelectBreadcrumbs;

AddSelect.displayName = 'AddSelect';
