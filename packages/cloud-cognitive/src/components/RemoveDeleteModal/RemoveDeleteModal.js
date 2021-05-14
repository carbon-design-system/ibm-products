import React, { useState, useRef, forwardRef } from 'react';
import cx from 'classnames';
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  TextInput,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
import uuidv4 from '../../global/js/utils/uuidv4';

import { pkg } from '../../settings';
const componentName = 'RemoveDeleteModal';

export let RemoveDeleteModal = forwardRef(
  (
    {
      body,
      className,
      iconDescription,
      inputInvalidText,
      inputLabelText,
      inputPlaceholderText,
      label,
      onRequestClose,
      onRequestSubmit,
      open,
      primaryButtonText,
      resource,
      secondaryButtonText,
      textConfirmation,
      title,
      ...rest
    },
    ref
  ) => {
    const [userInput, setUserInput] = useState('');
    const idRef = useRef(uuidv4());
    const onChangeHandler = (e) => {
      setUserInput(e.target.value);
    };
    const primaryButtonDisabled = textConfirmation && userInput !== resource;
    const blockClass = `${pkg.prefix}--remove-delete-modal`;
    return (
      <ComposedModal
        {...rest}
        open={open}
        ref={ref}
        danger
        className={cx(blockClass, className)}>
        <ModalHeader
          title={title}
          label={label}
          iconDescription={iconDescription}
        />
        <ModalBody>
          <p className={`${blockClass}__body`}>{body}</p>
          {textConfirmation && (
            <TextInput
              id={`${idRef.current}-confirmation-input`}
              invalidText={inputInvalidText}
              labelText={inputLabelText}
              placeholder={inputPlaceholderText}
              onChange={onChangeHandler}
            />
          )}
        </ModalBody>
        <ModalFooter
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
          primaryButtonDisabled={primaryButtonDisabled}
          onRequestClose={onRequestClose}
          onRequestSubmit={onRequestSubmit}
        />
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
RemoveDeleteModal = pkg.checkComponentEnabled(RemoveDeleteModal, componentName);

RemoveDeleteModal.propTypes = {
  /**
   * The conent to be displayed in the body of the modal
   */
  body: PropTypes.string.isRequired,
  /**
   * Optional classname
   */
  className: PropTypes.string,
  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,
  /**
   * Message showed when user input fails validation
   */
  inputInvalidText: PropTypes.string,
  /**
   * Label for text box
   */
  inputLabelText: PropTypes.string,
  /**
   * Placeholder for text box
   */
  inputPlaceholderText: PropTypes.string,
  /**
   * Specify the modal label texts
   */
  label: PropTypes.string,
  /**
   * Callback function that runs when user closes the modal
   */
  onRequestClose: PropTypes.func,
  /**
   * Callback function that runs when user submits the modal
   */
  onRequestSubmit: PropTypes.func,
  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool.isRequired,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * The name of the resource being acted upon
   */
  resource: PropTypes.string.isRequired,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Specify whether or not to show the text confirmation input
   */
  textConfirmation: PropTypes.bool,
  /**
   * The text displayed at the top of the modal
   */
  title: PropTypes.string.isRequired,
};

RemoveDeleteModal.defaultProps = {
  textConfirmation: false,
};

RemoveDeleteModal.displayName = componentName;
