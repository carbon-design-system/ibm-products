/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { Checkbox } from '@carbon/react';
import { FilterPanelLabel } from '../FilterPanelLabel';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--filter-panel-checkbox`;
const componentName = 'FilterPanelCheckbox';

/**
 * Provides a checkbox, label, and count.
 */
export let FilterPanelCheckbox = React.forwardRef(
  (
    { className, count, labelText, labelTitle, setCountAriaLabel, ...rest },
    ref
  ) => {
    return (
      <Checkbox
        {...rest}
        className={cx(blockClass, className)}
        labelText={
          <FilterPanelLabel
            count={count}
            setCountAriaLabel={setCountAriaLabel}
            labelTitle={labelTitle || labelText}
          >
            {labelText}
          </FilterPanelLabel>
        }
        ref={ref}
        {...getDevtoolsProps(componentName)}
      />
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
FilterPanelCheckbox = pkg.checkComponentEnabled(
  FilterPanelCheckbox,
  componentName
);

FilterPanelCheckbox.displayName = componentName;

FilterPanelCheckbox.propTypes = {
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
  labelText: PropTypes.string.isRequired,

  /**
   * Alternate title attribute for the label,
   * else `labelText` will be used by default.
   */
  labelTitle: PropTypes.string,

  /**
   * Optional callback function to populate the count's aria label.
   */
  setCountAriaLabel: PropTypes.func,
};
