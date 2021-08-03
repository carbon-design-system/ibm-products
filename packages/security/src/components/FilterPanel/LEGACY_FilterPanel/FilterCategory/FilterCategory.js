/**
 * @file Filter Category.
 * @copyright IBM Security 2019, 2021
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '../../../Accordion';
import {
  filterCategoryPropTypes,
  filterDataPropTypes,
} from '../FilterPanelUtilities';
import { getComponentNamespace } from '../../../../globals/namespace';
import FilterSubcategory from '../FilterSubcategory/FilterSubcategory';
import * as defaultLabels from '../../../../globals/nls';

const namespace = getComponentNamespace('filter-category');

const FilterCategory = ({
  filterData,
  onChange,
  category,
  labels,
  filtersExpandLabel,
  filtersCollapseLabel,
}) => {
  const componentLabels = {
    ...defaultLabels.labels,
    ...defaultLabels.filterFalsey({
      FILTER_PANEL_CATEGORY_EXPAND_LABEL: filtersExpandLabel,
      FILTER_PANEL_CATEGORY_COLLAPSE_LABEL: filtersCollapseLabel,
    }),
    ...labels,
  };

  return (
    <div className={namespace}>
      <h2 className={`${namespace}__title`}>
        {category.name}{' '}
        <span className={`${namespace}__count`}>{category.count}</span>
      </h2>
      <Accordion>
        {category.subcategories
          .map((subcategoryId) => filterData.subcategories[subcategoryId])
          .filter(
            (subcategory) =>
              subcategory.filters.length > 0 && subcategory.count > 0
          )
          .map((subcategory) => (
            <FilterSubcategory
              key={subcategory.id}
              subcategory={subcategory}
              filterData={filterData}
              onChange={onChange}
              labels={componentLabels}
            />
          ))}
      </Accordion>
    </div>
  );
};

FilterCategory.propTypes = {
  /** @type {FilterCategory} Category to render */
  category: filterCategoryPropTypes.isRequired,

  /** @type {FilterData}  Filter data to used to render panel */
  filterData: filterDataPropTypes.isRequired,

  /** @type {string} Label for expanded filters list to collapse */
  filtersCollapseLabel: PropTypes.string,

  /** @type {string} Label for truncated filters list to expand */
  filtersExpandLabel: PropTypes.string,

  /** @type {object} Labels for filter panel and search */
  labels: defaultLabels.propType,

  /** @type {(filter: Filter) => {}} Callback function when any filter is toggled */
  onChange: PropTypes.func,
};

FilterCategory.defaultProps = {
  onChange: () => {},
  filtersExpandLabel: '',
  filtersCollapseLabel: '',
  labels: {},
};

export default FilterCategory;
