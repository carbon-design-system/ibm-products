/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { ModalHeader, ModalBody } from 'carbon-components-react';
import { ActionSet } from '../ActionSet';

import { TearsheetShell } from './TearsheetShell';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--tearsheet`;
const componentName = 'Tearsheet';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * A tearsheet is a mostly full-screen type of dialog that keeps users in-context
 * and focused by bringing actionable content front and center while revealing
 * parts of the UI behind it. There are two sizes of tearsheets: narrow and wide.
 *
 * A tearsheet is comprised of up to 5 zones, allowing for flexibility depending on
 * the content.
 */
export let Tearsheet = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      actions,
      children,
      // className is passed directly to TearsheetShell via rest
      closeIconDescription,
      description,
      hasCloseIcon,
      influencer,
      influencerPosition,
      influencerWidth,
      label,
      navigation,
      // onClose, open, preventCloseOnClickOutside are passed directly to TearsheetShell via rest
      title,
      // verticalPosition is passed directly to TearsheetShell via rest
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => (
    <TearsheetShell
      {
        // Pass through any other property values.
        ...rest
      }
      ref={ref}
      size="wide">
      {(label || title || description || navigation || hasCloseIcon) && (
        <ModalHeader
          className={`${blockClass}__header`}
          closeClassName={cx({
            [`${blockClass}__header--no-close-icon`]: !hasCloseIcon,
          })}
          iconDescription={closeIconDescription}
          label={label}
          title={title}>
          {description && (
            <div className={`${blockClass}__header-description`}>
              {description}
            </div>
          )}
          {navigation && (
            <div className={`${blockClass}__header-navigation`}>
              {navigation}
            </div>
          )}
        </ModalHeader>
      )}
      <ModalBody className={`${blockClass}__body`}>
        {influencer && (
          <div
            className={cx({
              [`${blockClass}__influencer`]: true,
              [`${blockClass}__influencer--right`]:
                influencerPosition === 'right',
              [`${blockClass}__influencer--wide`]: influencerWidth === 'wide',
            })}>
            {influencer}
          </div>
        )}
        <div className={`${blockClass}__right`}>
          {children && <div className={`${blockClass}__main`}>{children}</div>}
          {actions && actions.length > 0 && (
            <ActionSet
              actions={actions}
              size="max"
              className={`${blockClass}__buttons`}
            />
          )}
        </div>
      </ModalBody>
    </TearsheetShell>
  )
);

// Return a placeholder if not released and not enabled by feature flag
Tearsheet = pkg.checkComponentEnabled(Tearsheet, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Tearsheet.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Tearsheet.propTypes = {
  /**
   * Sets the action buttons for the Tearsheet.
   */
  actions: PropTypes.oneOfType([
    ActionSet.validateActions(() => 'max'),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        onPrimaryActionClick: PropTypes.func,
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
      })
    ),
  ]),

  /**
   * Specifies the content of the Tearsheet body.
   */
  children: PropTypes.node,

  /**
   * Specifies class(es) to be applied to the top-level Tearsheet node.
   */
  className: PropTypes.string,

  /**
   * The description for the close icon.
   */
  closeIconDescription: PropTypes.string,

  /**
   * Specifies the description of the Tearsheet.
   */
  description: PropTypes.node,

  /**
   * Specifies if the Tearsheet has a close icon.
   */
  hasCloseIcon: PropTypes.bool,

  /**
   * Specifies the content for the influencer section of the Tearsheet.
   */
  influencer: PropTypes.element,

  /**
   * Specifies the position of the influencer section, 'left' or 'right'.
   */
  influencerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Specifies the width of the influencer: 'narrow' is 256px, and 'wide' is
   * 320px.
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * Specifies the label of the Tearsheet.
   */
  label: PropTypes.node,

  /**
   * Specifies navigation content such as a `Tabs` component to be included
   * at the bottom of the Tearsheet header.
   */
  navigation: PropTypes.element,

  /**
   * Specifies an optional handler that is called when closing the modal.
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the Tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * Prevents the Tearsheet from closing automatically if the user clicks
   * outside it.
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * Specifies the title of the Tearsheet.
   */
  title: PropTypes.node,

  /**
   * Specifies the position of the top of tearsheet in the viewport. The
   * 'normal' position is a short distance down from the top of the viewport,
   * leaving room at the top for a header bar to show through from below. The
   * 'lower' position provides a little extra room at the top to allow an action
   * bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
Tearsheet.defaultProps = {
  closeIconDescription: 'Close',
  hasCloseIcon: true,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  verticalPosition: 'normal',
};
