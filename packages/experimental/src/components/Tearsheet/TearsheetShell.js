//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { expPrefix } from '../../global/js/settings';

import { ComposedModal } from 'carbon-components-react';

const blockClass = `${expPrefix}-tearsheet`;

export const TearsheetShell = ({
  children,
  className,
  height,
  onClose,
  open,
  preventCloseOnClickOutside,
  size,
}) => {
  const classes = cx({
    [`${blockClass}`]: true,
    [className]: className,
  });
  const containerClasses = cx({
    [`${blockClass}--container`]: true,
    [`${blockClass}--container--lower`]: height === 'lower',
    [`${blockClass}--container--wide`]: size === 'wide',
  });

  return (
    <ComposedModal
      className={classes}
      containerClassName={containerClasses}
      onClose={onClose}
      open={open}
      preventCloseOnClickOutside={preventCloseOnClickOutside}>
      {children}
    </ComposedModal>
  );
};

TearsheetShell.propTypes = {
  /**
   * Specifies the content of the TearsheetShell.
   */
  children: PropTypes.node,
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * Specifies the height of the tearsheet `'normal' | 'lower'` Lower is
   * 40px lower to allow more underlying content to be visible. Optional.
   */
  height: PropTypes.oneOf(['normal', 'lower']),
  /**
   * Specifies an optional handler for closing modal. Returning `false`
   * here prevents the modal from closing.
   */
  onClose: PropTypes.func,
  /**
   * Specifies whether the Tearsheet is currently open or not.
   */
  open: PropTypes.bool,
  /**
   * Prevents the TearsheetShell from closing automatically if the user clicks outside of it.
   */
  preventCloseOnClickOutside: PropTypes.bool,
  /**
   * Specifies the width of the Tearsheet. `'narrow' | 'wide'`
   */
  size: PropTypes.oneOf(['narrow', 'wide']),
};

TearsheetShell.defaultProps = {
  className: '',
  height: 'normal',
  preventCloseOnClickOutside: false,
  size: 'wide',
};
