//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Checkbox,
  RadioButton,
  StructuredListRow,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListCell,
  TextInput,
  Tag,
} from 'carbon-components-react';
import { ChevronRight16 } from '@carbon/icons-react';
import { Tearsheet, TearsheetNarrow } from '../../components/Tearsheet';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
const componentName = 'AddSelect';

export let AddSelect = forwardRef(
  (
    {
      actions,
      className,
      description,
      influencerTitle,
      inputPlaceholder,
      items,
      itemsLabel,
      multi,
      noResultsDescription,
      noResultsTitle,
      noSelectionDescription,
      noSelectionTitle,
      onSearchFilter,
      open,
      title,
      ...rest
    },
    ref
  ) => {
    const blockClass = `${pkg.prefix}--add-select`;
    const commonTearsheetProps = {
      open,
      title,
      actions,
      description,
      closeIconDescription: 'temp description',
    };

    // hooks
    const [filteredItems, setFilteredItems] = useState([]);
    const [singleSelection, setSingleSelection] = useState('');
    const [multiSelection, setMultiSelection] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // filter items as a search term is entered
    useEffect(() => {
      const results = searchTerm
        ? items.filter((item) => {
            // if user provides their own filter function use that
            if (onSearchFilter) {
              return onSearchFilter(item, searchTerm);
            }
            // otherwise use the default label filter
            return item.label.includes(searchTerm);
          })
        : items;
      setFilteredItems(results);
    }, [items, onSearchFilter, searchTerm]);

    // handlers
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSingleSelection = (value) => {
      setSingleSelection(value);
    };

    const handleMultiSelection = (value, checked) => {
      if (checked) {
        const newValues = [...multiSelection, value];
        setMultiSelection(newValues);
      } else {
        const newValues = multiSelection.filter((v) => v !== value);
        setMultiSelection(newValues);
      }
    };

    const onNavigateItem = () => {
      // TODO figure out navigation
    };

    // sidebar
    const influencer = (
      <div className={`${blockClass}__influencer`}>
        <div className={`${blockClass}__influencer-header`}>
          <p className={`${blockClass}__influencer-title`}>{influencerTitle}</p>
          <Tag type="gray" size="sm">
            {multiSelection.length}
          </Tag>
        </div>
        <div className={`${blockClass}__influencer-body`}>
          {multiSelection.length > 0 ? (
            <p>content</p>
          ) : (
            <NoDataEmptyState
              subtitle={noSelectionDescription}
              title={noSelectionTitle}
              size="sm"
            />
          )}
        </div>
      </div>
    );

    // main content
    const body = (
      <>
        <div className={`${blockClass}__header`}>
          <TextInput
            id="temp-id"
            labelText="temp label"
            placeholder={inputPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className={`${blockClass}__items-label-container`}>
            <p className={`${blockClass}__items-label`}>{itemsLabel}</p>
            <Tag type="gray" size="sm">
              {filteredItems.length}
            </Tag>
          </div>
        </div>
        {filteredItems.length > 0 ? (
          <div className={`${blockClass}__selections-wrapper`}>
            <StructuredListWrapper
              selection
              className={`${blockClass}__selections`}
            >
              <StructuredListBody>
                {filteredItems.map((item) => (
                  <StructuredListRow key={item.id}>
                    <StructuredListCell>
                      <div className={`${blockClass}__selections-cell-wrapper`}>
                        {multi ? (
                          <Checkbox
                            className={`${blockClass}__selections-checkbox`}
                            onChange={(value) =>
                              handleMultiSelection(item.value, value)
                            }
                            labelText={item.label}
                            id={item.id}
                            checked={multiSelection.includes(item.value)}
                          />
                        ) : (
                          <RadioButton
                            className={`${blockClass}__selections-radio`}
                            name="add-select-selections"
                            id={item.id}
                            value={item.value}
                            labelText={item.label}
                            onChange={handleSingleSelection}
                            selected={item.value === singleSelection}
                          />
                        )}
                        {item.children && (
                          <ChevronRight16 onClick={onNavigateItem} />
                        )}
                      </div>
                    </StructuredListCell>
                  </StructuredListRow>
                ))}
              </StructuredListBody>
            </StructuredListWrapper>
          </div>
        ) : (
          <div className={`${blockClass}__body`}>
            <NoDataEmptyState
              subtitle={noResultsDescription}
              title={noResultsTitle}
            />
          </div>
        )}
      </>
    );

    return (
      <div ref={ref} className={cx(className, blockClass)} {...rest}>
        {multi ? (
          <Tearsheet
            {...commonTearsheetProps}
            influencer={multi && influencer}
            influencerPosition="right"
          >
            {body}
          </Tearsheet>
        ) : (
          <TearsheetNarrow {...commonTearsheetProps}>{body}</TearsheetNarrow>
        )}
      </div>
    );
  }
);

AddSelect.propTypes = {
  actions: PropTypes.array,
  className: PropTypes.string,
  description: PropTypes.string,
  influencerTitle: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  itemsLabel: PropTypes.string,
  multi: PropTypes.bool,
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  onSearchFilter: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};

AddSelect.defaultProps = {
  items: [],
};

AddSelect.displayName = componentName;
