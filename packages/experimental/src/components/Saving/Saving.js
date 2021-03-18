/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
const componentName = 'Saving';

export const Saving = ({
  className,
  defaultIcon,
  defaultText,
  failIcon,
  failText,
  inProgressIcon,
  inProgressText,
  onClick,
  status,
  successIcon,
  successText,
  type,
}) => {
  const getStatusText = () => {
    if (status === 'default') return defaultText;
    else if (status === 'inprogress') return inProgressText;
    else if (status === 'success') return successText;
    return failText;
  };

  const getStatusIcon = () => {
    if (status === 'default') return defaultIcon;
    else if (status === 'inprogress') return inProgressIcon;
    else if (status === 'success') return successIcon;
    return failIcon;
  };

  const classnames = cx(`${pkg.prefix}-saving`, {
    [className]: className,
  });

  return (
    <div className={classnames}>
      {type === 'auto' ? (
        <p>{getStatusText()}</p>
      ) : (
        <Button onClick={onClick} kind="primary" renderIcon={getStatusIcon()}>
          {getStatusText()}
        </Button>
      )}
    </div>
  );
};

Saving.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Icon for default state
   */
  defaultIcon: PropTypes.object,
  /**
   * Text for default state
   */
  defaultText: PropTypes.string,
  /**
   * Icon for failure state
   */
  failIcon: PropTypes.object,
  /**
   * Text for failure state
   */
  failText: PropTypes.string,
  /**
   * Icon for in progress state
   */
  inProgressIcon: PropTypes.object,
  /**
   * Text for in progress state
   */
  inProgressText: PropTypes.string,
  /**
   * Function handler for button
   */
  onClick: PropTypes.func,
  /**
   * Save state
   */
  status: PropTypes.oneOf(['default', 'inprogress', 'success', 'fail']),
  /**
   * Icon for success state
   */
  successIcon: PropTypes.object,
  /**
   * Text for success state
   */
  successText: PropTypes.string,
  /**
   * Design style. See usage guidelines for additional information
   */
  type: PropTypes.oneOf(['manual', 'auto']),
};

Saving.defaultProps = {
  defaultIcon: null,
  defaultText: '',
  failIcon: null,
  failText: '',
  inProgressIcon: null,
  inProgressText: '',
  status: 'default',
  successIcon: null,
  successText: '',
  type: '',
};

Saving.displayName = componentName;
