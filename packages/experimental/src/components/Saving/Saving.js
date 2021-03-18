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

  return (
    <div className={cx(`${pkg.prefix}-saving`, className)}>
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
   * Optinal class
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
  className: '',
  defaultIcon: null,
  defaultText: '',
  failIcon: null,
  failText: '',
  inProgressIcon: null,
  inProgressText: '',
  onClick: () => {},
  status: '',
  successIcon: null,
  successText: '',
  type: '',
};

Saving.displayName = componentName;
