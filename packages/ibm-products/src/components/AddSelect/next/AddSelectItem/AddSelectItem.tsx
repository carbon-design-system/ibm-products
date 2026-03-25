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
  useContext,
  MouseEvent,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Checkbox, RadioButton } from '@carbon/react';
import { ChevronRight } from '@carbon/react/icons';
import { blockClass, AddSelectContext } from './context';

/**
 * ----------------
 * AddSelectItem
 * ----------------
 */

export interface AddSelectItemProps {
  /**
   * Unique identifier for the item
   */
  itemId: string;
  /**
   * Item title
   */
  title: string;
  /**
   * Item subtitle
   */
  subtitle?: string;
  /**
   * Item value
   */
  value: string;
  /**
   * Whether the item is selected
   */
  selected?: boolean;
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
  /**
   * Whether the item has children (for navigation)
   */
  hasChildren?: boolean;
  /**
   * Parent ID for hierarchical navigation
   */
  parentId?: string;
  /**
   * Optional icon slot
   */
  icon?: ReactNode;
  /**
   * Optional metadata slot
   */
  meta?: ReactNode;
  /**
   * Optional class name
   */
  className?: string;
}

const AddSelectItem = forwardRef<HTMLDivElement, AddSelectItemProps>(
  (
    {
      itemId,
      title,
      subtitle,
      value,
      selected = false,
      disabled = false,
      hasChildren = false,
      parentId = '',
      icon,
      meta,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { multi, onItemSelect, onNavigate, selectedItems } =
      useContext(AddSelectContext);

    // Use context's selected state if available
    const isSelected = selectedItems?.has(itemId) ?? selected;

    const handleSelect = () => {
      if (disabled) {
        return;
      }
      const newSelected = !isSelected;
      onItemSelect?.(itemId, newSelected, value);
    };

    const handleNavigate = (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (!hasChildren) {
        return;
      }
      onNavigate?.(itemId, title, parentId);
    };

    const rowClasses = cx(`${blockClass}-item__row`, className, {
      [`${blockClass}-item__row--selected`]: isSelected,
      [`${blockClass}-item__row--disabled`]: disabled,
    });

    return (
      <div
        className={rowClasses}
        role="row"
        aria-selected={isSelected}
        tabIndex={-1}
        data-has-children={hasChildren || undefined}
        ref={ref}
        {...rest}
      >
        <div className={`${blockClass}-item__cell`} role="gridcell">
          <div className={`${blockClass}-item__cell-wrapper`}>
            {multi ? (
              <Checkbox
                id={`checkbox-${itemId}`}
                checked={isSelected}
                disabled={disabled}
                labelText={title}
                onChange={handleSelect}
                tabIndex={-1}
              />
            ) : (
              <RadioButton
                id={`radio-${itemId}`}
                checked={isSelected}
                disabled={disabled}
                labelText={title}
                value={itemId}
                onChange={handleSelect}
                tabIndex={-1}
              />
            )}

            <div className={`${blockClass}-item__content`}>
              {icon && <div className={`${blockClass}-item__icon`}>{icon}</div>}
              <div className={`${blockClass}-item__text`}>
                <div className={`${blockClass}-item__title`}>{title}</div>
                {subtitle && (
                  <div className={`${blockClass}-item__subtitle`}>
                    {subtitle}
                  </div>
                )}
              </div>
              {meta && <div className={`${blockClass}-item__meta`}>{meta}</div>}
            </div>

            {hasChildren && (
              <div
                className={`${blockClass}-item__nav-indicator`}
                onClick={handleNavigate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (hasChildren) {
                      onNavigate?.(itemId, title, parentId);
                    }
                  }
                }}
                role="button"
                tabIndex={-1}
                aria-label="Navigate to children"
              >
                <ChevronRight size={16} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

AddSelectItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasChildren: PropTypes.bool,
  icon: PropTypes.node,
  itemId: PropTypes.string.isRequired,
  meta: PropTypes.node,
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

AddSelectItem.displayName = 'AddSelectItem';

export default AddSelectItem;
