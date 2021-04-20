/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Carbon and package components we use.
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  Button,
} from 'carbon-components-react';

// Other standard imports.
import { pkg } from '../../settings';
import PropTypes from 'prop-types';
import cx from 'classnames';

const componentName = 'CreateModal';
const blockClass = `${pkg.prefix}--create-modal`;

// Custom PropType validator which checks and ensures that the children property has no more than 4 nodes
const isValidChildren = () => (props) => {
  let child = props.children.props.children;
  if (child && child.length > 4) {
    throw new Error(
      'The `CreateModal` component does not take more than 4 nodes as children. This is to ensure that the modal does not overflow. Please remove 1 or more nodes.'
    );
  } else return;
};

export let CreateModal = React.forwardRef(
  (
    {
      className,
      children,
      onClose,
      onSubmit,
      open,
      title,
      subtitle,
      description,
      secondaryButtonText,
      primaryButtonText,
      disableSubmit,
      primaryFocus,
      ...rest
    },
    ref
  ) => {
    return (
      <ComposedModal
        {...rest}
        selectorPrimaryFocus={primaryFocus}
        className={cx(blockClass, {
          [className]: className,
        })}
        {...{ open, ref }}
        aria-label="modal"
        size="sm"
        preventCloseOnClickOutside>
        <ModalHeader
          title={title}
          titleClassName={`${blockClass}__title bx--modal-content__regular-content`}>
          {subtitle && (
            <p
              className={`${blockClass}__subtitle bx--modal-content__regular-content`}>
              {subtitle}
            </p>
          )}
        </ModalHeader>
        <ModalBody hasForm>
          {description && (
            <p
              className={`${blockClass}__description bx--modal-content__regular-content`}>
              {description}
            </p>
          )}
          <Form className={cx(`${blockClass}__form`)}>{children}</Form>
        </ModalBody>
        <ModalFooter>
          <Button type="button" kind="secondary" onClick={onClose}>
            {secondaryButtonText}
          </Button>
          <Button
            type="submit"
            kind="primary"
            onClick={onSubmit}
            disabled={disableSubmit}>
            {primaryButtonText}
          </Button>
        </ModalFooter>
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateModal = pkg.checkComponentEnabled(CreateModal, componentName);

CreateModal.propTypes = {
  /**
   * Children refers to all form items within a form inside of the modal's body.
   */
  children: isValidChildren(),
  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,
  /**
   * The description of the CreateModal serves to provide more information about the modal.
   */
  description: PropTypes.node.isRequired,
  /**
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: PropTypes.bool,
  /**
   * Specifies an optional handler which is called when the CreateModal
   * is closed. Returning `false` prevents the modal from closing.
   */
  onClose: PropTypes.func,
  /**
   * Specifies an optional handler which is called when the CreateModal
   * primary button is pressed.
   */
  onSubmit: PropTypes.func,
  /**
   * Specifies whether the CreateModal is open or not.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Specifies the primary button's text in the modal.
   */
  primaryButtonText: PropTypes.string.isRequired,
  /**
   * Specifies which DOM element in the form should be focused.
   */
  primaryFocus: PropTypes.node.isRequired,
  /**
   * Specifies the secondary button's text in the modal.
   */
  secondaryButtonText: PropTypes.string.isRequired,
  /**
   * The subtitle of the CreateModal is optional and serves to provide more information about the modal.
   */
  subtitle: PropTypes.node,
  /**
   * The title of the CreateModal is usually the product or service name.
   */
  title: PropTypes.node.isRequired,
};

CreateModal.displayName = componentName;
CreateModal.defaultProps = {
  disableSubmit: false,
  primaryButtonText: 'Create',
  secondaryButtonText: 'Cancel',
};
