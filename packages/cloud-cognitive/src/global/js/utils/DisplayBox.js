/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const blockClass = 'ccs-sb--display-box';

export const DisplayBox = ({ children, className, msg }) => {
  return (
    <div className={cx(blockClass, className)}>
      <div className={`${blockClass}__message`}>
        {msg ||
          'NOTE: The indicators below show the horizontal space provided to the component by storybook.'}
      </div>
      <div className={`${blockClass}__indicator--left`} />
      {children}
      <div className={`${blockClass}__indicator--right`} />
    </div>
  );
};

DisplayBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  msg: PropTypes.string,
};
