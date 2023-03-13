//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AddSelectBody } from './AddSelectBody';
import { normalize, getGlobalFilterValues } from './add-select-utils';
const componentName = 'AddSelect';

export let AddSelect = forwardRef(({ items, globalFilters, ...props }, ref) => {
  const useNormalizedItems = !!items.entries.find((item) => item.children);
  const normalizedItems = useNormalizedItems ? normalize(items) : null;
  const globalFilterOpts =
    props.multi && globalFilters?.length
      ? getGlobalFilterValues(globalFilters, normalizedItems)
      : null;
  const defaultModifiers =
    props.multi && items.modifiers
      ? items.entries.map((item) => {
          const modifierAttribute = items.modifiers.id;
          return {
            id: item.id,
            [modifierAttribute]: item[modifierAttribute],
          };
        })
      : [];
  return (
    <AddSelectBody
      {...props}
      ref={ref}
      items={items}
      normalizedItems={normalizedItems}
      useNormalizedItems={useNormalizedItems}
      globalFilterOpts={globalFilterOpts}
      defaultModifiers={defaultModifiers}
    />
  );
});

AddSelect.propTypes = {
  className: PropTypes.string,
  clearFiltersText: PropTypes.string,
  closeIconDescription: PropTypes.string.isRequired,
  columnInputPlaceholder: PropTypes.string,
  description: PropTypes.string.isRequired,
  filterByLabel: PropTypes.string,
  globalFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  globalFiltersIconDescription: PropTypes.string,
  globalFiltersLabel: PropTypes.string,
  globalFiltersPlaceholderText: PropTypes.string,
  globalFiltersPrimaryButtonText: PropTypes.string,
  globalFiltersSecondaryButtonText: PropTypes.string,
  globalSearchLabel: PropTypes.string.isRequired,
  globalSearchPlaceholder: PropTypes.string,
  globalSortBy: PropTypes.array,
  illustrationTheme: PropTypes.oneOf(['light', 'dark']),
  influencerTitle: PropTypes.string,
  items: PropTypes.shape({
    modifiers: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      options: PropTypes.array,
    }),
    sortBy: PropTypes.array,
    filterBy: PropTypes.array,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.shape({
          alt: PropTypes.string,
          icon: PropTypes.func,
          src: PropTypes.string,
          theme: PropTypes.oneOf(['light', 'dark']),
        }),
        children: PropTypes.object,
        icon: PropTypes.func,
        id: PropTypes.string.isRequired,
        meta: PropTypes.oneOfType([
          PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              title: PropTypes.string,
              value: PropTypes.string,
            })
          ),
          PropTypes.node,
        ]),
        subtitle: PropTypes.string,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  itemsLabel: PropTypes.string.isRequired,
  metaIconDescription: PropTypes.string,
  metaPanelTitle: PropTypes.string,
  multi: PropTypes.bool.isRequired,
  navIconDescription: PropTypes.string,
  noResultsDescription: PropTypes.string.isRequired,
  noResultsTitle: PropTypes.string.isRequired,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onCloseButtonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSubmitButtonText: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  /**
   * portal target for the all tags modal
   */
  portalTarget: PropTypes.node,
<<<<<<< HEAD
<<<<<<< HEAD
  searchResultsLabel: PropTypes.string,
=======
  searchResultsTitle: PropTypes.string,
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  sortByLabel: PropTypes.string,
=======
  searchResultsTitle: PropTypes.string,
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
  title: PropTypes.string.isRequired,
};

AddSelect.defaultProps = {
  closeIconDescription: '',
  description: '',
  itemsLabel: '',
  items: {
    entries: [],
  },
  multi: false,
  noResultsDescription: '',
  noResultsTitle: '',
  onClose: () => {},
  onCloseButtonText: '',
  onSubmit: () => {},
  onSubmitButtonText: '',
  open: false,
  title: '',
};

AddSelect.displayName = componentName;
