import React, { useState } from 'react';
import {
  Modal,
  FileUploaderDropContainer,
  FileUploaderItem,
  TextInput,
  Button,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
// import { expPrefix } from '../../global/js/settings';
import uuidv4 from '../../global/js/utils/uuidv4';

export const ImportModal = ({
  defaultErrorBody,
  errorHeader,
  fetchErrorBody,
  fetchErrorHeader,
  inputButtonText,
  inputHeader,
  inputPlaceholder,
  invalidFileTypeErrorBody,
  invalidFileTypeErrorHeader,
  labelText,
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
  const [fileUrl, setFileUrl] = useState('https://loremflickr.com/320/240');

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

  return (
    <Modal
      open={open}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      modalHeading={modalHeading}
      primaryButtonDisabled={primaryButtonDisabled}
      onRequestSubmit={onSubmitHandler}
      onRequestClose={onRequestClose}>
      <p>{modalBody}</p>
      <FileUploaderDropContainer
        accept={validFileTypes}
        labelText={labelText}
        onAddFiles={onAddFile}
      />
      <h5>{inputHeader}</h5>
      <TextInput
        placeholder={inputPlaceholder}
        value={fileUrl}
        onChange={inputHandler}
      />
      <Button onClick={fetchFile}>{inputButtonText}</Button>
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
    </Modal>
  );
};

ImportModal.propTypes = {
  defaultErrorBody: PropTypes.string,
  errorHeader: PropTypes.string,
  fetchErrorBody: PropTypes.string,
  fetchErrorHeader: PropTypes.string,
  inputButtonText: PropTypes.string,
  inputHeader: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  invalidFileTypeErrorBody: PropTypes.string,
  invalidFileTypeErrorHeader: PropTypes.string,
  labelText: PropTypes.string,
  maxFileSize: PropTypes.number,
  maxFileSizeErrorBody: PropTypes.string,
  maxFileSizeErrorHeader: PropTypes.string,
  modalBody: PropTypes.string,
  modalHeading: PropTypes.string,
  onRequestClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
  open: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  validFileTypes: PropTypes.array,
};

ImportModal.defaultProps = {
  defaultErrorBody: '',
  errorHeader: '',
  fetchErrorBody: '',
  fetchErrorHeader: '',
  inputButtonText: '',
  inputHeader: '',
  inputPlaceholder: '',
  invalidFileTypeErrorBody: '',
  invalidFileTypeErrorHeader: '',
  labelText: '',
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
