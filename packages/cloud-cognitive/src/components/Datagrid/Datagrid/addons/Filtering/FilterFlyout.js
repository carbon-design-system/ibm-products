// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';
import { Filter16 } from '@carbon/icons-react';
import cx from 'classnames';
import React, { useState } from 'react';
import { ActionSet } from '../../../../ActionSet';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-flyout`;

//
/**
  NOTES: 
  - https://stackoverflow.com/questions/72929659/react-child-component-state-is-lost-after-parent-component-re-renders
*/

const FilterFlyout = ({
  children,
  updateMethod = 'batch',
  title = 'Filter',
}) => {
  const [open, setOpen] = useState(false);

  const openFlyout = () => setOpen(true);
  const closeFlyout = () => setOpen(false);

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
      {open && (
        <div className={`${componentClass}`}>
          <div className={`${componentClass}__inner-container`}>
            <span className={`${componentClass}__title`}>{title}</span>
            <div className={`${componentClass}__filters`}>{children}</div>
          </div>
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
        </div>
      )}
    </div>
  );
};

FilterFlyout.propTypes = {};

export default FilterFlyout;
