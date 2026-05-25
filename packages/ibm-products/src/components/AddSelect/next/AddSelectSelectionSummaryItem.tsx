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
  Accordion,
  AccordionItem,
  IconButton,
  type AccordionProps,
  type AccordionItemProps,
  type IconButtonProps,
} from '@carbon/react';
import { SubtractAlt } from '@carbon/react/icons';
import type { AddSelectItem } from '@carbon/ibm-products-primitives';
import { blockClass } from './context';

/**
 * ----------------
 * AddSelectSelectionSummaryItem
 * ----------------
 */

export interface AddSelectSelectionSummaryItemProps {
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
  /**
   * Additional props to pass to the Accordion component
   */
  accordionProps?: Omit<AccordionProps, 'align' | 'children'>;
  /**
   * Additional props to pass to the AccordionItem component
   */
  accordionItemProps?: Omit<AccordionItemProps, 'title' | 'children'>;
  /**
   * Additional props to pass to the remove IconButton
   */
  removeIconButtonProps?: Omit<
    IconButtonProps,
    'label' | 'onClick' | 'kind' | 'className' | 'children'
  >;
}

/**
 * AddSelectSelectionSummaryItem - Individual selected item display
 * @example
 * ```jsx
 * <AddSelect.SelectionSummaryItem
 *   item={item}
 *   useAccordion
 *   onRemove={handleRemove}
 * />
 * ```
 */
const AddSelectSelectionSummaryItem = forwardRef<
  HTMLDivElement,
  AddSelectSelectionSummaryItemProps
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
      accordionProps,
      accordionItemProps,
      removeIconButtonProps,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const itemClasses = cx(
      `${blockClass}__selection-summary-item`,
      {
        [`${blockClass}__selection-summary-item--accordion`]: useAccordion,
        [`${blockClass}__selection-summary-item--simple`]: !useAccordion,
        [`${blockClass}__selection-summary-item--template`]: renderTemplate,
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
        autoAlign
        className={`${blockClass}__selection-summary-item-remove-button`}
        {...removeIconButtonProps}
      >
        <SubtractAlt size={16} />
      </IconButton>
    ) : null;

    // Default title rendering
    const defaultTitle = (
      <div className={`${blockClass}__selection-summary-item-title-wrapper`}>
        <div className={`${blockClass}__selection-summary-item-selected-item`}>
          <p className={`${blockClass}__selection-summary-item-title`}>
            {item.title}
          </p>
          {item.subtitle && (
            <p className={`${blockClass}__selection-summary-item-subtitle`}>
              {item.subtitle}
            </p>
          )}
        </div>
        {!useAccordion && onRemove && (
          <div
            className={`${blockClass}__selection-summary-item-remove-button-container`}
          >
            {RemoveButton}
          </div>
        )}
      </div>
    );

    // Default content rendering - show all item properties except itemDetails, icon, avatar
    const defaultContent = () => {
      const { itemDetails, icon, avatar, id, title, subtitle, value, ...rest } =
        item;
      const entries = Object.entries(rest);

      if (entries.length === 0 && !value) {
        return null;
      }

      return (
        <>
          {value && (
            <div className={`${blockClass}__selection-summary-item-entry`}>
              <p className={`${blockClass}__selection-summary-item-header`}>
                value
              </p>
              <p className={`${blockClass}__selection-summary-item-body`}>
                {value}
              </p>
            </div>
          )}
          {entries.map(([key, val]) => (
            <div
              key={key}
              className={`${blockClass}__selection-summary-item-entry`}
            >
              <p className={`${blockClass}__selection-summary-item-header`}>
                {key}
              </p>
              <p className={`${blockClass}__selection-summary-item-body`}>
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
          <Accordion align="start" {...accordionProps}>
            <AccordionItem
              title={
                <div
                  className={`${blockClass}__selection-summary-item-title-wrapper`}
                >
                  {titleContent}
                  {onRemove && (
                    <div
                      className={`${blockClass}__selection-summary-item-remove-button-container`}
                    >
                      {RemoveButton}
                    </div>
                  )}
                </div>
              }
              {...accordionItemProps}
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
        <div className={`${blockClass}__selection-summary-item-simple`}>
          {defaultTitle}
          <div className={`${blockClass}__selection-summary-item-content`}>
            {defaultContent()}
          </div>
        </div>
      </div>
    );
  }
);

AddSelectSelectionSummaryItem.propTypes = {
  /**@ts-ignore */
  accordionItemProps: PropTypes.object,
  /**@ts-ignore */
  accordionProps: PropTypes.object,
  className: PropTypes.string,
  /**@ts-ignore */
  item: PropTypes.object.isRequired,
  /**@ts-ignore */
  onRemove: PropTypes.func,
  removeButtonLabel: PropTypes.string,
  /**@ts-ignore */
  removeIconButtonProps: PropTypes.object,
  /**@ts-ignore */
  renderContent: PropTypes.func,
  /**@ts-ignore */
  renderTemplate: PropTypes.func,
  /**@ts-ignore */
  renderTitle: PropTypes.func,
  useAccordion: PropTypes.bool,
};

AddSelectSelectionSummaryItem.displayName = 'AddSelectSelectionSummaryItem';

export default AddSelectSelectionSummaryItem;
