//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import {
  FileUploaderDropContainer,
  FileUploaderItem,
  FormItem,
  TextInput,
  Button,
} from 'carbon-components-react';
import { parseFileFromUrl } from '../../component_helpers/FileHelper';
import {
  countFiles,
  sortFiles,
  uuid,
  validateFileAdded,
  FILE_UPLOAD_STATUS,
} from './helpers';
import { idePrefix } from '../../globals/js/settings';
// TODO(ritch): move to cosntants file

export default class IdeImporting extends React.Component {
  constructor(props) {
    super(props);

    this.currentIndex = -1;
    this.state = {
      open: props.open,
      urlInput: '',
      urlInputIsValid: false,
      filesToUpload: props.initialFiles,
      finished: false,
    };

    this.handleFilesAdded = this.handleFilesAdded.bind(this);
  }
  countFiles() {
    return countFiles(this.state.filesToUpload);
  }
  getVerbLabel() {
    const { enableUpload, verbLabel } = this.props;
    if (verbLabel) {
      return verbLabel;
    } else if (enableUpload) {
      return 'uploaded';
    }
    return 'imported';
  }
  getDescription() {
    if (this.props.enableUpload) {
      return this.props.uploadDescription;
    }

    return this.props.importDescription;
  }
  updateFileToUploadState(uuid, update) {
    this.setState((state) => {
      let updatedFiles = [];
      for (let fileInfo of state.filesToUpload) {
        if (fileInfo.uuid === uuid) {
          updatedFiles.push({
            ...fileInfo,
            ...update,
          });
        } else {
          updatedFiles.push(fileInfo);
        }
      }

      return {
        ...state,
        filesToUpload: updatedFiles,
      };
    });
  }
  isValidUrl(url) {
    const { onValidateUrl } = this.props;

    if (typeof onValidateUrl === 'function') {
      return onValidateUrl(url);
    }

    const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    return !!re.exec(url);
  }
  getInvalidExtensionText() {
    let validExtensionsText = this.props.mustBeExtensionTextSingular;

    if (this.props.validExtensions.length > 1) {
      validExtensionsText = this.props.mustBeExtensionTextPlural;
    }

    validExtensionsText = validExtensionsText.replace(
      '$EXT',
      this.props.validExtensions.join(', ')
    );

    return `${this.props.extensionIsInvalidText} ${validExtensionsText}`;
  }
  validateFileAdded(fileToUpload) {
    return validateFileAdded(
      fileToUpload,
      this.props,
      this.getInvalidExtensionText.bind(this)
    );
  }
  async handleFileAdded(fileToUpload) {
    if (fileToUpload.invalid) return;

    try {
      this.updateFileToUploadState(fileToUpload.uuid, {
        status: FILE_UPLOAD_STATUS.UPLOADING,
      });
      await this.props.onFileAdded(fileToUpload);
      if (
        this.props.allowValidFileEditing ||
        this.props.enableUpload === false
      ) {
        this.updateFileToUploadState(fileToUpload.uuid, {
          status: FILE_UPLOAD_STATUS.EDIT,
          invalid: false,
        });
      } else {
        this.updateFileToUploadState(fileToUpload.uuid, {
          status: FILE_UPLOAD_STATUS.COMPLETE,
          invalid: false,
        });
      }
    } catch (e) {
      const [errorSubject, errorBody] = e.message.split(':');
      this.updateFileToUploadState(fileToUpload.uuid, {
        status: FILE_UPLOAD_STATUS.EDIT,
        invalid: true,
        errorSubject,
        errorBody,
      });
      throw e;
    }
  }
  getNextIndex() {
    this.currentIndex++;
    return this.currentIndex;
  }
  createFileToUpload(info) {
    let { file, url } = info;
    if (url) {
      file = {
        name: parseFileFromUrl(url),
      };
    }
    const validation = this.validateFileAdded({ file, url });

    return {
      index: this.getNextIndex(),
      file,
      url,
      uuid: uuid(),
      status: FILE_UPLOAD_STATUS.EDIT,
      ...validation,
    };
  }
  handleFilesAdded(e, { addedFiles }) {
    e.stopPropagation();

    if (!this.props.multiple) addedFiles = [addedFiles[0]];

    const mappedFiles = addedFiles.map((file) =>
      this.createFileToUpload({ file })
    );
    this.setState((state) => {
      return {
        filesToUpload: [...state.filesToUpload, ...mappedFiles],
      };
    });
    for (let fileToUpload of mappedFiles) {
      this.handleFileAdded(fileToUpload);
    }
  }
  handleUrlAdded(addedFiles) {
    const mappedFiles = addedFiles.map((url) =>
      this.createFileToUpload({ url })
    );
    this.setState((state) => {
      return {
        filesToUpload: [...state.filesToUpload, ...mappedFiles],
      };
    });
    for (let fileToUpload of mappedFiles) {
      this.handleFileAdded(fileToUpload);
    }
  }
  handleRemoveFile(clickedUuid) {
    this.setState((state) => {
      const { filesToUpload } = this.state;
      return {
        ...state,
        filesToUpload: filesToUpload.filter(({ uuid }) => clickedUuid !== uuid),
      };
    });
    this.props.onFileRemoved?.(clickedUuid);
  }
  getSortedFiles() {
    const { filesToUpload } = this.state;

    // ensure files are sorted in groups and by order added (index)
    // also ensures that the import status files are at the top
    // eg. errors should show at the top, followed by pending,
    // then finally completed files
    return filesToUpload.sort((a, b) => {
      return sortFiles(a, b, filesToUpload.length);
    });
  }
  renderFilesToUpload(counts) {
    const {
      multiple,
      singleFileLabel,
      fileDropHeader,
      hideImport,
    } = this.props;
    return (
      <div className={`${idePrefix}--file-status`} style={{ width: '100%' }}>
        <div className={`${idePrefix}--file-list ${idePrefix}-hide-import`}>
          <h6 className={`${idePrefix}--file-list-status`}>
            {multiple && (
              <span>
                {counts.finished} / {counts.total}{' '}
              </span>
            )}
            {!hideImport && !multiple && <span>{singleFileLabel}</span>}
            {!hideImport && this.getVerbLabel()}
          </h6>
          {hideImport && (
            <div className={`${idePrefix}--file-header-label`}>
              {fileDropHeader}
            </div>
          )}
          {this.getSortedFiles().map(
            ({ file, uuid, status, invalid, errorSubject, errorBody }) => (
              <FileUploaderItem
                key={uuid}
                uuid={uuid}
                name={file.name}
                status={status}
                invalid={invalid}
                errorSubject={errorSubject}
                errorBody={errorBody}
                onDelete={this.handleRemoveFile.bind(this, uuid)}
              />
            )
          )}
        </div>
      </div>
    );
  }
  shouldDisableInput() {
    const { multiple } = this.props;
    const single = !multiple;
    const counts = this.countFiles();

    if ((single && counts.total > 0) || (single && this.state.urlInput)) {
      // disable inputs in single mode
      // when a file has been selected
      // or any characters are entered into the url input
      return true;
    }

    if (counts.uploading > 0) {
      // disable inputs during upload
      return true;
    }

    return false;
  }
  renderFileMode() {
    const { multiple, enableFileDrop, hideImport, fileDropHeader } = this.props;
    if (!enableFileDrop) return null;
    const disabled = this.shouldDisableInput();

    const fileUploaderProps = {
      multiple: multiple,
      disabled: disabled,
      labelText: multiple
        ? this.props.fileDropLabelPlural
        : this.props.fileDropLabelSingular,
      name: 'name',
      accept: [...this.props.validExtensions.map((ext) => `.${ext}`), '*'],
    };
    return hideImport && disabled ? null : (
      <FormItem>
        {hideImport ? (
          <div className={`${idePrefix}--file-header-label`}>
            {fileDropHeader}
          </div>
        ) : (
          <h5>{fileDropHeader}</h5>
        )}
        <FileUploaderDropContainer
          {...fileUploaderProps}
          onAddFiles={this.handleFilesAdded}
        />
      </FormItem>
    );
  }
  handleUrlChanged(e) {
    this.setState({
      urlInput: e.target.value,
      urlInputIsValid: this.isValidUrl(e.target.value),
    });
  }
  renderUrlMode() {
    const { multiple, enableUrlInput } = this.props;
    const { urlInputIsValid } = this.state;
    if (!enableUrlInput) return null;

    const inputProps = {
      key: 'importing-input',
      id: 'ide-input-modal-url-input',
      labelText: this.props.urlInputLabel,
      value: this.state.urlInput,
      disabled: !multiple && this.state.filesToUpload.length > 0,
      invalid: !!(this.state.urlInput && !urlInputIsValid),
      invalidText: this.props.invalidUrlText,
      className: `${idePrefix}-importing-url-input-field`,
      onChange: (e) => {
        e.stopPropagation();
        this.handleUrlChanged(e);
      },
    };

    const buttonProps = {
      disabled: !urlInputIsValid || !this.state.urlInput,
      size: 'field',
      onClick: () => {
        /* istanbul ignore else */
        if (this.state.urlInput) {
          this.handleUrlAdded([this.state.urlInput]);
          this.setState({ urlInput: '' });
        }
      },
    };

    return (
      <FormItem className={`${idePrefix}-file-by-url`}>
        <h5>{this.props.urlInputHeader}</h5>
        <div className={`${idePrefix}-importing-flex-input`}>
          <TextInput {...inputProps} />
          <div className={`${idePrefix}-importing-flex-button`}>
            <Button {...buttonProps}>{this.props.addUrlBttonLabel}</Button>
          </div>
        </div>
      </FormItem>
    );
  }
  renderText() {
    return (
      <p className={`${idePrefix}-importing-description`}>
        {this.getDescription()}
      </p>
    );
  }
  render() {
    const counts = this.countFiles();

    return (
      <div>
        <div className={`${idePrefix}-import-container`}>
          {this.renderText()}
          {this.renderFileMode()}
          {this.renderUrlMode()}
          {counts.total > 0 ? this.renderFilesToUpload(counts) : null}
        </div>
      </div>
    );
  }
}

IdeImporting.propTypes = {
  addUrlBttonLabel: PropTypes.string,
  allowInvalidFilenameInUrl: PropTypes.bool,
  allowValidFileEditing: PropTypes.bool,
  autoCloseDelay: PropTypes.number,
  defaultUncaughtErrorBody: PropTypes.string,
  defaultUncaughtErrorSubject: PropTypes.string,
  dropDescription: PropTypes.string,
  enableFileDrop: PropTypes.bool,
  enableUpload: PropTypes.bool,
  enableUrlInput: PropTypes.bool,
  extensionIsInvalidText: PropTypes.string,
  extensionIsRequiredText: PropTypes.string,
  fileDropHeader: PropTypes.string,
  /** Max file size in bytes. Defaults to `Infinity`. */
  fileDropLabel: PropTypes.string,
  fileDropLabelPlural: PropTypes.string,
  fileDropLabelSingular: PropTypes.string,
  /** The file tab label. Defaults to "File" */
  fileTabLabel: PropTypes.string,
  filesToUploadText: PropTypes.string,
  filesToUploadTextPlural: PropTypes.string,
  hideImport: PropTypes.bool,
  importDescription: PropTypes.string,
  initialFiles: PropTypes.array,
  invalidExtensionText: PropTypes.string,
  invalidFileNameText: PropTypes.string,
  invalidUrlText: PropTypes.string,
  maxFileSize: PropTypes.number,
  maxFileSizeMessage: PropTypes.string,
  multiple: PropTypes.bool,
  mustBeExtensionTextPlural: PropTypes.string,
  mustBeExtensionTextSingular: PropTypes.string,
  onFileAdded: PropTypes.func,
  onFileRemoved: PropTypes.func,
  /** Called when the entire form is submitted. See README for examples. */
  onImport: PropTypes.func,
  onValidateUrl: PropTypes.func,
  /** Defaults to `true`. Set to false to hide/close the modal. */
  open: PropTypes.bool,
  singleFileLabel: PropTypes.string,
  sync: PropTypes.bool,
  uploadDescription: PropTypes.string,
  urlInputHeader: PropTypes.string,
  urlInputLabel: PropTypes.string,
  /** The file tab label. Defaults to "URL" */
  urlTabLabel: PropTypes.string,
  /** Defaults to `['*']`. Specify valid file extensions. */
  validExtensions: PropTypes.arrayOf(PropTypes.string).isRequired,
  verbLabel: PropTypes.string,
};

IdeImporting.defaultProps = {
  uploadDescription: 'Use the inputs below to select file(s) to be uploaded.',
  importDescription: 'Use the inputs below to select file(s) to be imported.',
  open: true,
  sync: false,
  headingPlural: 'Select Files to import',
  headingSingular: 'Select a File import',
  fileTabLabel: 'File',
  hideImport: false,
  urlTabLabel: 'URL',
  invalidFileNameText: 'You must provide a valid file name.',
  validExtensions: ['*'],
  multiple: true,
  fileDropLabelSingular: 'Drag and drop a single file here or click to import',
  fileDropLabelPlural: 'Drag and drop files here or click to import',
  filenameRequiredText: 'A filename is required.',
  urlInputLabel: '',
  invalidUrlText: 'Enter a valid URL',
  maxFileSize: Infinity,
  maxFileSizeSubject: 'File size exceeds limit',
  maxFileSizeMessage: 'File is larger than the max file size.',
  addUrlBttonLabel: 'Add File',
  extensionIsRequiredText: 'File must have a valid extension.',
  extensionIsInvalidText: 'Extension is not valid.',
  errorTextSingular: 'Failed to import file.',
  errorTextPlural: 'Failed to import files.',
  successTextSingular: 'Your file has been imported.',
  successTextPlural: 'Your files have been imported.',
  extensionRequired: true,
  autoCloseDelay: 2,
  enableFileDrop: true,
  enableUrlInput: true,
  invalidFileText: 'Invalid File',
  initialFiles: [],
  mustBeExtensionTextSingular: 'Must be a $EXT file.',
  mustBeExtensionTextPlural: 'Must be one of: $EXT.',
  allowInvalidFilenameInUrl: false,
  defaultUncaughtErrorSubject: 'Import Failed',
  defaultUncaughtErrorBody: 'Failed to import file.',
  filesToUploadTextPlural: 'Files to import',
  enableUpload: true,
  allowValidFileEditing: false,
  fileDropHeader: 'Add by File',
  urlInputHeader: 'Add by URL',
  singleFileLabel: 'File',
};
