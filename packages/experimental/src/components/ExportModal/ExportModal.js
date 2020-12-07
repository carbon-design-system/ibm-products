import React, { useState } from 'react';
import {
  Modal,
  TextInput,
  RadioButton,
  RadioButtonGroup,
  FormGroup,
  Loading,
} from 'carbon-components-react';
import { ErrorFilled16, CheckmarkFilled16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { expPrefix } from '../../global/js/settings';

export const ExportModal = ({
  error,
  errorMessage,
  filename,
  inputLabel,
  invalidInputText,
  loading,
  loadingMessage,
  modalBody,
  modalHeading,
  onRequestClose,
  onRequestSubmit,
  open,
  preformattedExtensions,
  preformattedExtensionsLabel,
  primaryButtonText,
  secondaryButtonText,
  successMessage,
  successful,
  validExtensions,
}) => {
  const [name, setName] = useState(filename);
  const [dirtyInput, setDirtyInput] = useState(false);
  const [extension, setExtension] = useState(
    preformattedExtensions[0] ? preformattedExtensions[0].extension : ''
  );

  const onNameChangeHandler = (evt) => {
    setName(evt.target.value);
  };

  const onExtensionChangeHandler = (value) => {
    setExtension(value);
  };

  const onBlurHandler = () => {
    setDirtyInput(true);
  };

  const onSubmitHandler = () => {
    const preformatted = preformattedExtensions.length;
    const returnName = preformatted
      ? `${filename}.${extension.toLocaleLowerCase()}`
      : name;
    onRequestSubmit(returnName);
  };

  const onCloseHandler = () => {
    onRequestClose();
  };

  const hasInvalidExtension = () => {
    if (!dirtyInput || !validExtensions || !validExtensions.length)
      return false;
    if (!name.includes('.')) return true;
    const ext = name.split('.').pop();
    if (!validExtensions.includes(ext)) return true;
    return false;
  };

  const primaryButtonDisabled = loading || !name || hasInvalidExtension();
  const submitted = loading || error || successful;

  return (
    <Modal
      open={open}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      modalHeading={modalHeading}
      onRequestSubmit={onSubmitHandler}
      onRequestClose={onCloseHandler}
      className={`${expPrefix}-export-modal`}
      primaryButtonDisabled={primaryButtonDisabled}
      passiveModal={submitted}>
      <div className={`${expPrefix}-export-modal-inner`}>
        {!submitted && (
          <>
            <p className={`${expPrefix}-export-modal-body`}>{modalBody}</p>
            {preformattedExtensions.length ? (
              <FormGroup legendText={preformattedExtensionsLabel}>
                <RadioButtonGroup
                  orientation="vertical"
                  onChange={onExtensionChangeHandler}
                  valueSelected={extension}
                  name="extensions">
                  {preformattedExtensions.map((o) => (
                    <RadioButton
                      key={o.extension}
                      id={o.extension}
                      value={o.extension}
                      labelText={`${o.extension} (${o.description})`}
                    />
                  ))}
                </RadioButtonGroup>
              </FormGroup>
            ) : (
              <TextInput
                value={name}
                onChange={onNameChangeHandler}
                labelText={inputLabel}
                invalid={hasInvalidExtension()}
                invalidText={invalidInputText}
                onBlur={onBlurHandler}
              />
            )}
          </>
        )}
        {loading && (
          <div className={`${expPrefix}-export-modal-messaging`}>
            <Loading small withOverlay={false} />
            <p>{loadingMessage}</p>
          </div>
        )}
        {successful && (
          <div className={`${expPrefix}-export-modal-messaging`}>
            <CheckmarkFilled16
              className={`${expPrefix}-export-modal-checkmark-icon`}
            />
            <p>{successMessage}</p>
          </div>
        )}
        {error && (
          <div className={`${expPrefix}-export-modal-messaging`}>
            <ErrorFilled16 className={`${expPrefix}-export-modal-error-icon`} />
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

ExportModal.propTypes = {
  /**
   * specify if an error occured
   */
  error: PropTypes.bool,
  /**
   * messaging to display in the event of an error
   */
  errorMessage: PropTypes.string,
  /**
   *
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
   * specify if the modal is in a loading state
   */
  loading: PropTypes.bool,
  /**
   * messaing to display during the loading state
   */
  loadingMessage: PropTypes.string,
  /**
   * Optional body content for modal
   */
  modalBody: PropTypes.string,
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
   * Array of extensions to display as radio buttons
   */
  preformattedExtensions: PropTypes.arrayOf(
    PropTypes.shape({
      extension: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  preformattedExtensionsLabel: PropTypes.string,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * messaging to display if the export was successful
   */
  successMessage: PropTypes.string,
  /**
   * specify if the export was successful
   */
  successful: PropTypes.bool,
  /**
   * array of valid extensions the file can have
   */
  validExtensions: PropTypes.array,
};

ExportModal.defaultProps = {
  error: false,
  errorMessage: '',
  filename: '',
  inputLabel: '',
  invalidInputText: '',
  loading: false,
  loadingMessage: '',
  modalBody: '',
  modalHeading: '',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: false,
  preformattedExtensions: [],
  preformattedExtensionsLabel: '',
  primaryButtonText: '',
  secondaryButtonText: '',
  successful: false,
  successMessage: '',
  validExtensions: [],
};
