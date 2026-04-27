/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ForwardedRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass } from '../context';

/**
 * ----------------
 * AddSelectSidePanel
 * ----------------
 */

export interface AddSelectSidePanelProps {
  /**
   * Content to display in the side panel
   */
  children: ReactNode;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Width variant for the side panel
   */
  width?: 'narrow' | 'default' | 'wide';
}

/**
 * AddSelectSidePanel - Optional wrapper component for side panel area
 * Provides consistent layout and styling for the side panel
 * @example
 * ```jsx
 * <AddSelect.SidePanel width="default">
 *   <AddSelect.SelectionSummaryPanel {...props} />
 * </AddSelect.SidePanel>
 * ```
 */
const AddSelectSidePanel = forwardRef<HTMLDivElement, AddSelectSidePanelProps>(
  (
    { children, className, width = 'default', ...rest },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const sidePanelClasses = cx(
      `${blockClass}__side-panel`,
      `${blockClass}__side-panel--${width}`,
      className
    );

    return (
      <div className={sidePanelClasses} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

AddSelectSidePanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOf(['narrow', 'default', 'wide']),
};

AddSelectSidePanel.displayName = 'AddSelectSidePanel';

export default AddSelectSidePanel;
