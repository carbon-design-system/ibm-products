import { html } from 'lit';
import './index';
import { FileType } from './import-modal';

const defaultArgs = {
  title: 'Import',
  description:
    'You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB)',
  secondaryButtonText: 'Cancel',
  primaryButtonText: 'Import',
  open: false,
  inputPlaceholder: 'URL',
  inputLabel: 'Add a file by specifying a URL',
  inputId: 'test-id',
  inputButtonText: 'Add file',
  inputButtonIcon: false,
  fileDropHeader: 'Add files using drag and drop',
  fileDropLabel: 'Drag and drop files here or click to upload',
  fileUploadLabel: 'files uploaded',
  accept: 0,
  fetchErrorHeader: 'Import failed',
  fetchErrorBody: 'Unable to fetch URL.',

  invalidFileTypeErrorBody: 'Invalid file type.',
  invalidFileTypeErrorHeader: 'Import failed',
  invalidIconDescription: 'Delete',
  maxFileSize: 500000,
  maxFileSizeErrorBody: '500kb max file size. Select a new file and try again.',
  maxFileSizeErrorHeader: 'Import failed',
  defaultErrorBody: 'Select a new file and try again.',
  defaultErrorHeader: 'Import failed',
  onRequestSubmit: (files: FileType[]) => {
    console.log('Submitting files:', files);
  },
};

const defaultControls = {
  title: {
    control: 'text',
    description: 'The text displayed at the top of the modal',
  },
  description: {
    control: 'text',
    description: 'Content that is displayed inside the modal',
  },
  secondaryButtonText: {
    control: 'text',
    description: 'Specify the text for the secondary button',
  },
  primaryButtonText: {
    control: 'text',
    description: 'Specify the text for the primary button',
  },
  open: {
    control: 'boolean',
    description: 'Specify whether the Modal is currently open',
  },
  inputPlaceholder: {
    control: 'text',
    description: 'Placeholder for text input',
  },
  inputLabel: {
    control: 'text',
    description: 'Header to display above import by url',
  },
  inputId: {
    control: 'text',
    description: 'ID for text input',
  },
  inputButtonText: {
    control: 'text',
    description: 'Button text for import by url button',
  },
  inputButtonIcon: {
    control: 'boolean',
    description: 'Button icon for import by url button',
  },
  fileDropHeader: {
    control: 'text',
    description: 'Header for the drag and drop box',
  },
  fileDropLabel: {
    control: 'text',
    description: 'Label for the drag and drop box',
  },
  fileUploadLabel: {
    control: 'text',
    description:
      'Label that appears when a file is uploaded to show number of files (1 / 1)',
  },
  accept: {
    control: {
      type: 'select',
      labels: {
        0: 'image (png, jpeg or gif)',
        1: 'document (doc or pdf)',
        2: 'development (html, css or javascript)',
      },
    },
    options: [0, 1, 2],
    mapping: {
      0: ['image/png', 'image/jpeg', 'image/gif'],
      1: ['application/doc', 'application/docx', 'application/pdf'],
      2: ['text/plain', 'text/css', 'text/html', 'text/javascript'],
    },
  },
  fetchErrorHeader: {
    control: 'text',
    description:
      'Optional error header to display specifically for a fetch error',
  },
  fetchErrorBody: {
    control: 'text',
    description:
      'Optional error body to display specifically for a fetch error',
  },
};

export default {
  title: 'Patterns/ImportModal',
};

export const importModal = {
  argTypes: defaultControls,
  args: defaultArgs,
  render: (args) => {
    return html`
      <c4p-import-modal
        title=${args.title}
        description=${args.description}
        ?open=${args.open}
        fetchErrorHeader=${args.fetchErrorHeader}
        fetchErrorBody=${args.fetchErrorBody}
        maxFileSize=${args.maxFileSize}
        ?accept=${args.accept}
        secondaryButtonText=${args.secondaryButtonText}
        primaryButtonText=${args.primaryButtonText}
        inputPlaceholder=${args.inputPlaceholder}
        inputLabel=${args.inputLabel}
        inputId=${args.inputId}
        inputButtonText=${args.inputButtonText}
        inputButtonIcon=${args.inputButtonIcon}
        fileDropHeader=${args.fileDropHeader}
        fileDropLabel=${args.fileDropLabel}
        fileUploadLabel=${args.fileUploadLabel}
        invalidFileTypeErrorBody=${args.invalidFileTypeErrorBody}
        invalidFileTypeErrorHeader=${args.invalidFileTypeErrorHeader}
        invalidIconDescription=${args.invalidIconDescription}
        maxFileSizeErrorBody=${args.maxFileSizeErrorBody}
        maxFileSizeErrorHeader=${args.maxFileSizeErrorHeader}
        defaultErrorBody=${args.defaultErrorBody}
        defaultErrorHeader=${args.defaultErrorHeader}
        .onRequestSubmit=${args.onRequestSubmit}
        }}
      >
      </c4p-import-modal>
    `;
  },
};
