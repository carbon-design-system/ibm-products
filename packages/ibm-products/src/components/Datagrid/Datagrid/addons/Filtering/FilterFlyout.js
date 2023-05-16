// @flow
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Filter16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../../../global/js/hooks';
import { pkg } from '../../../../../settings';
import { ActionSet } from '../../../../ActionSet';
import { BATCH, CLEAR_FILTERS, FLYOUT, INSTANT } from './constants';
import {
  useSubscribeToEventEmitter,
  useFilters,
  useShouldDisableButtons,
} from './hooks';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-flyout`;

const FilterFlyout = ({
  updateMethod = BATCH,
  flyoutIconDescription = 'Open filters',
  filters = [],
  title = 'Filter',
  primaryActionLabel = 'Apply',
  onFlyoutOpen = () => {},
  onFlyoutClose = () => {},
  onApply = () => {},
  onCancel = () => {},
  secondaryActionLabel = 'Cancel',
  setAllFilters,
  data = [],
  initialFilters = [],
}) => {
  //  Save the initial filters we only need the filters once when it loads
  const initialFiltersRef = useRef(initialFilters);

  /** State */
  const [open, setOpen] = useState(false);

  const {
    filtersState,
    prevFiltersObjectArrayRef,
    prevFiltersRef,
    revertToPreviousFilters,
    reset,
    renderFilter,
    filtersObjectArray,
  } = useFilters({
    updateMethod,
    filters,
    setAllFilters,
    variation: FLYOUT,
    initialFilters: initialFiltersRef.current,
  });

  /** Refs */
  const filterFlyoutRef = useRef(null);

  const [shouldDisableButtons, setShouldDisableButtons] =
    useShouldDisableButtons({
      initialValue: true,
      filtersState,
      prevFiltersRef,
    });

  /** Memos */
  const showActionSet = updateMethod === BATCH;

  /** Methods */
  const openFlyout = () => {
    setOpen(true);
    onFlyoutOpen();
  };
  const closeFlyout = () => {
    setOpen(false);
    onFlyoutClose();
  };

  const apply = () => {
    setAllFilters(filtersObjectArray);
    closeFlyout();
    // From the user
    onApply();

    // When the user clicks apply, the action set buttons should be disabled again
    setShouldDisableButtons(true);

    // updates the ref so next time the flyout opens we have records of the previous filters
    prevFiltersRef.current = JSON.stringify(filtersState);
    prevFiltersObjectArrayRef.current = JSON.stringify(filtersObjectArray);
  };

  const cancel = () => {
    // Reverting to previous filters only applies when using batch actions
    if (updateMethod === BATCH) {
      revertToPreviousFilters();
      onCancel();
    }
    closeFlyout();
  };

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
    const hasClickedOnDatePicker = target.closest('.flatpickr-calendar');
    const hasClickedOnDropdown =
      target.className === 'bx--list-box__menu-item__option';

    if (!open || hasClickedOnDatePicker || hasClickedOnDropdown) {
      return;
    }

    cancel();
  });

  useSubscribeToEventEmitter(CLEAR_FILTERS, reset);

  /** Renders all filters */
  const renderFilters = () => filters.map(renderFilter);

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: primaryActionLabel,
              onClick: apply,
              isExpressive: false,
              disabled: shouldDisableButtons,
            },
            {
              key: 2,
              kind: 'secondary',
              label: secondaryActionLabel,
              onClick: cancel,
              isExpressive: false,
              disabled: shouldDisableButtons,
            },
          ]}
          size="md"
          buttonSize="md"
        />
      )
    );
  };

  return (
    <div className={`${componentClass}__container`}>
      <Button
        kind="ghost"
        hasIconOnly
        tooltipPosition="bottom"
        renderIcon={Filter16}
        iconDescription={flyoutIconDescription}
        onClick={open ? closeFlyout : openFlyout}
        className={cx(`${componentClass}__trigger`, {
          [`${componentClass}__trigger--open`]: open,
        })}
        disabled={data.length === 0}
      />
      <div
        ref={filterFlyoutRef}
        className={cx(componentClass, {
          [`${componentClass}--open`]: open,
          [`${componentClass}--batch`]: showActionSet,
          [`${componentClass}--instant`]: !showActionSet,
        })}
      >
        <div className={`${componentClass}__inner-container`}>
          <span className={`${componentClass}__title`}>{title}</span>
          <div className={`${componentClass}__filters`}>{renderFilters()}</div>
        </div>
        {renderActionSet()}
      </div>
    </div>
  );
};

FilterFlyout.propTypes = {
  /**
   * All data rows in the table
   */
  data: PropTypes.array.isRequired,

  /**
   * Array of filters to render
   */
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      props: PropTypes.object.isRequired,
    })
  ),

  /**
   * Icon description for the filter flyout button
   */
  flyoutIconDescription: PropTypes.string,

  /**
   * Filters that should be applied on load
   */
  initialFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ),

  /**
   * Callback when the apply button is clicked
   */
  onApply: PropTypes.func,

  /**
   * Callback when the cancel button is clicked
   */
  onCancel: PropTypes.func,

  /**
   * Callback when the flyout closes
   */
  onFlyoutClose: PropTypes.func,

  /**
   * Callback when the flyout opens
   */
  onFlyoutOpen: PropTypes.func,

  /**
   * Label text of the primary action in the flyout
   */
  primaryActionLabel: PropTypes.string,

  /**
   * Label text of the secondary action in the flyout
   */
  secondaryActionLabel: PropTypes.string,

  /**
   * Function that sets all the filters, this comes from the datagridState
   */
  setAllFilters: PropTypes.func.isRequired,

  /**
   * Title of the filter flyout
   */
  title: PropTypes.string,

  /**
   * The update method used to apply the filters
   */
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]).isRequired,
};

export default FilterFlyout;
