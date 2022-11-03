// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';
import { Filter16 } from '@carbon/icons-react';
import cx from 'classnames';
import { ActionSet } from '../../../../ActionSet';
import { pkg } from '../../../../../settings';
import { BATCH, INSTANT } from './constants';
import { useClickOutside } from '../../../../../global/js/hooks';
import { FilterContext } from './FilterProvider';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-flyout`;

const FilterFlyout = ({
  children,
  updateMethod = BATCH,
  flyoutIconDescription = 'Open filters',
  title = 'Filter',
  primaryActionLabel = 'Apply',
  onFlyoutOpen = () => {},
  onFlyoutClose = () => {},
  shouldClickOutsideToClose = false,
  secondaryActionLabel = 'Cancel',
  setAllFilters,
}) => {
  /** Refs */
  const filterFlyoutRef = useRef(null);
  const { filtersObjectArray } = useContext(FilterContext);

  /** State */
  const [open, setOpen] = useState(false);

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Methods */
  const openFlyout = () => {
    setOpen(true);
    onFlyoutOpen();
  };
  const closeFlyout = useCallback(() => {
    setOpen(false);
    onFlyoutClose();
  }, [onFlyoutClose]);

  const onApply = useCallback(() => {
    setAllFilters(filtersObjectArray.current);
    closeFlyout();
  }, [setAllFilters, filtersObjectArray, closeFlyout]);

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
    if (shouldClickOutsideToClose === false) {
      return;
    }

    const hasClickedOnDatePicker = target.closest('.flatpickr-calendar');

    if (!open || hasClickedOnDatePicker) {
      return;
    }

    setOpen(false);
  });

  const renderActionSet = useCallback(() => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: primaryActionLabel,
              onClick: onApply,
            },
            {
              key: 3,
              kind: 'secondary',
              label: secondaryActionLabel,
              onClick: closeFlyout,
            },
          ]}
          size="md"
        />
      )
    );
  }, [
    showActionSet,
    onApply,
    primaryActionLabel,
    secondaryActionLabel,
    closeFlyout,
  ]);

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
          <div className={`${componentClass}__filters`}>{children}</div>
        </div>
        {renderActionSet()}
      </div>
    </div>
  );
};

FilterFlyout.propTypes = {
  /**
   * React children of carbon filters
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Icon description for the filter flyout button
   */
  flyoutIconDescription: PropTypes.string,
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
   * Boolean if you want the flyout to close when clicked outside of the parent
   */
  shouldClickOutsideToClose: PropTypes.bool,
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
