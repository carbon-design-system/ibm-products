/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './import-modal.scss?lit';
import '@carbon/web-components/es/components/modal/index';
import '@carbon/web-components/es/components/icon-button/index.js';
import '@carbon/web-components/es/components/button/index';
import '@carbon/web-components/es/components/text-input/index';
import '@carbon/web-components/es/components/file-uploader/demo-file-uploader';
import '@carbon/web-components/es/components/file-uploader/file-uploader-item';
import Add16 from '@carbon/web-components/es/icons/add/16.js';
import { ref } from 'lit/directives/ref.js';

const blockClass = `${prefix}--import-modal`;

export type FileType = {
  fetchError?: undefined | boolean;
  fileData?: File;
  fileSize?: number;
  iconDescription?: string;
  invalidFileType?: boolean;
  name: string;
  status?: 'uploading' | 'edit' | 'complete';
  uuid?: string;
  invalid?: boolean;
  errorBody?: string;
  errorSubject?: string;
};

/**
 * ImportModal.
 *
 * @element c4p-import-modal
 *
 * */

@customElement(`${prefix}-import-modal`)
class CDSImportModal extends HostListenerMixin(LitElement) {
  /**
   * The text displayed at the top of the modal
   */
  @property({ reflect: true })
  title;

  /**
   * Content that is displayed inside the modal
   */
  @property({ reflect: true })
  description;

  /**
   * Specify the text for the secondary button
   */
  @property({ reflect: true })
  secondaryButtonText;

  /**
   * Specify the text for the primary button
   */
  @property({ reflect: true })
  primaryButtonText;

  /**
   * Specify whether the Modal is currently open
   */
  @property({ reflect: true })
  open;

  /**
   * Placeholder for text input
   */
  @property({ reflect: true })
  inputPlaceholder;

  /**
   * Header to display above import by url
   */
  @property({ reflect: true })
  inputLabel;

  /**
   * ID for text input
   */
  @property({ reflect: true })
  inputId;

  /**
   * Button text for import by url button
   */
  @property({ reflect: true })
  inputButtonText;

  /**
   * Button icon for import by url button
   */
  @property({ reflect: true })
  inputButtonIcon;

  /**
   * Header for the drag and drop box
   */
  @property({ reflect: true })
  fileDropHeader;

  /**
   * Label for the drag and drop box
   */
  @property({ reflect: true })
  fileDropLabel;

  /**
   * Label that appears when a file is uploaded to show number of files (1 / 1)
   */
  @property({ reflect: true })
  fileUploadLabel;

  /**
   * Specify the types of files that this input should be able to receive
   */
  @property({ reflect: true })
  accept;

  /**
   * Optional error header to display specifically for a fetch error
   */
  @property({ reflect: true })
  fetchErrorHeader;

  /**
   * Optional error body to display specifically for a fetch error
   */
  @property({ reflect: true })
  fetchErrorBody;

  /**
   * The default message shown for an import error
   */
  @property({ reflect: true })
  defaultErrorBody;

  /**
   * The default header that is displayed to show an error message
   */
  @property({ reflect: true })
  defaultErrorHeader;

  /**
   * Optional error message to display specifically for a invalid file type error
   */
  @property({ reflect: true })
  invalidFileTypeErrorBody;

  /**
   * Optional error header to display specifically for a invalid file type error
   */
  @property({ reflect: true })
  invalidFileTypeErrorHeader;

  /**
   * Optional error message to display specifically for a max file size error
   */
  @property({ reflect: true })
  maxFileSizeErrorBody;

  /**
   * Optional error header to display specifically for a max file size error
   */
  @property({ reflect: true })
  maxFileSizeErrorHeader;

  /**
   * File size limit in bytes
   */
  @property({ reflect: true })
  maxFileSize;

  @state()
  files: FileType[] = [];

  @state()
  fileStatusString = '';

  @state()
  importUrl: string = '';

  /**
   * Handles `submit` in import modal.
   *
   */
  private submitHandler = () => {
    this.dispatchEvent(
      new CustomEvent('request-submit', {
        detail: this.files,
        bubbles: true,
        composed: true,
      })
    );
  };

  render() {
    let modalRef: HTMLElement | null = null;
    const isInvalidFileType = (file) => {
      const acceptSet = new Set(this.accept);
      const name = file.name;
      const mimeType = file.type;
      const extension = `.${name.split('.').pop()}`;
      if (
        acceptSet.has(mimeType) ||
        acceptSet.has(extension) ||
        this.accept.length === 0
      ) {
        return false;
      }
      return true;
    };

    const fetchFile = async (url) => {
      if (!url) {
        this.fileStatusString = 'No URL provided.';
        return;
      }

      const fileName = url.substring(url.lastIndexOf('/') + 1).split('?')[0];

      const pendingFile = {
        name: fileName,
        status: 'uploading',
        uuid: 'dummy',
      };

      try {
        const response = await fetch(this.importUrl);
        if (!response.ok || response.status !== 200) {
          throw new Error(`${response.status}`);
        }
        const blob = await response.blob();
        const fetchedFile: FileType = new File([blob], fileName, {
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

    const updateFiles = (newFiles) => {
      const updatedFiles = newFiles.map((file) => {
        const newFile = {
          uuid: file.uuid,
          status: 'edit',
          iconDescription: 'invalidIconDescription',
          name: file.name,
          fileSize: file.size,
          invalidFileType: file.invalidFileType,
          fileData: file,
          fetchError: file.fetchError,
        } as FileType;

        if (newFile.fetchError) {
          newFile.errorBody = this.fetchErrorBody || this.defaultErrorBody;
          newFile.errorSubject =
            this.fetchErrorHeader || this.defaultErrorHeader;
          newFile.invalid = true;
        } else if (newFile.invalidFileType) {
          newFile.errorBody =
            this.invalidFileTypeErrorBody || this.defaultErrorBody;
          newFile.errorSubject =
            this.invalidFileTypeErrorHeader || this.defaultErrorHeader;
          newFile.invalid = true;
        } else if (
          this.maxFileSize &&
          (newFile?.fileSize ?? 0) > this.maxFileSize
        ) {
          newFile.errorBody =
            this.maxFileSizeErrorBody || this.defaultErrorBody;
          newFile.errorSubject =
            this.maxFileSizeErrorHeader || this.defaultErrorHeader;
          newFile.invalid = true;
        }
        return newFile;
      });

      this.files = [...updatedFiles];
      this.fileStatusString = `${this.files.filter((f) => !f.invalid).length} / ${this.files.length} ${this.fileUploadLabel}`;
    };

    const onAddFile = (evt) => {
      const addedFiles = evt.detail.addedFiles;
      evt.stopPropagation();
      updateFiles(addedFiles);
    };

    const onRemoveFile = (evt) => {
      const uuid = evt.detail.uuid;
      this.files = this.files.filter((f) => f.uuid !== uuid);
    };

    const inputHandler = (evt) => {
      this.importUrl = evt.target.value;
    };

    const onCloseHandler = () => {
      this.files = [];
      this.importUrl = '';
    };

    const handleImportFile = () => {
      fetchFile(this.importUrl);
    };

    const numberOfFiles = this.files.length;
    const numberOfValidFiles = this.files.filter(
      (f: FileType) => !f.invalid
    ).length;
    const hasFiles = numberOfFiles > 0;
    const primaryButtonDisabled = !hasFiles || !(numberOfValidFiles > 0);
    const importButtonDisabled = !this.importUrl || hasFiles;
    return html`
      <style>
        ${styles}
      </style>
      <cds-button
        kind="primary"
        @click=${() => modalRef?.setAttribute('open', '')}
      >
        Launch Modal
      </cds-button>
      <cds-modal
        size="sm"
        ?open=${this.open}
        ${ref((el) => (modalRef = el as HTMLElement))}
        @cds-modal-closed=${() => {
          modalRef?.removeAttribute('open');
          onCloseHandler();
        }}
      >
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-heading>${this.title}</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description>
            ${this.description}
          </cds-modal-body-content>
          <cds-file-uploader label-title=${this.fileDropHeader}>
            <cds-file-uploader-drop-container
              accept=${this.accept}
              ?disabled=${hasFiles}
              @cds-file-uploader-drop-container-changed="${onAddFile}"
            >
              ${this.fileDropLabel}
            </cds-file-uploader-drop-container>
          </cds-file-uploader>
          <div class="${blockClass}__input-group">
            <cds-form-item>
              <cds-text-input
                placeholder=${this.inputPlaceholder}
                label=${this.inputLabel}
                id=${this.inputId}
                .value=${this.importUrl}
                @input="${inputHandler}"
                ?disabled=${hasFiles}
              ></cds-text-input>
              <cds-button
                .button-class-name="inputButton"
                .kind="primary"
                .size="sm"
                .type="Submit"
                ?disabled=${importButtonDisabled}
                @click=${handleImportFile}
              >
                ${this.inputButtonIcon
                  ? Add16({ slot: 'icon' })
                  : this.inputButtonText}
              </cds-button>
            </cds-form-item>
          </div>

          <div className="cds--file-container">
            ${hasFiles
              ? html`<p className="{}">${this.fileStatusString}</p>`
              : null}
            ${this.files.map(
              (file) => html`
                <cds-file-uploader-item
                  name=${file.name}
                  size="lg"
                  icon-description=${file.iconDescription}
                  ?invalid=${file.invalid === true}
                  error-subject=${file.errorSubject || ''}
                  error-body=${file.errorBody || ''}
                  uuid=${file.uuid}
                  @cds-file-uploader-item-deleted=${onRemoveFile}
                  >${file.name}</cds-file-uploader-item
                >
              `
            )}
          </div>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button
            kind="secondary"
            data-modal-close
            @click=${() => {
              onCloseHandler;
            }}
            >${this.secondaryButtonText}</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled=${primaryButtonDisabled}
            @click=${this.submitHandler}
            >${this.primaryButtonText}</cds-modal-footer-button
          >
        </cds-modal-footer>
      </cds-modal>
    `;
  }

  static styles = styles;
}
export default CDSImportModal;
