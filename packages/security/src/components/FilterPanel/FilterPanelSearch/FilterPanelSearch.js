/**
 * @file Filter panel search component.
 * @copyright IBM Security 2020 - 2021
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../../globals/namespace';
import { useComponentFocus } from '../../../globals/utils/focus';

import Search from '../../Search';

const namespace = getComponentNamespace('filter-panel-search');

const FilterPanelSearch = ({ children, className, labelText, ...other }) => {
  const [displayResults, setDisplayResults] = React.useState(false);
  const { createFocusHandler, createBlurHandler } = useComponentFocus(300);

  const handleFocus = createFocusHandler(() => {
    setDisplayResults(true);
  });

  const handleBlur = createBlurHandler(() => {
    setDisplayResults(false);
  });

  return (
    <div className={namespace} onBlur={handleBlur} onFocus={handleFocus}>
      <Search
        className={classnames(`${namespace}__input`, className)}
        aria-label={labelText}
        labelText={labelText}
        size="sm"
        {...other}
      />

      {displayResults && children && (
        <div className={`${namespace}__results`}>{children}</div>
      )}
    </div>
  );
};

FilterPanelSearch.propTypes = {
  /** Results container content */
  children: PropTypes.node,

  /** Optional class name */
  className: PropTypes.string,

  /** Provide the label text for the [`Search`](https://react.carbondesignsystem.com/?path=/docs/components-search) */
  labelText: Search.propTypes.labelText,
};

FilterPanelSearch.defaultProps = {
  className: undefined,
  children: undefined,
};

export default FilterPanelSearch;
