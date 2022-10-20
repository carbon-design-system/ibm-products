// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import React, { useState, useCallback, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';
import { Filter16 } from '@carbon/icons-react';
import cx from 'classnames';
import { ActionSet } from '../../../../ActionSet';
import { pkg } from '../../../../../settings';
import { BATCH, INSTANT } from './constants';
import { useClickOutside } from '../../../../../global/js/hooks';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-flyout`;

const FilterFlyout = ({ children, updateMethod = BATCH, title = 'Filter' }) => {
  /** Refs */
  const filterFlyoutRef = useRef(null);

  /** State */
  const [open, setOpen] = useState(false);

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Methods */
  const openFlyout = () => setOpen(true);
  const closeFlyout = () => setOpen(false);

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
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
              label: 'Apply',
              onClick: function noRefCheck() {},
            },
            {
              key: 3,
              kind: 'secondary',
              label: 'Cancel',
              onClick: closeFlyout,
            },
          ]}
          size="md"
        />
      )
    );
  }, [showActionSet]);

  return (
    <div className={`${componentClass}__container`}>
      <Button
        kind="ghost"
        hasIconOnly
        tooltipPosition="bottom"
        renderIcon={Filter16}
        iconDescription={'Open filters'}
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};

export default FilterFlyout;
