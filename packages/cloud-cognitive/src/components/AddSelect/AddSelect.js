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
  Checkbox,
  RadioButton,
  StructuredListRow,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListCell,
  TextInput,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
} from 'carbon-components-react';
import { ChevronRight16 } from '@carbon/icons-react';
import { Tearsheet, TearsheetNarrow } from '../../components/Tearsheet';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
const componentName = 'AddSelect';

export let AddSelect = forwardRef(
  (
    {
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
      onClose,
      onCloseButtonText,
      onSearchFilter,
      onSubmit,
      onSubmitButtonText,
      open,
      title,
      ...rest
    },
    ref
  ) => {
    const blockClass = `${pkg.prefix}--add-select`;

    // hooks
    const [path, setPath] = useState([]);
    const [singleSelection, setSingleSelection] = useState('');
    const [multiSelection, setMultiSelection] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const onNavigateItem = ({ id, label }) => {
      setPath([...path, { id, label }]);
    };

    // item filtering
    const getFilteredItems = () => {
      const hasPath = path.length > 0;
      /**
       * how to traverse the levels of items-
       * the path represents the ids of each level / item / breadcrumb
       * using this path we can drill down into the items until we get to the last one the user selected
       */
      const itemsToFilter = hasPath
        ? path.reduce(
            (prev, cur) => prev.find((item) => item.id === cur.id).children,
            items
          )
        : items;
      const results = itemsToFilter.filter((item) => {
        if (!searchTerm) {
          return item;
        }
        // if user provides their own filter function use that
        if (onSearchFilter) {
          return onSearchFilter(item, searchTerm);
        }
        // otherwise use the default label filter
        return item.label.toLowerCase().includes(searchTerm);
      });
      return results;
    };

    const filteredItems = getFilteredItems();

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

    // breadcrumbs
    const onCrumbClick = (id) => {
      const newPath = [...path];
      const pathIdx = newPath.findIndex((entry) => entry.id === id);
      const finalPath = newPath.splice(0, pathIdx + 1);
      setPath(finalPath);
    };

    const getCrumbs = () =>
      path.map((entry, idx, arr) => {
        const isCurrentPage = idx === arr.length - 1;
        const clickHandler = () => {
          if (!isCurrentPage) {
            onCrumbClick(entry.id);
          }
        };
        return (
          <BreadcrumbItem
            key={entry.id}
            isCurrentPage={isCurrentPage}
            onClick={clickHandler}
          >
            {entry.label}
          </BreadcrumbItem>
        );
      });

    const crumbs = getCrumbs();

    const resetPath = () => {
      setPath([]);
    };

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
            {path.length ? (
              <Breadcrumb noTrailingSlash>
                <BreadcrumbItem onClick={resetPath}>
                  {itemsLabel}
                </BreadcrumbItem>
                {crumbs}
              </Breadcrumb>
            ) : (
              <p className={`${blockClass}__items-label`}>{itemsLabel}</p>
            )}
            <Tag
              type="gray"
              size="sm"
              className={`${blockClass}__items-label-tag`}
            >
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
                          <ChevronRight16
                            onClick={() => onNavigateItem(item)}
                          />
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

    const commonTearsheetProps = {
      open,
      title,
      description,
      closeIconDescription: 'temp description',
      actions: [
        {
          label: onCloseButtonText,
          kind: 'secondary',
          onClick: onClose,
        },
        {
          label: onSubmitButtonText,
          kind: 'primary',
          onClick: onSubmit,
          disabled: multi ? multiSelection.length === 0 : !singleSelection,
        },
      ],
    };

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
  onClose: PropTypes.func,
  onCloseButtonText: PropTypes.string,
  onSearchFilter: PropTypes.func,
  onSubmit: PropTypes.func,
  onSubmitButtonText: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
};

AddSelect.defaultProps = {
  items: [],
};

AddSelect.displayName = componentName;
