/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { OverflowMenu } from '@carbon/react';
import { FilterPanelCheckbox } from '../FilterPanelCheckbox';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--filter-panel-checkbox-with-overflow`;
const componentName = 'FilterPanelCheckboxWithOverflow';

const defaults = {
  overflowMenuProps: {},
};

/**
 * Provides a filter panel checkbox with an overflow menu.
 *
 * This component's props refer to the Carbon Checkbox,
 * just like FilterPanelCheckbox.
 *
 * Use `overflowMenuProps` for properties specific to the OverflowMenu.
 */
export let FilterPanelCheckboxWithOverflow = React.forwardRef(
  (
    {
      children,
      className,
      count,
      id,
      labelText,
      overflowMenuProps = defaults.overflowMenuProps,
      title,
      ...rest
    },
    ref
  ) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);
    // Destructure overflow menu properties.
    const { ...other } = overflowMenuProps;

    const backupRef = useRef();
    const localRef = ref || backupRef;

    const setHideButton = (activeElement) => {
      if (!menuIsOpen && !localRef.current.contains(activeElement)) {
        setShowMenuButton(false);
      }
    };

    useEffect(() => {
      setShowMenuButton(menuIsOpen);
    }, [menuIsOpen]);

    return (
      <div
        className={cx(blockClass, className, {
          [`${blockClass}--open`]: menuIsOpen,
        })}
        onBlur={({ relatedTarget }) => setHideButton(relatedTarget)}
        onFocus={() => setShowMenuButton(true)}
        onMouseEnter={() => setShowMenuButton(true)}
        onMouseLeave={() => setHideButton(document.activeElement)}
        ref={localRef}
        {...getDevtoolsProps(componentName)}
      >
        <FilterPanelCheckbox
          {...rest}
          className={cx(`${blockClass}__checkbox`)}
          count={count}
          id={id}
          labelText={labelText}
          title={title}
        />

        {showMenuButton && (
          <OverflowMenu
            open={overflowMenuProps?.open ? true : false}
            className={cx(
              `${blockClass}__overflow-button`,
              overflowMenuProps?.menuClass
            )}
            menuOptionsClass={cx(
              `${blockClass}__overflow-options`,
              overflowMenuProps?.menuOptionsClass
            )}
            aria-label={overflowMenuProps?.['aria-label']}
            iconDescription={overflowMenuProps?.['aria-label']}
            onOpen={() => setMenuIsOpen(true)}
            onClose={() => setMenuIsOpen(false)}
            flipped={overflowMenuProps?.flipped || true}
            selectorPrimaryFocus={overflowMenuProps?.selectorPrimaryFocus}
            {...other}
          >
            {children}
          </OverflowMenu>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
FilterPanelCheckboxWithOverflow = pkg.checkComponentEnabled(
  FilterPanelCheckboxWithOverflow,
  componentName
);

FilterPanelCheckboxWithOverflow.displayName = componentName;

FilterPanelCheckboxWithOverflow.propTypes = {
  /**
   * Children containing `OverflowMenuItems`.
   */
  children: PropTypes.node.isRequired,

  /**
   * Optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Number to be displayed with the checkbox.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Unique identifier.
   */
  id: PropTypes.string.isRequired,

  /**
   * Label to be displayed with the checkbox.
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Checkbox event handler.
   */
  onChange: PropTypes.func,

  /**
   * Props specific to the internal `OverflowMenu`.
   */
  overflowMenuProps: PropTypes.shape({
    ['aria-label']: PropTypes.string,
    flipped: PropTypes.bool,
    menuClass: PropTypes.string,
    menuOptionsClass: PropTypes.string,
    open: PropTypes.bool,
    selectorPrimaryFocus: PropTypes.string,
  }),

  /**
   * Optional title attribute for the label.
   */
  title: PropTypes.string,
};
