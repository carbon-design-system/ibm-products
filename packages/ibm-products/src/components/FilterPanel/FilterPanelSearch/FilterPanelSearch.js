/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { Search } from '@carbon/react';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--filter-panel-search`;
const componentName = 'FilterPanelSearch';

/**
 * An input field and container to show results.
 */
export let FilterPanelSearch = React.forwardRef(
  ({ children, className, labelText, ...rest }, ref) => {
    const [resultsVisible, setResultsVisible] = useState(false);
    let timer;

    // Hide results with a delay, giving enough time
    // for any "show" to trigger earlier.
    const hideResults = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setResultsVisible(false);
      }, 300);
    };

    // Show results immediately.
    const showResults = () => {
      clearTimeout(timer);
      setResultsVisible(true);
    };

    // On unmount, clear the timer.
    useEffect(() => {
      return clearTimeout(timer);
    }, [timer]);

    return (
      <div
        className={`${blockClass}__container`}
        onBlur={hideResults}
        onFocus={showResults}
      >
        <Search
          {...rest}
          className={cx(`${blockClass}__input`, className)}
          labelText={labelText}
          ref={ref}
          {...getDevtoolsProps(componentName)}
        />
        {resultsVisible && children && (
          <div className={`${blockClass}__results`}>{children}</div>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
FilterPanelSearch = pkg.checkComponentEnabled(FilterPanelSearch, componentName);

FilterPanelSearch.displayName = componentName;

FilterPanelSearch.propTypes = {
  /**
   * Provide the contents of the FilterPanelSearch.
   */
  children: PropTypes.node,

  /**
   * Optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The label text for the Search icon.
   */
  labelText: PropTypes.node.isRequired,
};
