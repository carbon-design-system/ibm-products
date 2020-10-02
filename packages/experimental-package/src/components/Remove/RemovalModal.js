import React, { useState } from 'react';
import { Modal, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';

export const RemovalModal = ({
  body,
  className,
  header,
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
      className={`removal-modal ${className}`}
      open={open}
      modalHeading={header}
      modalLabel={subheader}
      primaryButtonText={primaryButtonText}
      primaryButtonDisabled={primaryButtonDisabled}
      secondaryButtonText={secondaryButtonText}
      onRequestSubmit={onRequestSubmit}
      onRequestClose={onRequestClose}>
      <p className="removal-modal-body">{body}</p>
      {textConfirmation && (
        <TextInput
          id="remove-confirmation"
          invalidText="A valid value is required"
          labelText={`Type in ${resource} to confirm`}
          placeholder="Name of resource"
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
  primaryButtonText: 'Delete',
  secondaryButtonText: 'Cancel',
  subheader: '',
  textConfirmation: false,
};
