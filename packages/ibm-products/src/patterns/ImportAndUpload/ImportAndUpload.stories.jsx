/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  Button,
  ComposedModal,
  FileUploaderDropContainer,
  FileUploaderItem,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
} from '@carbon/react';
import styles from './_storybook-styles.scss?inline';
import mdx from './ImportAndUpload.mdx';

export default {
  title: 'Patterns/Import And Upload',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const StandardTemplate = () => {
  const [isOpen, setOpen] = useState(false);
  // prettier-ignore
  const [files, setFiles] = useState<Array<FileType>>([]);
  const blockClass = 'import-and-upload-modal';

  const [importUrl, setImportUrl] = useState('');
  const isInvalidFileType = (file) => {
    if (
      acceptSet.has(file.type) ||
      acceptSet.has(`.${file.name.split('.').pop()}`) ||
      accept.length === 0
    ) {
      return false;
    }
    return true;
  };

  const updateFiles = (newFiles) => {
    const updatedFiles = newFiles.map((file) => {
      const newFile = {
        uuid: file.uuid || 'test',
        status: 'edit',
        iconDescription: 'Delete',
        name: file.name,
        fileSize: file.size,
        invalidFileType: file.invalidFileType,
        fileData: file,
        fetchError: file.fetchError,
      };
      if (newFile.fetchError) {
        newFile.errorBody = 'Unable to fetch URL.';
        newFile.errorSubject = 'Import failed';
        newFile.invalid = true;
      } else if (newFile.invalidFileType) {
        newFile.errorBody = 'Invalid file type.';
        newFile.errorSubject = 'Import failed';
        newFile.invalid = true;
      } else if ((newFile?.fileSize ?? 0) > 500000) {
        newFile.errorBody =
          '500kb max file size. Select a new file and try again.';
        newFile.errorSubject = 'Import failed';
        newFile.invalid = true;
      }
      return newFile;
    });
    const finalFiles = [...updatedFiles];
    setFiles(finalFiles);
  };

  const fetchFile = async (evt) => {
    evt.preventDefault();
    const fileName = importUrl
      .substring(importUrl.lastIndexOf('/') + 1)
      .split('?')[0];
    const pendingFile = {
      name: fileName,
      status: 'uploading',
      uuid: 'test',
    };
    setFiles([pendingFile]);
    try {
      const response = await fetch(importUrl);
      if (!response.ok || response.status !== 200) {
        throw new Error(`${response.status}`);
      }
      const blob = await response.blob();
      const fetchedFile = new File([blob], fileName, {
        type: blob.type,
      });
      fetchedFile.invalidFileType = isInvalidFileType(fetchedFile);
      fetchedFile.uuid = pendingFile.uuid;
      updateFiles([fetchedFile]);
    } catch (err) {
      const failedFile = {
        ...pendingFile,
        fetchError: true,
      };
      updateFiles([failedFile]);
    }
  };

  const onCloseHandler = () => {
    setFiles([]);
    setImportUrl('');
    setOpen(false);
  };
  const onRemoveFile = (uuid) => {
    const updatedFiles = files.filter((f) => f.uuid !== uuid);
    setFiles(updatedFiles);
  };

  const onSubmitHandler = () => {
    onRequestSubmit(files);
  };

  const onAddFile = (evt, { addedFiles }) => {
    evt.stopPropagation();
    updateFiles(addedFiles);
  };

  const numberOfFiles = files.length;
  const numberOfValidFiles = files.filter((f) => !f.invalid).length;
  const hasFiles = numberOfFiles > 0;
  const primaryButtonDisabled = !hasFiles || !(numberOfValidFiles > 0);
  const importButtonDisabled = !importUrl || hasFiles;
  const fileStatusString = `${numberOfValidFiles} / ${numberOfFiles} file uploaded`;

  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      <ComposedModal
        open={isOpen}
        size="sm"
        preventCloseOnClickOutside
        onClose={onCloseHandler}
      >
        <ModalHeader
          className={`${blockClass}__header`}
          title="Import"
          closeModal={onCloseHandler}
        />
        <ModalBody className={`${blockClass}__body-container`}>
          <p className={`${blockClass}__body`}>
            You can specify a file to import by either dragging it into the drag
            and drop area or by specifying a URL. (Maximum file size of 500KB)
          </p>
          <p className={`${blockClass}__file-drop-header`}>
            Add files using drag and drop
          </p>

          <FileUploaderDropContainer
            accept={['image/png', 'image/jpeg', 'image/gif']}
            labelText="Drag and drop files here or click to upload"
            onAddFiles={onAddFile}
            disabled={files.length}
            data-modal-primary-focus
          />
          <p className={`${blockClass}__label`}>
            Add a file by specifying a URL
          </p>
          <div className={`${blockClass}__input-group`}>
            <TextInput
              labelText=""
              id={'test-id'}
              onChange={(evt) => setImportUrl(evt.target.value)}
              placeholder="URL"
              value={importUrl}
              disabled={files.length}
              aria-label="Add a file by specifying a URL"
            />
            <Button
              onClick={fetchFile}
              className={`${blockClass}__import-button`}
              size="md"
              disabled={importButtonDisabled}
            >
              Add file
            </Button>
          </div>
          <div className={`${blockClass}__file-container`}>
            {hasFiles && (
              <p className={`${blockClass}__helper-text`}>{fileStatusString}</p>
            )}
            {files.map((file) => (
              <FileUploaderItem
                key={file.uuid}
                onDelete={() => onRemoveFile(file.uuid)}
                name={file.name}
                status={file.status}
                size="lg"
                uuid={file.uuid}
                iconDescription={file.iconDescription}
                invalid={file.invalid}
                errorBody={file.errorBody}
                errorSubject={file.errorSubject}
                {...{
                  filesize: file.fileSize,
                }}
              />
            ))}
          </div>
        </ModalBody>

        <ModalFooter className={`${blockClass}__footer`}>
          <Button type="button" kind="secondary" onClick={onCloseHandler}>
            Cancel
          </Button>
          <Button
            type="submit"
            kind="primary"
            onClick={onSubmitHandler}
            disabled={primaryButtonDisabled}
          >
            Import
          </Button>
        </ModalFooter>
      </ComposedModal>
    </>
  );
};

export const Standard = StandardTemplate.bind({});
Standard.args = {};
