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
   * Custom content for accordion body
   */
  children?: ReactNode;
  /**
   * Custom title renderer
   */
  renderTitle?: (item: AddSelectItem) => ReactNode;
  /**
   * Custom content renderer
   */
  renderContent?: (item: AddSelectItem) => ReactNode;
  /**
   * Remove button handler
   */
  onRemove?: (itemId: string) => void;
  /**
   * Remove button aria-label
   */
  removeButtonLabel?: string;
  /**
   * Use accordion pattern
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
      children,
      renderTitle,
      renderContent,
      onRemove,
      removeButtonLabel = 'Remove item',
      useAccordion = true,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const itemClasses = cx(
      `${blockClass}__selection-summary-panel-item`,
      className
    );

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
        {onRemove && (
          <div
            className={`${blockClass}__selection-summary-panel-item-remove-button-container`}
          >
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

    const titleContent = renderTitle ? renderTitle(item) : defaultTitle;
    const bodyContent = children
      ? children
      : renderContent
        ? renderContent(item)
        : defaultContent();

    if (useAccordion) {
      return (
        <div className={itemClasses} ref={ref} {...rest}>
          <Accordion align="start">
            <AccordionItem title={titleContent}>{bodyContent}</AccordionItem>
          </Accordion>
        </div>
      );
    }

    // Simple non-accordion rendering
    return (
      <div className={itemClasses} ref={ref} {...rest}>
        <div className={`${blockClass}__selection-summary-panel-item-simple`}>
          {titleContent}
          {bodyContent && (
            <div
              className={`${blockClass}__selection-summary-panel-item-content`}
            >
              {bodyContent}
            </div>
          )}
        </div>
      </div>
    );
  }
);

AddSelectSelectionSummaryPanelItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**@ts-ignore */
  item: PropTypes.object.isRequired,
  /**@ts-ignore */
  onRemove: PropTypes.func,
  removeButtonLabel: PropTypes.string,
  /**@ts-ignore */
  renderContent: PropTypes.func,
  /**@ts-ignore */
  renderTitle: PropTypes.func,
  useAccordion: PropTypes.bool,
};

AddSelectSelectionSummaryPanelItem.displayName =
  'AddSelectSelectionSummaryPanelItem';

export default AddSelectSelectionSummaryPanelItem;
