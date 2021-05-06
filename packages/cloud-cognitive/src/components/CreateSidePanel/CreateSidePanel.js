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
import { Form, FormGroup } from 'carbon-components-react';
import { SidePanel } from '../SidePanel/SidePanel';
import { ActionSet } from '../ActionSet';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--create-side-panel`;
const componentName = 'CreateSidePanel';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is an example component to show relevant conventions and usage.
 */
export let CreateSidePanel = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      onRequestClose,
      open,
      title,
      subtitle,
      children,
      description,
      disabled,
      onRequestSubmit,
      primaryButtonLabel,
      primaryKind,
      secondaryButtonLabel,
      selectorPrimaryFocus,
      pageContentSelector,
      ...rest
    },
    ref
  ) => {
    const actions = [
      {
        label: primaryButtonLabel,
        onPrimaryActionClick: () => {
          onRequestSubmit;
        },
        kind: 'primary',
        disabled: disabled,
      },
      {
        label: secondaryButtonLabel,
        onSecondaryActionClick: () => {
          onRequestClose;
        },
        kind: 'secondary',
      },
    ];

    return (
      <SidePanel
        pageContentSelector={pageContentSelector}
        placement="right"
        slideIn={true}
        animateTitle={false}
        className={cx(blockClass, className)}
        onRequestClose={onRequestClose}
        open={open}
        title="Create partitions"
        subtitle="Specify the details of the partitions you're creating"
        actions={actions}
        selectorPrimaryFocus={selectorPrimaryFocus}
        size="md">
        <h3
          className={`${blockClass}__form-title-text ${blockClass}__content-text`}>
          Core configuration
        </h3>
        <p
          className={`${blockClass}__form-description-text ${blockClass}__content-text`}>
          We recommend you fill out and evaluate these details at a minimum
          before deploying your topic
        </p>
        <Form className={`${blockClass}__form`}>{children}</Form>
      </SidePanel>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag.
CreateSidePanel = pkg.checkComponentEnabled(CreateSidePanel, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateSidePanel.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CreateSidePanel.propTypes = {
  /**
   * What border color (HTML color value) to use.
   */
  onRequestClose: PropTypes.func,

  /**
   * If true, the border is a box, otherwise it is a shadow.
   */
  boxedBorder: PropTypes.bool,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * If true, the button primary button is disabled, otherwise it can be used.
   */
  disabled: PropTypes.bool,

  /**
   * An optional primary button click handler.
   */
  onPrimaryClick: PropTypes.func,

  /**
   * An optional secondary button click handler.
   */
  onSecondaryClick: PropTypes.func,

  /**
   * The primary button label.
   */
  primaryButtonLabel: PropTypes.string,

  /**
   * The kind of button for the primary button ('primary' or 'danger').
   */
  primaryKind: PropTypes.oneOf(['primary', 'danger']),

  /**
   * The secondary button label.
   */
  secondaryButtonLabel: PropTypes.string,

  /**
   * The kind of button for the secondary button ('secondary' or 'tertiary').
   */
  secondaryKind: PropTypes.oneOf(['secondary', 'tertiary']),

  /**
   * The size for the buttons ('default', 'small' or 'field').
   */
  size: PropTypes.oneOf(['default', 'small', 'field']),
};

// className,
// onRequestClose,
// open,
// title,
// subtitle,
// children,
// description,
// disabled,
// onRequestSubmit,
// primaryButtonLabel,
// primaryKind,
// secondaryButtonLabel,
// selectorPrimaryFocus,
