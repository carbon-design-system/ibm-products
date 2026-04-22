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
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconButton } from '@carbon/react';
import { Close } from '@carbon/react/icons';
import type { AddSelectItem } from '@carbon/ibm-products-primitives';
import { blockClass } from '../context';

/**
 * ----------------
 * AddSelectItemInfoPanel
 * ----------------
 */

export interface ItemDetailEntry {
  id?: string;
  title?: string;
  value?: string;
}

export interface AddSelectItemInfoPanelProps {
  /**
   * Panel title
   */
  title?: string;
  /**
   * Item data, array of entries, or custom content
   */
  item?: AddSelectItem | ItemDetailEntry[] | ReactNode;
  /**
   * Close button handler
   */
  onClose?: () => void;
  /**
   * Close button aria-label
   */
  closeIconDescription?: string;
  /**
   * Custom content (alternative to item prop)
   */
  children?: ReactNode;
  /**
   * Custom content renderer
   */
  renderContent?: (item: AddSelectItem) => ReactNode;
  /**
   * Optional class name
   */
  className?: string;
}

/**
 * AddSelectItemInfoPanel - Displays detailed information about a specific item
 * @example
 * ```jsx
 * <AddSelect.ItemInfoPanel
 *   title="Item details"
 *   item={item}
 *   onClose={handleClose}
 *   closeIconDescription="Close details"
 * />
 * ```
 */
const AddSelectItemInfoPanel = forwardRef<
  HTMLDivElement,
  AddSelectItemInfoPanelProps
>(
  (
    {
      title = 'Item details',
      item,
      onClose,
      closeIconDescription = 'Close',
      children,
      renderContent,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const panelClasses = cx(`${blockClass}__item-info-panel`, className);

    // Render content based on item type
    const renderItemContent = () => {
      if (children) {
        return children;
      }

      if (!item) {
        return null;
      }

      // If item is a React element, render it directly
      if (isValidElement(item)) {
        return item;
      }

      // If renderContent is provided, use it
      if (renderContent && !Array.isArray(item)) {
        return renderContent(item as AddSelectItem);
      }

      // If item is an array of ItemDetailEntry objects
      if (Array.isArray(item)) {
        return item.map((entry) => (
          <div
            key={entry.id || entry.title}
            className={`${blockClass}__item-info-panel-entry`}
          >
            <p className={`${blockClass}__item-info-panel-entry-title`}>
              {entry.title}
            </p>
            <p className={`${blockClass}__item-info-panel-entry-body`}>
              {entry.value}
            </p>
          </div>
        ));
      }

      // If item is an AddSelectItem object, render all properties
      const itemObj = item as AddSelectItem;
      const entries: ItemDetailEntry[] = [];

      // Add standard properties
      if (itemObj.title) {
        entries.push({ id: 'title', title: 'Title', value: itemObj.title });
      }
      if (itemObj.subtitle) {
        entries.push({
          id: 'subtitle',
          title: 'Subtitle',
          value: itemObj.subtitle,
        });
      }
      if (itemObj.value) {
        entries.push({ id: 'value', title: 'Value', value: itemObj.value });
      }

      // Add any additional properties
      Object.entries(itemObj).forEach(([key, val]) => {
        if (
          key !== 'id' &&
          key !== 'title' &&
          key !== 'subtitle' &&
          key !== 'value' &&
          key !== 'meta' &&
          key !== 'icon' &&
          key !== 'avatar' &&
          key !== 'children' &&
          key !== 'selected' &&
          key !== 'status'
        ) {
          entries.push({
            id: key,
            title: key.charAt(0).toUpperCase() + key.slice(1),
            value: String(val),
          });
        }
      });

      return entries.map((entry) => (
        <div key={entry.id} className={`${blockClass}__item-info-panel-entry`}>
          <p className={`${blockClass}__item-info-panel-entry-title`}>
            {entry.title}
          </p>
          <p className={`${blockClass}__item-info-panel-entry-body`}>
            {entry.value}
          </p>
        </div>
      ));
    };

    return (
      <div className={panelClasses} ref={ref} {...rest}>
        {/* Header with title and close button */}
        <div className={`${blockClass}__item-info-panel-header`}>
          <p className={`${blockClass}__item-info-panel-title`}>{title}</p>
          {onClose && (
            <IconButton
              label={closeIconDescription}
              onClick={onClose}
              kind="ghost"
              size="sm"
              className={`${blockClass}__item-info-panel-close`}
            >
              <Close size={16} />
            </IconButton>
          )}
        </div>

        {/* Body content */}
        <div className={`${blockClass}__item-info-panel-body`}>
          {renderItemContent()}
        </div>
      </div>
    );
  }
);

AddSelectItemInfoPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeIconDescription: PropTypes.string,
  /**@ts-ignore */
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.node,
  ]),
  /**@ts-ignore */
  onClose: PropTypes.func,
  /**@ts-ignore */
  renderContent: PropTypes.func,
  title: PropTypes.string,
};

AddSelectItemInfoPanel.displayName = 'AddSelectItemInfoPanel';

export default AddSelectItemInfoPanel;
