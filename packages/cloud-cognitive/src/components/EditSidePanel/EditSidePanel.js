/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
import { Form } from '@carbon/react';
import { SidePanel } from '../SidePanel';
import { ActionSet } from '../ActionSet';
import '../../global/js/utils/props-helper';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--edit-side-panel`;
const sidePanelBlockClass = `${pkg.prefix}--side-panel`;
const componentName = 'EditSidePanel';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  placement: 'right',
  size: 'md',
};

/**
 * TODO: A description of the component.
 */
export let EditSidePanel = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children,
      className,
      disableSubmit,
      formTitle,
      formDescription,
      onRequestClose,
      onRequestSubmit,
      open,
      placement = defaults.placement,
      primaryButtonText,
      secondaryButtonText,
      selectorPrimaryFocus,
      selectorPageContent,
      size = defaults.size,
      slideIn,
      subtitle,
      title,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const actions = [
      {
        label: primaryButtonText,
        onClick: (event) => {
          event.preventDefault();
          onRequestSubmit();
        },
        kind: 'primary',
        disabled: disableSubmit,
        type: 'submit',
      },
      {
        label: secondaryButtonText,
        onClick: onRequestClose,
        kind: 'secondary',
      },
    ];

    const actionContainerClassNames = cx([
      `${blockClass}__actions-container`,
      `${sidePanelBlockClass}__actions-container`,
    ]);

    return (
      <SidePanel
        {...rest}
        {...{
          open,
          ref,
          selectorPageContent,
          onRequestClose,
          title,
          subtitle,
          selectorPrimaryFocus,
          ...getDevtoolsProps(componentName),
        }}
        placement={placement}
        slideIn={slideIn}
        animateTitle={false}
        className={cx(blockClass, className)}
        size={size}
        preventCloseOnClickOutside
      >
        {formTitle && (
          <h3
            className={`${blockClass}__form-title-text ${blockClass}__content-text`}
          >
            {formTitle}
          </h3>
        )}
        {formDescription && (
          <p
            className={`${blockClass}__form-description-text ${blockClass}__content-text`}
          >
            {formDescription}
          </p>
        )}
        <Form className={`${blockClass}__form`}>
          {children}
          <ActionSet
            actions={actions}
            className={actionContainerClassNames}
            size={size}
          />
        </Form>
      </SidePanel>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EditSidePanel = pkg.checkComponentEnabled(EditSidePanel, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
EditSidePanel.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
EditSidePanel.propTypes = {
  /**
   * Sets the body content of the create side panel
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
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: PropTypes.bool,

  /**
   * Specifies an optional field that provides a additional context for a form
   */
  formDescription: PropTypes.node,

  /**
   * Specifies a required field that provides a title for a form
   */
  formTitle: PropTypes.node,

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
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),

  /**
   * Specifies the primary button's text in the modal.
   */
  primaryButtonText: PropTypes.string.isRequired,

  /**
   * Specifies the secondary button's text in the modal.
   */
  secondaryButtonText: PropTypes.string.isRequired,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: PropTypes.string.isRequired.if(({ slideIn }) => slideIn),

  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: PropTypes.node.isRequired,

  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', '2xl']),

  /**
   * Specifies which DOM element in the form should be focused.
   */
  slideIn: PropTypes.bool,

  /**
   * The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.
   */
  subtitle: PropTypes.node,

  /**
   * The title of the CreateSidePanel is usually the product or service name.
   */
  title: PropTypes.node.isRequired,
};
