import React, { useState } from 'react';
import {
  Modal,
  FileUploaderDropContainer,
  FileUploaderItem,
  FormItem,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
// import { expPrefix } from '../../global/js/settings';
import uuidv4 from '../../global/js/utils/uuidv4';

export const ImportModal = ({
  errorBody,
  errorSubject,
  labelText,
  maxFileSize,
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
  const onAddFile = (evt, { addedFiles }) => {
    evt.stopPropagation();
    const updatedFile = addedFiles.map((file) => ({
      uuid: uuidv4(),
      status: 'edit',
      iconDescription: 'Delete file',
      name: file.name,
      filesize: file.size,
      invalidFileType: file.invalidFileType,
      fileData: file,
    }))[0];

    if (maxFileSize && updatedFile.filesize > maxFileSize) {
      updatedFile.invalid = true;
      updatedFile.errorSubject = errorSubject;
      updatedFile.errorBody = errorBody;
    }

    setFile(updatedFile);
  };

  const onRemoveFile = () => {
    setFile(null);
  };

  const onSubmitHandler = () => {
    onRequestSubmit(file.fileData);
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
      <FormItem>
        <p>{modalBody}</p>
        <FileUploaderDropContainer
          accept={validFileTypes}
          labelText={labelText}
          onAddFiles={onAddFile}
        />
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
      </FormItem>
    </Modal>
  );
};

ImportModal.propTypes = {
  errorBody: PropTypes.string,
  errorSubject: PropTypes.string,
  labelText: PropTypes.string,
  maxFileSize: PropTypes.number,
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
  errorBody: '',
  errorSubject: '',
  labelText: '',
  maxFileSize: Infinity,
  modalBody: '',
  modalHeading: '',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: '',
  secondaryButtonText: '',
  validFileTypes: [],
};
