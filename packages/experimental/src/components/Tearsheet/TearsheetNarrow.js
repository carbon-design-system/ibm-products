//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { ModalHeader, ModalBody } from 'carbon-components-react';

import { TearsheetShell } from './TearsheetShell';

import { pkg } from '../../settings';
const componentName = 'TearsheetNarrow';
const blockClass = `${pkg.prefix}-tearsheet`;

export let TearsheetNarrow = ({
  buttons,
  children,
  className,
  closeIconDescription,
  description,
  hasCloseIcon,
  height,
  label,
  onClose,
  open,
  preventCloseOnClickOutside,
  title,
}) => {
  const closeClasses = cx({
    [`${blockClass}--header--no-close-icon`]: !hasCloseIcon,
  });

  return (
    <TearsheetShell
      className={className}
      height={height}
      onClose={onClose}
      open={open}
      preventCloseOnClickOutside={preventCloseOnClickOutside}
      size="narrow">
      {(label || title || description) && (
        <ModalHeader
          className={`${blockClass}--header`}
          closeClassName={closeClasses}
          iconDescription={closeIconDescription}
          label={label}
          title={title}>
          {description && (
            <div className={`${blockClass}--header-description`}>
              {description}
            </div>
          )}
        </ModalHeader>
      )}
      <ModalBody className={`${blockClass}--body`}>
        <div className={`${blockClass}--right`}>
          {children && <div className={`${blockClass}--main`}>{children}</div>}
          {buttons && <div className={`${blockClass}--buttons`}>{buttons}</div>}
        </div>
      </ModalBody>
    </TearsheetShell>
  );
};

// Return a placeholder if not released and not enabled by feature flag
TearsheetNarrow = pkg.checkComponentEnabled(TearsheetNarrow, componentName);

TearsheetNarrow.propTypes = {
  /**
   * Specifies the content for the buttons section of the Tearsheet.
   * Optional.
   */
  buttons: PropTypes.node,
  /**
   * Specifies the content of the Tearsheet body.
   * Optional.
   */
  children: PropTypes.node,
  /**
   * Specifies class(es) to be applied to the top-level Tearsheet node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * The description for the close icon.
   * Optional.
   */
  closeIconDescription: PropTypes.string,
  /**
   * Specifies the description of the Tearsheet.
   * Optional.
   */
  description: PropTypes.node,
  /**
   * Specifies if the Tearsheet has a close icon.
   * Optional.
   */
  hasCloseIcon: PropTypes.bool,
  /**
   * Specifies the height of the tearsheet `'normal' | 'lower'`. Lower is
   * 40px lower to allow more underlying content to be visible. Optional.
   */
  height: PropTypes.oneOf(['normal', 'lower']),
  /**
   * Specifies the label of the Tearsheet.
   * Optional.
   */
  label: PropTypes.node,
  /**
   * Specifies an optional handler that is called when closing the modal.
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,
  /**
   * Specifies whether the Tearsheet is currently open or
   * not.
   */
  open: PropTypes.bool,
  /**
   * Prevents the Tearsheet from closing automatically if the user clicks outside of it.
   * Optional.
   */
  preventCloseOnClickOutside: PropTypes.bool,
  /**
   * Specifies the title of the Tearsheet.
   * Optional.
   */
  title: PropTypes.node,
};

TearsheetNarrow.defaultProps = {
  className: '',
  closeIconDescription: 'Close',
  hasCloseIcon: true,
  height: 'normal',
  preventCloseOnClickOutside: false,
};

TearsheetNarrow.displayName = componentName;
