//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { ForwardedRef, ReactNode, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AddSelectBody } from './AddSelectBody';
import { normalize, getGlobalFilterValues } from './add-select-utils';
import { Filter, Item, Theme } from './types';
const componentName = 'AddSelect';

export interface AddSelectProps {
  className?: string;
  clearFiltersText?: string;
  closeIconDescription?: string;
  columnInputPlaceholder?: string;
  description?: string;
  filterByLabel?: string;
  globalFilters?: Filter[];
  globalFiltersIconDescription?: string;
  globalFiltersLabel?: string;
  globalFiltersPlaceholderText?: string;
  globalFiltersPrimaryButtonText?: string;
  globalFiltersSecondaryButtonText?: string;
  globalSearchLabel: string;
  globalSearchPlaceholder?: string;
  globalSortBy?: Array<any>;
  illustrationTheme?: Theme;
  influencerTitle?: string;
  items: Item;
  itemsLabel?: string;
  metaIconDescription?: string;
  metaPanelTitle?: string;
  multi?: boolean;
  navIconDescription?: string;
  noResultsDescription: string;
  noResultsTitle: string;
  noSelectionDescription?: string;
  noSelectionTitle?: string;
  onClose?: () => void;
  onCloseButtonText?: string;
  onSubmit?: () => void;
  onSubmitButtonText?: string;
  open: boolean;
  /**
   * portal target for the all tags modal
   */
  portalTarget?: ReactNode;
  searchResultsTitle?: string;
  sortByLabel?: string;
  title?: string;
}

export const AddSelect = forwardRef(
  (
    {
      globalFilters,
      closeIconDescription = '',
      description = '',
      itemsLabel = '',
      items = {
        entries: [],
      },
      multi = false,
      noResultsDescription = '',
      noResultsTitle = '',
      onClose = () => {},
      onCloseButtonText = '',
      onSubmit = () => {},
      onSubmitButtonText = '',
      open = false,
      title = '',
      ...props
    }: AddSelectProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const useNormalizedItems = !!items.entries.find((item) => item.children);
    const normalizedItems = useNormalizedItems ? normalize(items) : null;
    const globalFilterOpts =
      multi && globalFilters?.length
        ? getGlobalFilterValues(globalFilters, normalizedItems)
        : null;
    const defaultModifiers =
      multi && items.modifiers
        ? items.entries.map((item) => {
            const modifierAttribute = items?.modifiers?.id;
            const modifier = {
              id: item.id,
            };

            return {
              ...modifier,
              ...(modifierAttribute && {
                [modifierAttribute]: item[modifierAttribute],
              }),
            };
          })
        : [];
    return (
      <AddSelectBody
        {...props}
        ref={ref}
        closeIconDescription={closeIconDescription}
        description={description}
        items={items}
        itemsLabel={itemsLabel}
        useNormalizedItems={useNormalizedItems}
        globalFilterOpts={globalFilterOpts}
        defaultModifiers={defaultModifiers}
        multi={multi}
        normalizedItems={normalizedItems}
        noResultsDescription={noResultsDescription}
        noResultsTitle={noResultsTitle}
        onClose={onClose}
        onCloseButtonText={onCloseButtonText}
        onSubmit={onSubmit}
        onSubmitButtonText={onSubmitButtonText}
        open={open}
        title={title}
      />
    );
  }
);

AddSelect.propTypes = {
  className: PropTypes.string,
  clearFiltersText: PropTypes.string,
  closeIconDescription: PropTypes.string,
  columnInputPlaceholder: PropTypes.string,
  description: PropTypes.string,
  filterByLabel: PropTypes.string,
  /**@ts-ignore */
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
  /**@ts-ignore */
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
  }),
  itemsLabel: PropTypes.string,
  metaIconDescription: PropTypes.string,
  metaPanelTitle: PropTypes.string,
  multi: PropTypes.bool,
  navIconDescription: PropTypes.string,
  noResultsDescription: PropTypes.string.isRequired,
  noResultsTitle: PropTypes.string.isRequired,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  onClose: PropTypes.func,
  onCloseButtonText: PropTypes.string,
  onSubmit: PropTypes.func,
  onSubmitButtonText: PropTypes.string,
  open: PropTypes.bool.isRequired,
  /**
   * portal target for the all tags modal
   */
  portalTarget: PropTypes.node,
  searchResultsTitle: PropTypes.string,
  sortByLabel: PropTypes.string,
  title: PropTypes.string,
};

AddSelect.displayName = componentName;
