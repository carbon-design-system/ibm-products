/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ForwardedRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Accordion, AccordionItem, IconButton } from '@carbon/react';
import { SubtractAlt } from '@carbon/react/icons';
import type { AddSelectItem } from '@carbon/ibm-products-primitives';
import { blockClass } from '../context';

/**
 * ----------------
 * AddSelectSelectionSummaryPanelItem
 * ----------------
 */

export interface AddSelectSelectionSummaryPanelItemProps {
  /**
   * Item data
   */
  item: AddSelectItem;
  /**
   * Custom title renderer (only works with useAccordion mode)
   */
  renderTitle?: (item: AddSelectItem) => ReactNode;
  /**
   * Custom content renderer (only works with useAccordion mode)
   */
  renderContent?: (item: AddSelectItem) => ReactNode;
  /**
   * Custom template for rendering the entire item content
   * Takes precedence over all other rendering props and works in all modes
   */
  renderTemplate?: (
    item: AddSelectItem,
    onRemove?: (id: string) => void
  ) => ReactNode;
  /**
   * Remove button handler
   */
  onRemove?: (itemId: string) => void;
  /**
   * Remove button aria-label
   */
  removeButtonLabel?: string;
  /**
   * Use accordion pattern (default: false)
   */
  useAccordion?: boolean;
  /**
   * Optional class name
   */
  className?: string;
}

/**
 * AddSelectSelectionSummaryPanelItem - Individual selected item display
 * @example
 * ```jsx
 * <AddSelect.SelectionSummaryPanelItem
 *   item={item}
 *   useAccordion
 *   onRemove={handleRemove}
 * />
 * ```
 */
const AddSelectSelectionSummaryPanelItem = forwardRef<
  HTMLDivElement,
  AddSelectSelectionSummaryPanelItemProps
>(
  (
    {
      item,
      renderTitle,
      renderContent,
      renderTemplate,
      onRemove,
      removeButtonLabel = 'Remove item',
      useAccordion = false,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const itemClasses = cx(
      `${blockClass}__selection-summary-panel-item`,
      {
        [`${blockClass}__selection-summary-panel-item--accordion`]:
          useAccordion,
        [`${blockClass}__selection-summary-panel-item--simple`]: !useAccordion,
        [`${blockClass}__selection-summary-panel-item--template`]:
          renderTemplate,
      },
      className
    );

    // Remove button component (reusable in all modes)
    const RemoveButton = onRemove ? (
      <IconButton
        label={removeButtonLabel}
        onClick={(e) => {
          e.stopPropagation();
          onRemove(item.id);
        }}
        kind="ghost"
        className={`${blockClass}__selection-summary-panel-item-remove-button`}
      >
        <SubtractAlt size={16} />
      </IconButton>
    ) : null;

    // Default title rendering
    const defaultTitle = (
      <div
        className={`${blockClass}__selection-summary-panel-item-title-wrapper`}
      >
        <div
          className={`${blockClass}__selection-summary-panel-item-selected-item`}
        >
          <p className={`${blockClass}__selection-summary-panel-item-title`}>
            {item.title}
          </p>
          {item.subtitle && (
            <p
              className={`${blockClass}__selection-summary-panel-item-subtitle`}
            >
              {item.subtitle}
            </p>
          )}
        </div>
        {!useAccordion && onRemove && (
          <div
            className={`${blockClass}__selection-summary-panel-item-remove-button-container`}
          >
            {RemoveButton}
          </div>
        )}
      </div>
    );

    // Default content rendering - show all item properties except meta, icon, avatar
    const defaultContent = () => {
      const { meta, icon, avatar, id, title, subtitle, value, ...rest } = item;
      const entries = Object.entries(rest);

      if (entries.length === 0 && !value) {
        return null;
      }

      return (
        <>
          {value && (
            <div
              className={`${blockClass}__selection-summary-panel-item-entry`}
            >
              <p
                className={`${blockClass}__selection-summary-panel-item-header`}
              >
                value
              </p>
              <p className={`${blockClass}__selection-summary-panel-item-body`}>
                {value}
              </p>
            </div>
          )}
          {entries.map(([key, val]) => (
            <div
              key={key}
              className={`${blockClass}__selection-summary-panel-item-entry`}
            >
              <p
                className={`${blockClass}__selection-summary-panel-item-header`}
              >
                {key}
              </p>
              <p className={`${blockClass}__selection-summary-panel-item-body`}>
                {String(val)}
              </p>
            </div>
          ))}
        </>
      );
    };

    // Priority 1: If custom template provided, use it (works in all modes)
    if (renderTemplate) {
      return (
        <div className={itemClasses} ref={ref} {...rest}>
          {renderTemplate(item, onRemove)}
        </div>
      );
    }

    // Priority 2: Accordion mode
    if (useAccordion) {
      const titleContent = renderTitle ? renderTitle(item) : defaultTitle;
      const bodyContent = renderContent
        ? renderContent(item)
        : defaultContent();

      return (
        <div className={itemClasses} ref={ref} {...rest}>
          <Accordion align="start">
            <AccordionItem
              title={
                <div
                  className={`${blockClass}__selection-summary-panel-item-title-wrapper`}
                >
                  {titleContent}
                  {onRemove && (
                    <div
                      className={`${blockClass}__selection-summary-panel-item-remove-button-container`}
                    >
                      {RemoveButton}
                    </div>
                  )}
                </div>
              }
            >
              {bodyContent}
            </AccordionItem>
          </Accordion>
        </div>
      );
    }

    // Priority 3: Non-accordion mode (default key-value rendering only)
    return (
      <div className={itemClasses} ref={ref} {...rest}>
        <div className={`${blockClass}__selection-summary-panel-item-simple`}>
          {defaultTitle}
          <div
            className={`${blockClass}__selection-summary-panel-item-content`}
          >
            {defaultContent()}
          </div>
        </div>
      </div>
    );
  }
);

AddSelectSelectionSummaryPanelItem.propTypes = {
  className: PropTypes.string,
  /**@ts-ignore */
  item: PropTypes.object.isRequired,
  /**@ts-ignore */
  onRemove: PropTypes.func,
  removeButtonLabel: PropTypes.string,
  /**@ts-ignore */
  renderContent: PropTypes.func,
  /**@ts-ignore */
  renderTemplate: PropTypes.func,
  /**@ts-ignore */
  renderTitle: PropTypes.func,
  useAccordion: PropTypes.bool,
};

AddSelectSelectionSummaryPanelItem.displayName =
  'AddSelectSelectionSummaryPanelItem';

export default AddSelectSelectionSummaryPanelItem;

// Made with Bob
