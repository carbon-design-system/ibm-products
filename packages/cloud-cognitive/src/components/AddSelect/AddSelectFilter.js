//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import {
  Button,
  ButtonSet,
  Dropdown,
  TextInput,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
import { Filter16 } from '@carbon/icons-react';
import { pkg } from '../../settings';
const componentName = 'AddSelectFilter';

export let AddSelectFilter = ({
  filterOpts,
  handleFilter,
  handleSearch,
  iconDescription,
  inputLabel,
  inputPlaceholder,
  multi,
  placeholder,
  primaryButtonText,
  searchTerm,
  secondaryButtonText,
}) => {
  const [filters, setFilters] = useState({});
  const [open, setOpen] = useState(false);

  const blockClass = `${pkg.prefix}--add-select__global-filter`;

  const searchHandler = (e) => {
    handleSearch(e.target.value);
  };

  const onchangeHandler = ({ selectedItem }, id) => {
    setFilters({
      ...filters,
      [id]: selectedItem,
    });
  };

  const applyFilters = () => {
    handleFilter(filters);
  };

  const resetFilters = () => {
    setFilters({});
  };

  const getSelectedItem = (id) => {
    return filters[id] || '';
  };

  const showFilter = multi && filterOpts?.length > 0;

  return (
    <div className={`${blockClass}-search`}>
      <TextInput
        id="temp-id"
        labelText={inputLabel}
        placeholder={inputPlaceholder}
        value={searchTerm}
        onChange={searchHandler}
      />
      {showFilter && (
        <Button
          renderIcon={Filter16}
          hasIconOnly
          kind="ghost"
          onClick={() => setOpen(!open)}
          iconDescription={iconDescription}
          className={`${blockClass}-toggle`}
          size="md"
        />
      )}
      {open && (
        <div className={`${blockClass}`}>
          <div className={`${blockClass}-content`}>
            <p>Filters</p>
            <div className={`${blockClass}-opts`}>
              {filterOpts.map((filterOpts) => (
                <Dropdown
                  id={filterOpts.id}
                  key={filterOpts.id}
                  titleText={filterOpts.label}
                  items={filterOpts.opts}
                  light
                  onChange={(value) => onchangeHandler(value, filterOpts.id)}
                  selectedItem={getSelectedItem(filterOpts.id)}
                  label={placeholder}
                />
              ))}
            </div>
          </div>
          <ButtonSet className={`${blockClass}-button-set`}>
            <Button
              kind="secondary"
              onClick={resetFilters}
              className={`${blockClass}-button`}
            >
              {secondaryButtonText}
            </Button>
            <Button
              kind="primary"
              onClick={applyFilters}
              className={`${blockClass}-button`}
            >
              {primaryButtonText}
            </Button>
          </ButtonSet>
        </div>
      )}
    </div>
  );
};

AddSelectFilter.propTypes = {
  filterOpts: PropTypes.array,
  handleFilter: PropTypes.func,
  handleSearch: PropTypes.func,
  iconDescription: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  multi: PropTypes.bool,
  placeholder: PropTypes.string,
  primaryButtonText: PropTypes.string,
  searchTerm: PropTypes.string,
  secondaryButtonText: PropTypes.string,
};

AddSelectFilter.displayName = componentName;
