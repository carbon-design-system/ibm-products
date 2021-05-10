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
import { Form } from 'carbon-components-react';
import { SidePanel } from '../SidePanel/SidePanel';

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
      disableSubmit,
      onRequestSubmit,
      primaryButtonText,
      secondaryButtonText,
      selectorPrimaryFocus,
      pageContentSelector,
      formTitle,
      formDescription,
      ...rest
    },
    ref
  ) => {
    const actions = [
      {
        label: primaryButtonText,
        onClick: () => {
          onRequestSubmit;
        },
        kind: 'primary',
        disabled: disableSubmit,
      },
      {
        label: secondaryButtonText,
        onClick: () => {
          onRequestClose;
        },
        kind: 'secondary',
      },
    ];

    return (
      <SidePanel
        {...rest}
        ref={ref}
        pageContentSelector={pageContentSelector}
        placement="right"
        slideIn
        animateTitle={false}
        className={cx(blockClass, className)}
        onRequestClose={onRequestClose}
        open={open}
        title={title}
        subtitle={subtitle}
        actions={actions}
        selectorPrimaryFocus={selectorPrimaryFocus}
        size="md">
        <h3
          className={`${blockClass}__form-title-text ${blockClass}__content-text`}>
          {formTitle}
        </h3>
        <p
          className={`${blockClass}__form-description-text ${blockClass}__content-text`}>
          {formDescription}
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
   * Sets the body content of the side panel
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The description of the CreateSidePanel serves to provide more information about the form within the panel.
   */
  description: PropTypes.node,
  /**
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: PropTypes.bool,
  /**
   * Specifies an optional field that provides a additional context for a form
   */
  formDescription: PropTypes.node,
  /**
   * Specifies a required that provides a title for a form
   */
  formTitle: PropTypes.node.isRequired,

  /**
   * Specifies an optional handler which is called when the CreateSidePanel
   * is closed.
   */
  onRequestClose: PropTypes.func,
  /**
   * Specifies an optional handler which is called when the CreateSidePanel
   * primary button is pressed.
   */
  onRequestSubmit: PropTypes.func,
  /**
   * Specifies whether the CreateSidePanel is open or not.
   */
  open: PropTypes.bool,
  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  pageContentSelector: PropTypes.string.isRequired,
  /**
   * Specifies the primary button's text in the modal.
   */
  primaryButtonText: PropTypes.string.isRequired,
  /**
   * Specifies the secondary button's text in the modal.
   */
  secondaryButtonText: PropTypes.string.isRequired,
  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: PropTypes.node.isRequired,
  /**
   * The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.
   */
  subtitle: PropTypes.node,
  /**
   * The title of the CreateSidePanel is usually the product or service name.
   */
  title: PropTypes.node.isRequired,
};
