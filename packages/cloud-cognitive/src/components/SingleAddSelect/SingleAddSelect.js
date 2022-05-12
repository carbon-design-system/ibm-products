import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AddSelect } from '../AddSelect';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import { prepareProps } from '../../global/js/utils/props-helper';

const componentName = 'SingleAddSelect';

export let SingleAddSelect = forwardRef((props, ref) => {
  // remove multi add select specific props
  const validProps = prepareProps(props, [
    'columnInputPlaceholder',
    'globalFilters',
    'globalFiltersIconDescription',
    'globalFiltersPlaceholderText',
    'globalFiltersPrimaryButtonText',
    'globalFiltersSecondaryButtonText',
    'influencerTitle',
    'multi',
    'noSelectionDescription',
    'noSelectionTitle',
    'removeIconDescription',
  ]);
  return (
    <AddSelect {...validProps} ref={ref} {...getDevtoolsProps(componentName)} />
  );
});

SingleAddSelect = pkg.checkComponentEnabled(SingleAddSelect, componentName);

SingleAddSelect.propTypes = {
  /**
   * optional class name
   */
  className: PropTypes.string,
  /**
   * text description that appears under the title
   */
  description: PropTypes.string,
  /**
   * label for global search input
   */
  globalSearchLabel: PropTypes.string,
  /**
   * placeholder for global search input
   */
  globalSearchPlaceholder: PropTypes.string,
  /**
   * object that contains the item data. for more information reference the
   * "Structuring items" section in the docs tab
   */
  items: PropTypes.shape({
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        children: PropTypes.object,
        id: PropTypes.string.isRequired,
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
  searchResultsLabel: PropTypes.string,
  /**
   * header text
   */
  title: PropTypes.string,
};

SingleAddSelect.displayName = componentName;
