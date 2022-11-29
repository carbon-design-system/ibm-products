//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AddSelect } from '../AddSelect';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const componentName = 'MultiAddSelect';

export let MultiAddSelect = forwardRef((props, ref) => {
  return (
    <AddSelect
      {...props}
      multi
      ref={ref}
      {...getDevtoolsProps(componentName)}
    />
  );
});

MultiAddSelect = pkg.checkComponentEnabled(MultiAddSelect, componentName);

MultiAddSelect.propTypes = {
  /**
   * optional class name
   */
  className: PropTypes.string,
  /**
   * placeholder for column input filter
   */
  columnInputPlaceholder: PropTypes.string,
  /**
   * text description that appears under the title
   */
  description: PropTypes.string,
  /**
   * options to display in the global filter box. values are generated
   * from the id which should correlate with a specific property in an
   * item entry
   */
  globalFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  globalFiltersIconDescription: PropTypes.string,
  /**
   * placeholder text for the global filter dropdown
   */
  globalFiltersPlaceholderText: PropTypes.string,
  /**
   * text for the global filter primary button
   */
  globalFiltersPrimaryButtonText: PropTypes.string,
  /**
   * text for the global filter secondary button
   */
  globalFiltersSecondaryButtonText: PropTypes.string,
  /**
   * label for global search input
   */
  globalSearchLabel: PropTypes.string,
  /**
   * placeholder for global search input
   */
  globalSearchPlaceholder: PropTypes.string,
  /**
   * the theme for the empty state illustration
   */
  illustrationTheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * title that displays in the sidebar / influencer
   */
  influencerTitle: PropTypes.string,
  /**
   * object that contains the item data. for more information reference the
   * "Structuring items" section in the docs tab
   */
  items: PropTypes.shape({
    modifiers: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.array,
    }),
    sortBy: PropTypes.array,
    filterBy: PropTypes.array,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.shape({
          alt: PropTypes.string,
          icon: PropTypes.object,
          src: PropTypes.string,
          theme: PropTypes.oneOf(['light', 'dark']),
        }),
        children: PropTypes.object,
        icon: PropTypes.object,
        id: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
  }),
  /**
   * label that display above the list of items
   */
  itemsLabel: PropTypes.string,
  /**
   * text to display when no results are found from the global search
   */
  noResultsDescription: PropTypes.string,
  /**
   * title to display when no results are found from the global search
   */
  noResultsTitle: PropTypes.string,
  /**
   * text body that displays in the sidebar when nothing is selected
   */
  noSelectionDescription: PropTypes.string,
  /**
   * title that displays in the sidebar when nothing is selected
   */
  noSelectionTitle: PropTypes.string,
  /**
   * function to call when the close button clicked
   */
  onClose: PropTypes.func,
  /**
   * text for close button
   */
  onCloseButtonText: PropTypes.string,
  /**
   * function to call when the submit button is clicked. returns a selection
   */
  onSubmit: PropTypes.func,
  /**
   * text for the submit button
   */
  onSubmitButtonText: PropTypes.string,
  /**
   * specifies if the component is open or not
   */
  open: PropTypes.bool,
  /**
   * text that displays when displaying filtered items
   */
  searchResultsTitle: PropTypes.string,
  /**
   * header text
   */
  title: PropTypes.string,
};

MultiAddSelect.displayName = componentName;
