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

import { ModalHeader, ModalBody } from 'carbon-components-react';

import { TearsheetShell } from './TearsheetShell';

const blockClass = `${expPrefix}-tearsheet`;

export const Tearsheet = ({
  buttons,
  children,
  className,
  closeIconDescription,
  description,
  hasCloseIcon,
  height,
  influencer,
  influencerPosition,
  influencerWidth,
  label,
  navigation,
  onClose,
  open,
  preventCloseOnClickOutside,
  title,
}) => {
  const closeClasses = cx({
    [`${blockClass}--header--no-close-icon`]: !hasCloseIcon,
  });

  const influencerClasses = cx({
    [`${blockClass}--influencer`]: true,
    [`${blockClass}--influencer--right`]: influencerPosition === 'right',
    [`${blockClass}--influencer--wide`]: influencerWidth === 'wide',
  });

  return (
    <TearsheetShell
      className={className}
      height={height}
      onClose={onClose}
      open={open}
      preventCloseOnClickOutside={preventCloseOnClickOutside}
      size="wide">
      {(label || title || description || navigation) && (
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
          {navigation && (
            <div className={`${blockClass}--header-navigation`}>
              {navigation}
            </div>
          )}
        </ModalHeader>
      )}
      <ModalBody className={`${blockClass}--body`}>
        {influencer && <div className={influencerClasses}>{influencer}</div>}
        <div className={`${blockClass}--right`}>
          {children && <div className={`${blockClass}--main`}>{children}</div>}
          {buttons && <div className={`${blockClass}--buttons`}>{buttons}</div>}
        </div>
      </ModalBody>
    </TearsheetShell>
  );
};

Tearsheet.propTypes = {
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
   * Specifies the content for the influencer section of the Tearsheet.
   * Optional.
   */
  influencer: PropTypes.node,
  /**
   * Specifies the position of the influencer section `'left' | 'right'`.
   * Optional.
   */
  influencerPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Specifies the width of the influencer `'narrow' | 'wide'`. Narrow is
   * 256px, wide is 320px. Optional.
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),
  /**
   * Specifies the label of the Tearsheet.
   * Optional.
   */
  label: PropTypes.node,
  /**
   * Specifies navigation content such as a `Tabs` component to be included
   * at the bottom of the Tearsheet header.
   * Optional.
   */
  navigation: PropTypes.node,
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

Tearsheet.defaultProps = {
  className: '',
  closeIconDescription: 'Close',
  hasCloseIcon: true,
  height: 'normal',
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  preventCloseOnClickOutside: false,
};
