//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  StructuredListRow,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListCell,
  // StructuredListInput,
  TextInput,
  Tag,
} from 'carbon-components-react';
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
    const [selected] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    // handlers
    const onSearchHandler = (e) => {
      const { value } = e.target;
      setSearchTerm(value);
      if (onSearchFilter) {
        onSearchFilter(value);
      }
    };

    // data manipulation
    const getFilteredItems = () => {
      // if the user uses their own filter then they provide the filtered items
      if (onSearchFilter) {
        return items;
      }
      // by default, just filter results by their label from a single search term
      return items.filter((i) => i.label.includes(searchTerm));
    };
    const filteredResults = getFilteredItems();

    // sidebar
    const influencer = (
      <div className={`${blockClass}__influencer`}>
        <div className={`${blockClass}__influencer-header`}>
          <p className={`${blockClass}__influencer-title`}>{influencerTitle}</p>
          <Tag type="gray" size="sm">
            {selected}
          </Tag>
        </div>
        <div className={`${blockClass}__influencer-body`}>
          {selected > 0 ? (
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
            onChange={onSearchHandler}
          />
          <div className={`${blockClass}__items-label-container`}>
            <p className={`${blockClass}__items-label`}>{itemsLabel}</p>
            <Tag type="gray" size="sm">
              {filteredResults.length}
            </Tag>
          </div>
        </div>
        {filteredResults.length > 0 ? (
          <StructuredListWrapper
            selection
            className={`${blockClass}__selections`}
          >
            <StructuredListBody>
              {filteredResults.map((item) => (
                <StructuredListRow key={item.id}>
                  <StructuredListCell>
                    <p>{item.label}</p>
                  </StructuredListCell>
                </StructuredListRow>
              ))}
            </StructuredListBody>
          </StructuredListWrapper>
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
      label: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
