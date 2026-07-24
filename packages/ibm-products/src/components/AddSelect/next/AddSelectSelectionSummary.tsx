/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ForwardedRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Tag,
  IconButton,
  type TagProps,
  type IconButtonProps,
} from '@carbon/react';
import { Edit } from '@carbon/react/icons';
import { blockClass } from './context';

/**
 * ----------------
 * AddSelectSelectionSummary
 * ----------------
 */

export interface AddSelectSelectionSummaryProps {
  /**
   * Panel title
   */
  title?: string;
  /**
   * Number of selected items — shown as a badge next to the title when
   * provided. The badge is hidden when `selectedItemCount` is omitted.
   */
  selectedItemCount?: number;
  /**
   * Custom content or SelectionSummaryItem components
   */
  children?: ReactNode;
  /**
   * Custom empty state component — shown when `selectedItemCount` is `0` or
   * not provided.
   */
  emptyState?: ReactNode;
  /**
   * Show edit icon next to count
   */
  showEditIcon?: boolean;
  /**
   * Edit icon click handler
   */
  onEdit?: () => void;
  /**
   * Edit icon aria-label
   */
  editIconDescription?: string;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Custom header content (slot) - replaces entire header section
   */
  headerContent?: ReactNode;
  /**
   * Header actions slot - adds custom actions alongside the edit icon
   */
  headerActions?: ReactNode;
  /**
   * Additional props to pass to the Tag component
   */
  tagProps?: Omit<TagProps<'div'>, 'type' | 'size' | 'children'>;
  /**
   * Additional props to pass to the edit IconButton
   */
  editIconButtonProps?: Omit<
    IconButtonProps,
    'label' | 'onClick' | 'kind' | 'size' | 'className' | 'children'
  >;
}

/**
 * AddSelectSelectionSummary - Displays list of selected items.
 *
 * - Pass `selectedItemCount` to show a numeric badge next to the title; omit it to hide the badge.
 * - Pass `emptyState` to show a placeholder when `selectedItemCount` is `0` or not provided.
 * @example
 * With count badge:
 * ```jsx
 * <AddSelect.SelectionSummary
 *   title="Selected items"
 *   selectedItemCount={selectedItemsArray.length}
 *   showEditIcon
 *   onEdit={handleEdit}
 * >
 *   {selectedItemsArray.map((item) => (
 *     <AddSelect.SelectionSummaryItem key={item.id} item={item} onRemove={handleRemove} />
 *   ))}
 * </AddSelect.SelectionSummary>
 * ```
 *
 * Without badge (omit `selectedItemCount`):
 * ```jsx
 * <AddSelect.SelectionSummary title="Selected items">
 *   {selectedItemsArray.map((item) => (
 *     <AddSelect.SelectionSummaryItem key={item.id} item={item} onRemove={handleRemove} />
 *   ))}
 * </AddSelect.SelectionSummary>
 * ```
 *
 * With empty state (shown when `selectedItemCount` is `0` or not provided):
 * ```jsx
 * <AddSelect.SelectionSummary
 *   title="Selected items"
 *   selectedItemCount={selectedItemsArray.length}
 *   emptyState={<NoDataEmptyState />}
 * >
 *   {selectedItemsArray.map((item) => (
 *     <AddSelect.SelectionSummaryItem key={item.id} item={item} onRemove={handleRemove} />
 *   ))}
 * </AddSelect.SelectionSummary>
 * ```
 */
const AddSelectSelectionSummary = forwardRef<
  HTMLDivElement,
  AddSelectSelectionSummaryProps
>(
  (
    {
      title = 'Selected items',
      selectedItemCount,
      children,
      emptyState,
      showEditIcon = false,
      onEdit,
      editIconDescription = 'Edit selections',
      className,
      headerContent,
      headerActions,
      tagProps,
      editIconButtonProps,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const panelClasses = cx(`${blockClass}__selection-summary`, className);

    return (
      <div className={panelClasses} ref={ref} {...rest}>
        {/* Header with title, count, and optional edit icon */}
        <div className={`${blockClass}__selection-summary-header`}>
          {headerContent || (
            <>
              <p className={`${blockClass}__selection-summary-title`}>
                {title}
              </p>
              {selectedItemCount !== undefined && (
                <Tag type="gray" size="sm" {...tagProps}>
                  {selectedItemCount}
                </Tag>
              )}
              {(showEditIcon || headerActions) && (
                <div
                  className={`${blockClass}__selection-summary-header-actions`}
                >
                  {headerActions}
                  {showEditIcon && (
                    <IconButton
                      label={editIconDescription}
                      onClick={onEdit}
                      kind="ghost"
                      size="sm"
                      autoAlign
                      className={`${blockClass}__selection-summary-edit-button`}
                      {...editIconButtonProps}
                    >
                      <Edit size={16} />
                    </IconButton>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Body content */}
        <div className={`${blockClass}__selection-summary-body`}>
          {!selectedItemCount ? emptyState : children}
        </div>
      </div>
    );
  }
);

AddSelectSelectionSummary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**@ts-ignore */
  editIconButtonProps: PropTypes.object,
  editIconDescription: PropTypes.string,
  emptyState: PropTypes.node,
  headerActions: PropTypes.node,
  headerContent: PropTypes.node,
  /**@ts-ignore */
  onEdit: PropTypes.func,
  selectedItemCount: PropTypes.number,
  showEditIcon: PropTypes.bool,
  /**@ts-ignore */
  tagProps: PropTypes.object,
  title: PropTypes.string,
};

AddSelectSelectionSummary.displayName = 'AddSelectSelectionSummary';

export default AddSelectSelectionSummary;
