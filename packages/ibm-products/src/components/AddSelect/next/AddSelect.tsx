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
import { blockClass, AddSelectContext } from './context';
import AddSelectBody, { AddSelectBodyProps } from './AddSelectBody';
import AddSelectContent, { AddSelectContentProps } from './AddSelectContent';
import AddSelectColumn, { AddSelectColumnProps } from './AddSelectColumn';
import AddSelectRow, { AddSelectRowProps } from './AddSelectRow';
import AddSelectSelectionSummary, {
  AddSelectSelectionSummaryProps,
} from './AddSelectSelectionSummary';
import AddSelectSelectionSummaryItem, {
  AddSelectSelectionSummaryItemProps,
} from './AddSelectSelectionSummaryItem';
import AddSelectItemSummaryPanel, {
  AddSelectItemSummaryPanelProps,
} from './AddSelectItemSummaryPanel';

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
   * Set of selected item IDs
   */
  selectedItems?: Set<string>;
}

export type AddSelectComponentType = React.ForwardRefExoticComponent<
  AddSelectProps & React.RefAttributes<HTMLDivElement>
> & {
  Body: FC<AddSelectBodyProps>;
  Content: FC<AddSelectContentProps>;
  Column: FC<AddSelectColumnProps>;
  Row: FC<AddSelectRowProps>;
  SelectionSummary: FC<AddSelectSelectionSummaryProps>;
  SelectionSummaryItem: FC<AddSelectSelectionSummaryItemProps>;
  ItemSummaryPanel: FC<AddSelectItemSummaryPanelProps>;
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
  selectedItems: PropTypes.instanceOf(Set),
};

AddSelect.Body = AddSelectBody;
AddSelect.Content = AddSelectContent;
AddSelect.Column = AddSelectColumn;
AddSelect.Row = AddSelectRow;
AddSelect.SelectionSummary = AddSelectSelectionSummary;
AddSelect.SelectionSummaryItem = AddSelectSelectionSummaryItem;
AddSelect.ItemSummaryPanel = AddSelectItemSummaryPanel;

AddSelect.displayName = 'AddSelect';
