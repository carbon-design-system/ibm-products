/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ForwardedRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tag, IconButton } from '@carbon/react';
import { Edit } from '@carbon/react/icons';
import type { AddSelectItem } from '@carbon/ibm-products-primitives';
import { blockClass } from '../context';

/**
 * ----------------
 * AddSelectSelectionSummaryPanel
 * ----------------
 */

export interface AddSelectSelectionSummaryPanelProps {
  /**
   * Panel title
   */
  title?: string;
  /**
   * Array of selected items
   */
  selectedItems?: AddSelectItem[];
  /**
   * Custom content or SelectionSummaryPanelItem components
   */
  children?: ReactNode;
  /**
   * Custom empty state component (user provides)
   */
  emptyState?: ReactNode;
  /**
   * Show count badge
   */
  showCount?: boolean;
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
   * Custom item renderer
   */
  renderItem?: (item: AddSelectItem) => ReactNode;
}

/**
 * AddSelectSelectionSummaryPanel - Displays list of selected items
 * @example
 * ```jsx
 * <AddSelect.SelectionSummaryPanel
 *   title="Selected items"
 *   selectedItems={items}
 *   showCount
 *   showEditIcon
 *   onEdit={handleEdit}
 * />
 * ```
 */
const AddSelectSelectionSummaryPanel = forwardRef<
  HTMLDivElement,
  AddSelectSelectionSummaryPanelProps
>(
  (
    {
      title = 'Selected items',
      selectedItems = [],
      children,
      emptyState,
      showCount = true,
      showEditIcon = false,
      onEdit,
      editIconDescription = 'Edit selections',
      className,
      renderItem,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const panelClasses = cx(
      `${blockClass}__selection-summary-panel`,
      className
    );

    const hasSelections = selectedItems.length > 0;

    return (
      <div className={panelClasses} ref={ref} {...rest}>
        {/* Header with title, count, and optional edit icon */}
        <div className={`${blockClass}__selection-summary-panel-header`}>
          <p className={`${blockClass}__selection-summary-panel-title`}>
            {title}
          </p>
          {showCount && (
            <Tag type="gray" size="sm">
              {selectedItems.length}
            </Tag>
          )}
          <div
            className={`${blockClass}__selection-summary-panel-header-actions`}
          >
            {showEditIcon && onEdit && (
              <IconButton
                label={editIconDescription}
                onClick={onEdit}
                kind="ghost"
                size="sm"
                className={`${blockClass}__selection-summary-panel-edit-button`}
              >
                <Edit size={16} />
              </IconButton>
            )}
          </div>
        </div>

        {/* Body content */}
        <div className={`${blockClass}__selection-summary-panel-body`}>
          {hasSelections ? (
            children ? (
              children
            ) : renderItem ? (
              selectedItems.map((item) => (
                <div key={item.id}>{renderItem(item)}</div>
              ))
            ) : (
              // Default rendering - simple list
              <div>
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className={`${blockClass}__selection-summary-panel-item-simple`}
                  >
                    <div
                      className={`${blockClass}__selection-summary-panel-item-title`}
                    >
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div
                        className={`${blockClass}__selection-summary-panel-item-subtitle`}
                      >
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          ) : (
            emptyState
          )}
        </div>
      </div>
    );
  }
);

AddSelectSelectionSummaryPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  editIconDescription: PropTypes.string,
  emptyState: PropTypes.node,
  /**@ts-ignore */
  onEdit: PropTypes.func,
  /**@ts-ignore */
  renderItem: PropTypes.func,
  /**@ts-ignore */
  selectedItems: PropTypes.arrayOf(PropTypes.object),
  showCount: PropTypes.bool,
  showEditIcon: PropTypes.bool,
  title: PropTypes.string,
};

AddSelectSelectionSummaryPanel.displayName = 'AddSelectSelectionSummaryPanel';

export default AddSelectSelectionSummaryPanel;
