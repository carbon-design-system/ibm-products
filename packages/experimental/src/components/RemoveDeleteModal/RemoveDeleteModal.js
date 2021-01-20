import React, { useState, useRef } from 'react';
import { Modal, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { expPrefix } from '../../global/js/settings';
import uuidv4 from '../../global/js/utils/uuidv4';

export const RemoveDeleteModal = ({
  body,
  className,
  header,
  iconDescription,
  inputInvalidText,
  inputLabelText,
  inputPlaceholderText,
  onRequestClose,
  onRequestSubmit,
  open,
  primaryButtonText,
  resource,
  secondaryButtonText,
  subheader,
  textConfirmation,
  ...other
}) => {
  const [userInput, setUserInput] = useState('');
  const idRef = useRef(uuidv4());
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const primaryButtonDisabled = textConfirmation && userInput !== resource;
  return (
    <Modal
      danger
      className={`${expPrefix}-remove-delete-modal ${className}`}
      iconDescription={iconDescription}
      open={open}
      modalHeading={header}
      modalLabel={subheader}
      primaryButtonText={primaryButtonText}
      primaryButtonDisabled={primaryButtonDisabled}
      secondaryButtonText={secondaryButtonText}
      onRequestSubmit={onRequestSubmit}
      onRequestClose={onRequestClose}
      {...other}>
      <p className={`${expPrefix}-remove-delete-modal-body`}>{body}</p>
      {textConfirmation && (
        <TextInput
          id={`${idRef.current}-confirmation-input`}
          invalidText={inputInvalidText}
          labelText={inputLabelText}
          placeholder={inputPlaceholderText}
          onChange={onChangeHandler}
        />
      )}
    </Modal>
  );
};

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
   * The text displayed at the top of the modal
   */
  header: PropTypes.string.isRequired,
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
   * Specify the text for the subheader
   */
  subheader: PropTypes.string,
  /**
   * Specify whether or not to show the text confirmation input
   */
  textConfirmation: PropTypes.bool,
};

RemoveDeleteModal.defaultProps = {
  className: '',
  iconDescription: '',
  id: '',
  inputInvalidText: '',
  inputLabelText: '',
  inputPlaceholderText: '',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  primaryButtonText: '',
  secondaryButtonText: '',
  subheader: '',
  textConfirmation: false,
};
