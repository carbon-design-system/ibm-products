import React, { useState } from 'react';
import { Modal, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { expPrefix } from '../../global/js/settings';

export const RemovalModal = ({
  body,
  className,
  header,
  iconDescription,
  id,
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
}) => {
  const [userInput, setUserInput] = useState('');
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const primaryButtonDisabled = textConfirmation && userInput !== resource;
  return (
    <Modal
      danger
      className={`${expPrefix}-removal-modal ${className}`}
      open={open}
      modalHeading={header}
      modalLabel={subheader}
      primaryButtonText={primaryButtonText}
      primaryButtonDisabled={primaryButtonDisabled}
      secondaryButtonText={secondaryButtonText}
      onRequestSubmit={onRequestSubmit}
      onRequestClose={onRequestClose}
      iconDescription={iconDescription}>
      <p className={`${expPrefix}-removal-modal-body`}>{body}</p>
      {textConfirmation && (
        <TextInput
          id={id}
          invalidText={inputInvalidText}
          labelText={inputLabelText}
          placeholder={inputPlaceholderText}
          onChange={onChangeHandler}
        />
      )}
    </Modal>
  );
};

RemovalModal.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  iconDescription: PropTypes.string,
  id: PropTypes.string.isRequired,
  inputInvalidText: PropTypes.string,
  inputLabelText: PropTypes.string,
  inputPlaceholderText: PropTypes.string,
  onRequestClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
  open: PropTypes.bool.isRequired,
  primaryButtonText: PropTypes.string,
  resource: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string,
  subheader: PropTypes.string,
  textConfirmation: PropTypes.bool,
};

RemovalModal.defaultProps = {
  className: '',
  iconDescription: '',
  inputInvalidText: '',
  inputLabelText: '',
  inputPlaceholderText: '',
  primaryButtonText: '',
  secondaryButtonText: '',
  subheader: '',
  textConfirmation: false,
};
