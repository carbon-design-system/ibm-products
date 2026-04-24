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
import { Checkbox, RadioButton, IconButton } from '@carbon/react';
import { ChevronRight, View } from '@carbon/react/icons';
import { blockClass, AddSelectContext } from '../context';

/**
 * ----------------
 * AddSelectRow
 * ----------------
 */

export interface AddSelectRowProps {
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
   * Whether to show the info panel view icon for this item
   */
  hasInfoPanel?: boolean;
  /**
   * Callback when info panel view icon is clicked
   */
  onInfoPanelClick?: (itemId: string) => void;
  /**
   * Description for the info panel icon button
   */
  infoPanelIconDescription?: string;
  /**
   * Whether the info panel is currently open for this item
   */
  infoPanelOpen?: boolean;
  /**
   * Optional class name
   */
  className?: string;
}

const AddSelectRow = forwardRef<HTMLDivElement, AddSelectRowProps>(
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
      hasInfoPanel = false,
      onInfoPanelClick,
      infoPanelIconDescription = 'View details',
      infoPanelOpen = false,
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

    const handleInfoPanelClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onInfoPanelClick?.(itemId);
    };

    const rowClasses = cx(`${blockClass}-row`, className, {
      [`${blockClass}-row--selected`]: isSelected,
      [`${blockClass}-row--disabled`]: disabled,
      [`${blockClass}-row-info-panel--selected`]: infoPanelOpen,
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
        <div className={`${blockClass}-row__cell`} role="gridcell">
          <div className={`${blockClass}-row__cell-wrapper`}>
            {multi ? (
              <Checkbox
                id={`checkbox-${itemId}`}
                className={`${blockClass}-row__checkbox`}
                checked={isSelected}
                disabled={disabled}
                labelText={title}
                hideLabel
                onChange={handleSelect}
              />
            ) : (
              <RadioButton
                id={`radio-${itemId}`}
                className={`${blockClass}-row__radio`}
                checked={isSelected}
                disabled={disabled}
                labelText={title}
                hideLabel
                value={itemId}
                onChange={handleSelect}
              />
            )}

            <div className={`${blockClass}-row__content`}>
              {icon && <div className={`${blockClass}-row__icon`}>{icon}</div>}
              <div className={`${blockClass}-row__text`}>
                <div className={`${blockClass}-row__title`}>{title}</div>
                {subtitle && (
                  <div className={`${blockClass}-row__subtitle`}>
                    {subtitle}
                  </div>
                )}
              </div>
            </div>

            {hasInfoPanel && (
              <IconButton
                label={infoPanelIconDescription}
                onClick={handleInfoPanelClick}
                kind="ghost"
                size="sm"
                className={`${blockClass}-row__view-info-panel`}
              >
                <View size={16} />
              </IconButton>
            )}

            {hasChildren && (
              <div
                className={`${blockClass}-row__nav-indicator`}
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

AddSelectRow.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasChildren: PropTypes.bool,
  hasInfoPanel: PropTypes.bool,
  icon: PropTypes.node,
  infoPanelIconDescription: PropTypes.string,
  infoPanelOpen: PropTypes.bool,
  itemId: PropTypes.string.isRequired,
  /**@ts-ignore */
  onInfoPanelClick: PropTypes.func,
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

AddSelectRow.displayName = 'AddSelectRow';

export default AddSelectRow;
