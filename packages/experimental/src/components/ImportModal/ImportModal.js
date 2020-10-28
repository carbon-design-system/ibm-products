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
  labelText,
  maxFileSize,
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
    const newFile = addedFiles.map((file) => ({
      uuid: uuidv4(),
      status: 'edit',
      iconDescription: 'Delete file',
      name: file.name,
      filesize: file.size,
      invalidFileType: file.invalidFileType,
      file,
    }))[0];

    if (maxFileSize && newFile.filesize > maxFileSize) {
      newFile.invalid = true;
      newFile.errorSubject = 'File size exceeds limit';
      newFile.errorBody = `${maxFileSize}kb max file size. Select a new file and try again.`;
    }

    setFile(newFile);
  };

  const onRemoveFile = () => {
    setFile(null);
  };

  const onSubmitHandler = () => {
    onRequestSubmit(file);
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
        <p>Account photo</p>
        <p>Only .jpg and .png files. 500kb max file size</p>
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
  labelText: PropTypes.string,
  maxFileSize: PropTypes.number,
  modalHeading: PropTypes.string,
  onRequestClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
  open: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  validFileTypes: PropTypes.array,
};

ImportModal.defaultProps = {
  labelText: 'Drag and drop files here or click to upload',
  maxFileSize: 500000,
  onRequestClose: () => console.log('closed'),
  onRequestSubmit: (file) => console.log('submitted', file),
  open: true,
  primaryButtonText: 'Import',
  secondaryButtonText: 'Cancel',
  modalHeading: 'Import',
  validFileTypes: ['image/jpeg', 'image/png'],
};
