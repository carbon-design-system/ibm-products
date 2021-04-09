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
  defaultIconDescription,
  defaultText,
  failIconDescription,
  failText,
  inProgressIconDescription,
  inProgressText,
  onCancel,
  onSave,
  status,
  successIconDescription,
  successText,
  type,
}) => {
  const getStatusObj = () => {
    const statusObj = {};

    if (status === 'default') {
      statusObj.text = defaultText;
      statusObj.iconDescription = defaultIconDescription;
      statusObj.icon = CheckmarkOutline16;
    } else if (status === 'inprogress') {
      statusObj.text = inProgressText;
      statusObj.iconDescription = inProgressIconDescription;
      statusObj.icon = InlineLoading;
    } else if (status === 'success') {
      statusObj.text = successText;
      statusObj.iconDescription = successIconDescription;
      statusObj.icon = Save16;
    } else {
      statusObj.text = failText;
      statusObj.iconDescription = failIconDescription;
      statusObj.icon = ErrorOutline16;
    }

    return statusObj;
  };

  const statusObj = getStatusObj();

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
          <p className={`${pkg.prefix}-saving-text`}>{statusObj.text}</p>
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
            renderIcon={statusObj.icon}
            iconDescription={statusObj.iconDescription}
            disabled={status === 'inprogress'}>
            {statusObj.text}
          </Button>
        </div>
      )}
    </div>
  );
};

Saving = pkg.checkComponentEnabled(Saving, componentName);

Saving.propTypes = {
  /**
   * Text for the cancel button (manual).
   */
  cancelButtonText: PropTypes.string,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Description for default state icon (manual).
   */
  defaultIconDescription: PropTypes.string,
  /**
   * Default text for the save button (manual). Per design guidelines you probably don't want to display this in the auto mode.
   */
  defaultText: PropTypes.string,
  /**
   * Description for fail state icon (manual).
   */
  failIconDescription: PropTypes.string,
  /**
   * Text for failure state.
   */
  failText: PropTypes.string,
  /**
   * Description for in progress state icon (manual).
   */
  inProgressIconDescription: PropTypes.string,
  /**
   * Text for in progress state.
   */
  inProgressText: PropTypes.string,
  /**
   * Function handler for cancel button (manual).
   */
  onCancel: PropTypes.func,
  /**
   * Function handler for save button (manual).
   */
  onSave: PropTypes.func,
  /**
   * The save state.
   */
  status: PropTypes.oneOf(['default', 'inprogress', 'success', 'fail']),
  /**
   * Description for success state icon (manual).
   */
  successIconDescription: PropTypes.string,
  /**
   * Text for success state
   */
  successText: PropTypes.string,
  /**
   * Designates the style of the save component. Manual uses a set of buttons and auto just displays a string. See usage guidelines for additional information.
   */
  type: PropTypes.oneOf(['manual', 'auto']),
};

Saving.defaultProps = {
  status: 'default',
  type: 'manual',
};

Saving.displayName = componentName;
