/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { Button, InlineLoading } from 'carbon-components-react';
import {
  Save16,
  CheckmarkOutline16,
  ErrorOutline16,
  ErrorFilled16,
} from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
const componentName = 'Saving';

export let Saving = ({
  cancelButtonText,
  className,
  defaultText,
  failText,
  inProgressText,
  onCancel,
  onSave,
  status,
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
    if (status === 'default') return CheckmarkOutline16;
    else if (status === 'inprogress') return InlineLoading;
    else if (status === 'success') return Save16;
    return ErrorOutline16;
  };

  const classnames = cx(`${pkg.prefix}-saving`, {
    [className]: className,
  });

  return (
    <div className={classnames}>
      {type === 'auto' ? (
        <div className={`${pkg.prefix}-saving-message`}>
          {status === 'fail' && (
            <div className={`${pkg.prefix}-saving-error-icon`}>
              <ErrorFilled16 />
            </div>
          )}
          <p className={`${pkg.prefix}-saving-text`}>{getStatusText()}</p>
        </div>
      ) : (
        <div className={`${pkg.prefix}-saving-buttons`}>
          <Button
            onClick={onCancel}
            kind="secondary"
            disabled={status !== 'inprogress'}>
            {cancelButtonText}
          </Button>
          <Button
            onClick={onSave}
            kind="primary"
            renderIcon={getStatusIcon()}
            disabled={status === 'inprogress'}>
            {getStatusText()}
          </Button>
        </div>
      )}
    </div>
  );
};

Saving = pkg.checkComponentEnabled(Saving, componentName);

Saving.propTypes = {
  /**
   * Text for the cancel button
   */
  cancelButtonText: PropTypes.string,
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
   * Function handler for cancel button
   */
  onCancel: PropTypes.func,
  /**
   * Function handler for save button
   */
  onSave: PropTypes.func,
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
  status: 'default',
  type: 'manual',
};

Saving.displayName = componentName;
