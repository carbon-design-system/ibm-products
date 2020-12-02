import React, { useState } from 'react';
import { Modal, TextInput } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { expPrefix } from '../../global/js/settings';

export const ExportModal = ({
  filename,
  inputLabel,
  invalidInputText,
  modalHeading,
  onRequestClose,
  onRequestSubmit,
  open,
  primaryButtonText,
  secondaryButtonText,
  validExtensions,
}) => {
  const [name, setName] = useState(filename);

  const onChangeHandler = (evt) => {
    setName(evt.target.value);
  };

  const onSubmitHandler = () => {
    onRequestSubmit(name);
  };

  const hasInvalidExtension = () => {
    if (!validExtensions || !validExtensions.length) return false;
    if (!name.includes('.')) return true;
    const ext = name.split('.').pop();
    if (!validExtensions.includes(ext)) return true;
    return false;
  };

  const primaryButtonDisabled = !name || hasInvalidExtension();

  return (
    <Modal
      open={open}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      modalHeading={modalHeading}
      onRequestSubmit={onSubmitHandler}
      onRequestClose={onRequestClose}
      className={`${expPrefix}--export-modal`}
      primaryButtonDisabled={primaryButtonDisabled}>
      <div className={`${expPrefix}--export-modal-inner`}>
        <TextInput
          value={name}
          onChange={onChangeHandler}
          labelText={inputLabel}
          invalid={hasInvalidExtension()}
          invalidText={invalidInputText}
        />
      </div>
    </Modal>
  );
};

ExportModal.propTypes = {
  /**
   * name of the file being exported
   */
  filename: PropTypes.string,
  /**
   * label for the text input
   */
  inputLabel: PropTypes.string,
  /**
   * text for an invalid input
   */
  invalidInputText: PropTypes.string,
  /**
   * Header that displays at the top of the modal
   */
  modalHeading: PropTypes.string,
  /**
   * Specify a handler for closing modal
   */
  onRequestClose: PropTypes.func,
  /**
   * Specify a handler for "submitting" modal. Access the imported file via `file => {}`
   */
  onRequestSubmit: PropTypes.func,
  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * array of valid extensions the file can have
   */
  validExtensions: PropTypes.array,
};

ExportModal.defaultProps = {
  filename: '',
  inputLabel: '',
  invalidInputText: '',
  modalHeading: '',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: false,
  primaryButtonText: '',
  secondaryButtonText: '',
  validExtensions: [],
};
