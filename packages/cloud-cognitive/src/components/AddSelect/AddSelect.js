//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TextInput, Tag } from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '../../components/Tearsheet';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
import { AddSelectSidebar } from './AddSelectSidebar';
import { AddSelectBreadcrumbs } from './AddSelectBreadcrumbs';
import { AddSelectList } from './AddSelectList';
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
      removeIconDescription,
      textInputLabel,
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
        return item.title.toLowerCase().includes(searchTerm);
      });
      return results;
    };

    const filteredItems = getFilteredItems();

    // main content
    const body = (
      <>
        <div className={`${blockClass}__header`}>
          <TextInput
            id="temp-id"
            labelText={textInputLabel}
            placeholder={inputPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className={`${blockClass}__items-label-container`}>
            {path.length ? (
              <AddSelectBreadcrumbs
                itemsLabel={itemsLabel}
                path={path}
                setPath={setPath}
              />
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
          <AddSelectList
            filteredItems={filteredItems}
            multi={multi}
            multiSelection={multiSelection}
            path={path}
            setMultiSelection={setMultiSelection}
            setPath={setPath}
            setSingleSelection={setSingleSelection}
            singleSelection={singleSelection}
          />
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

    const sidebarProps = {
      influencerTitle,
      items,
      multiSelection,
      noSelectionDescription,
      noSelectionTitle,
      removeIconDescription,
      setMultiSelection,
    };

    const classNames = cx(className, blockClass, {
      [`${blockClass}__single`]: !multi,
      [`${blockClass}__multi`]: multi,
    });

    return (
      <div ref={ref} className={classNames} {...rest}>
        {multi ? (
          <Tearsheet
            {...commonTearsheetProps}
            influencer={multi && <AddSelectSidebar {...sidebarProps} />}
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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
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
  removeIconDescription: PropTypes.string,
  textInputLabel: PropTypes.string,
  title: PropTypes.string,
};

AddSelect.defaultProps = {
  items: [],
};

AddSelect.displayName = componentName;
