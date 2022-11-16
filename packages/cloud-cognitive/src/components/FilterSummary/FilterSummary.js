import { Button } from 'carbon-components-react';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TagSet } from '../TagSet';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--filter-summary`;

let FilterSummary = React.forwardRef(
  (
    {
      className = '',
      clearFiltersText = 'Clear filters',
      clearFilters = () => {},
      filters = {},
    },
    ref
  ) => {
    const tagFilters = Object.keys(filters).map((filterType) => ({
      type: 'gray',
      label: `${filterType}: ${filters[filterType]}`,
    }));

    return (
      <div ref={ref} className={cx([blockClass, className])}>
        <TagSet
          allTagsModalSearchLabel="Search all tags"
          allTagsModalSearchPlaceholderText="Search all tags"
          allTagsModalTitle="All tags"
          showAllTagsLabel="View all tags"
          tags={tagFilters}
        />
        <Button kind="ghost" size="sm" onClick={clearFilters}>
          {clearFiltersText}
        </Button>
      </div>
    );
  }
);

FilterSummary.displayName = 'FilterSummary';

FilterSummary.propTypes = {
  className: PropTypes.string,
  clearFilters: PropTypes.func.isRequired,
  clearFiltersText: PropTypes.string,
  filters: PropTypes.object.isRequired,
};

export default FilterSummary;
