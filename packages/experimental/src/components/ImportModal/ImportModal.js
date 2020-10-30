import React, { useState } from 'react';
import {
  Modal,
  FileUploaderDropContainer,
  FileUploaderItem,
  TextInput,
  Button,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
import { expPrefix } from '../../global/js/settings';
import uuidv4 from '../../global/js/utils/uuidv4';

export const ImportModal = ({
  defaultErrorBody,
  errorHeader,
  fetchErrorBody,
  fetchErrorHeader,
  fileDropLabel,
  inputButtonText,
  inputHeader,
  inputId,
  inputLabel,
  inputPlaceholder,
  invalidFileTypeErrorBody,
  invalidFileTypeErrorHeader,
  maxFileSize,
  maxFileSizeErrorBody,
  maxFileSizeErrorHeader,
  modalBody,
  modalHeading,
  onRequestClose,
  onRequestSubmit,
  open,
  primaryButtonText,
  secondaryButtonText,
  validFileTypes,
}) => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const updateFile = (newFile, fetchError) => {
    const updatedFile = {
      uuid: uuidv4(),
      status: 'edit',
      iconDescription: 'Delete file',
      name: newFile.name,
      filesize: newFile.size,
      invalidFileType: newFile.invalidFileType,
      fileData: newFile,
    };

    if (fetchError) {
      updatedFile.errorBody = fetchErrorBody || defaultErrorBody;
      updatedFile.errorSubject = fetchErrorHeader || errorHeader;
      updatedFile.invalid = true;
    } else if (updatedFile.invalidFileType) {
      updatedFile.errorBody = invalidFileTypeErrorBody || defaultErrorBody;
      updatedFile.errorSubject = invalidFileTypeErrorHeader || errorHeader;
      updatedFile.invalid = true;
    } else if (maxFileSize && updatedFile.filesize > maxFileSize) {
      updatedFile.errorBody = maxFileSizeErrorBody || defaultErrorBody;
      updatedFile.errorSubject = maxFileSizeErrorHeader || errorHeader;
      updatedFile.invalid = true;
    }

    setFile(updatedFile);
  };

  const fetchFile = async (e) => {
    e.preventDefault();
    const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    setFile({
      name: fileName,
      status: 'uploading',
    });
    try {
      const response = await fetch(fileUrl);
      if (!response.ok || response.status !== 200)
        throw new Error(response.status);
      const blob = await response.blob();
      const file = new File([blob], fileName);
      updateFile(file);
    } catch (err) {
      console.error('fetch failed', err);
      updateFile({ name: fileName }, err);
    }
  };

  const onAddFile = (evt, { addedFiles }) => {
    evt.stopPropagation();
    updateFile(addedFiles[0]);
  };

  const onRemoveFile = () => {
    setFile(null);
  };

  const onSubmitHandler = () => {
    onRequestSubmit(file.fileData);
  };

  const inputHandler = (e) => {
    setFileUrl(e.target.value);
  };

  const primaryButtonDisabled = !file || (file && file.invalid);
  const importButtonDisabled = !fileUrl || file;
  const fileUploaderDisabled = file;
  const textInputDisabled = file;

  return (
    <Modal
      open={open}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      modalHeading={modalHeading}
      primaryButtonDisabled={primaryButtonDisabled}
      onRequestSubmit={onSubmitHandler}
      onRequestClose={onRequestClose}
      className={`${expPrefix}--import-modal`}>
      <div className={`${expPrefix}--import-modal-inner`}>
        <p className={`${expPrefix}--import-modal-body`}>{modalBody}</p>
        <p className={`${expPrefix}--import-modal-heading`}>
          Add files using drag and drop
        </p>
        <FileUploaderDropContainer
          accept={validFileTypes}
          labelText={fileDropLabel}
          onAddFiles={onAddFile}
          disabled={fileUploaderDisabled}
        />
        <p className={`${expPrefix}--import-modal-heading`}>{inputHeader}</p>
        <div className={`${expPrefix}--input-group`}>
          <TextInput
            id={inputId}
            labelText={inputLabel}
            onChange={inputHandler}
            placeholder={inputPlaceholder}
            value={fileUrl}
            disabled={textInputDisabled}
          />
          <Button
            onClick={fetchFile}
            className={`${expPrefix}--import-button`}
            size="sm"
            disabled={importButtonDisabled}>
            {inputButtonText}
          </Button>
        </div>
        <div className="bx--file-container" style={{ width: '100%' }}>
          {file && (
            <FileUploaderItem
              onDelete={onRemoveFile}
              name={file.name}
              status={file.status}
              size="default"
              uuid={file.uuid}
              iconDescription={file.iconDescription}
              invalid={file.invalid}
              errorBody={file.errorBody}
              errorSubject={file.errorSubject}
              filesize={file.filesize}
              invalidFileType={file.invalidFileType}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

ImportModal.propTypes = {
  /**
   * The default message shown for an import error
   */
  defaultErrorBody: PropTypes.string,
  /**
   * The header that is displayed to show an error message
   */
  errorHeader: PropTypes.string,
  /**
   * Optional error body to display specifically for a fetch error
   */
  fetchErrorBody: PropTypes.string,
  /**
   * Optional error header to display specifically for a fetch error
   */
  fetchErrorHeader: PropTypes.string,
  /**
   * Label for the drag and drop box
   */
  fileDropLabel: PropTypes.string,
  /**
   * Button text for import by url button
   */
  inputButtonText: PropTypes.string,
  /**
   * Header to display above import by url
   */
  inputHeader: PropTypes.string,
  /**
   * ID for text input
   */
  inputId: PropTypes.string,
  /**
   * Label for text input
   */
  inputLabel: PropTypes.string,
  /**
   * Placeholder for text input
   */
  inputPlaceholder: PropTypes.string,
  /**
   * Optional error message to display specifically for a invalid file type error
   */
  invalidFileTypeErrorBody: PropTypes.string,
  /**
   * Optional error header to display specifically for a invalid file type error
   */
  invalidFileTypeErrorHeader: PropTypes.string,
  /**
   * File size limit in bytes
   */
  maxFileSize: PropTypes.number,
  /**
   * Optional error message to display specifically for a max file size error
   */
  maxFileSizeErrorBody: PropTypes.string,
  /**
   * Optional error header to display specifically for a max file size error
   */
  maxFileSizeErrorHeader: PropTypes.string,
  /**
   * Content that is displayed inside the modal
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
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Specify the types of files that this input should be able to receive
   */
  validFileTypes: PropTypes.array,
};

ImportModal.defaultProps = {
  defaultErrorBody: '',
  errorHeader: '',
  fetchErrorBody: '',
  fetchErrorHeader: '',
  inputButtonText: '',
  inputId: '',
  inputHeader: '',
  inputLabel: '',
  inputPlaceholder: '',
  invalidFileTypeErrorBody: '',
  invalidFileTypeErrorHeader: '',
  fileDropLabel: '',
  maxFileSize: Infinity,
  maxFileSizeErrorBody: '',
  maxFileSizeErrorHeader: '',
  modalBody: '',
  modalHeading: '',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: '',
  secondaryButtonText: '',
  validFileTypes: [],
};
