//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { IdeImporting } from '.';
import {
  countFiles,
  sortFiles,
  FILE_UPLOAD_STATUS,
  validateFileAdded,
} from './helpers';
import { FileUploaderItem, TextInput } from 'carbon-components-react';

import React from 'react';
// import {act} from 'react-dom/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sleep from '../../component_helpers/sleep';

configure({ adapter: new Adapter() });

describe('IdeImporting unit tests', () => {
  it('should render correct contents (both url and file)', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      enableFileDrop: false,
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.unmount();
  });

  it('should render correct contents (file only)', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
      enableUrlInput: false,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.unmount();
  });

  it('should render correct contents (url only)', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
      enableFile: false,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.unmount();
  });

  it('should handle adding a file via drop', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file.png' }]);
    wrapper.expectPropCalled('onFileAdded');
  });

  it('should handle adding a file via drop (single)', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      multiple: false,
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file.png' }]);
    wrapper.expectPropCalled('onFileAdded');
  });

  it('should hide the file drop area after uploading a single file', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      multiple: false,
      validExtensions: ['png'],
      hideImport: true,
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    const errorMessage = new Error(
      'FileUploaderDropContainer not found when using strictFind()'
    );
    wrapper.simulateDropFiles([{ name: 'test-file.png' }]);
    wrapper.expectPropCalled('onFileAdded');
    expect(() => {
      wrapper.strictFind('FileUploaderDropContainer');
    }).toThrow(errorMessage);
    wrapper.unmount();
  });

  it('should handle an initial state value', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      multiple: false,
      validExtensions: ['yml'],
      hideImport: true,
      onFileAdded: mockHandleFileAdded,
      initialFiles: [
        {
          file: {
            lastModified: 1606086665265,
            lastModifiedDate:
              'Sun Nov 22 2020 23:11:05 GMT+0000 (Greenwich Mean Time)',
            name: 'accounts',
            size: 702,
            type: 'application/x-yaml',
            webkitRelativePath: '',
            index: 0,
          },
          invalid: false,
          status: 'edit',
          url: undefined,
          uuid: 'b4a92c13-10ca',
        },
      ],
    };
    const wrapper = new IdeImportingWrapper(props);

    const errorMessage = new Error(
      'FileUploaderDropContainer not found when using strictFind()'
    );
    expect(() => {
      wrapper.strictFind('FileUploaderDropContainer');
    }).toThrow(errorMessage);
    wrapper.unmount();
  });

  it('should disable the file drop as soon as there is text in the URL field (single)', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      multiple: false,
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.changeUrl('http://valid.com/image.png');
    expect(
      wrapper.strictFind('FileUploaderDropContainer').prop('disabled')
    ).toBe(true);
    wrapper.unmount();
  });

  it('should handle errors thrown by onFileAdded', () => {
    const props = {
      validExtensions: ['png'],
      onFileAdded: jest.fn(() => {
        throw new Error('Subject: message');
      }),
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file.png' }]);
    expect(props.onFileAdded).toBeCalled();
    expect(props.onFileAdded).toThrow();
    wrapper.unmount();
  });

  it('should handle removing a file', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file.png' }]);
    wrapper.expectPropCalled('onFileAdded');
    wrapper.removeFirstFile();
    wrapper.expectNoFiles();
  });

  it('should call onFileRemoved when removing a file if supplied', () => {
    const mockHandleFileAdded = jest.fn();
    const mockHandleFileRemoved = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
      onFileRemoved: mockHandleFileRemoved,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file.png' }]);
    wrapper.expectPropCalled('onFileAdded');
    wrapper.removeFirstFile();
    wrapper.expectPropCalled('onFileRemoved');
    wrapper.expectNoFiles();
  });

  it('should handle adding a file larger than the max size via drop', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
      maxFileSize: 100,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file.png', size: 200 }]);
    expect(mockHandleFileAdded).not.toBeCalled();
    wrapper.unmount();
  });

  it('should handle adding a file with no extension via drop', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
      extensionRequired: true,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.simulateDropFiles([{ name: 'test-file' }]);
    expect(mockHandleFileAdded).not.toBeCalled();
    wrapper.unmount();
  });

  it('should handle adding a file with an invalid file name via drop', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.addFileViaUrl('****');
    expect(mockHandleFileAdded).not.toBeCalled();
    wrapper.unmount();
  });

  it('should handle adding a file via url', async () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.addFileViaUrl('http://valid.com/image.png');
    wrapper.expectPropCalled('onFileAdded');
  });

  it('should handle custom url validation', async () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
      onValidateUrl: jest.fn(() => true),
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.addFileViaUrl('http://valid.com/image.png');
    wrapper.expectPropCalled('onFileAdded');
    wrapper.expectPropCalled('onValidateUrl');
  });

  it('should handle invalid url extensions', async () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.addFileViaUrl('http://valid.com/image.notvalid');
    expect(mockHandleFileAdded).not.toBeCalled();
    wrapper.unmount();
  });

  it('should allow invalid url extensions when enabled', async () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['png'],
      allowInvalidFilenameInUrl: true,
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.addFileViaUrl('http://valid.com/image.notvalid');
    expect(mockHandleFileAdded).toBeCalled();
  });

  it('should handle invalid url extensions plural', async () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      validExtensions: ['yml', 'yaml'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.addFileViaUrl('http://valid.com/image.notvalid');
    expect(mockHandleFileAdded).not.toBeCalled();
    wrapper.unmount();
  });

  it('should allow for FileUploaderItem to call onDelete', () => {
    const mockHandleFileAdded = jest.fn();
    const props = {
      enableUpload: false,
      validExtensions: ['png'],
      onFileAdded: mockHandleFileAdded,
    };
    const wrapper = new IdeImportingWrapper(props);
    wrapper.dropAFewPngFiles();
    wrapper.simulateDeleteFile();
  });

  describe('countFiles', () => {
    it('should return the correct counts for empty set', () => {
      const files = [];
      const counts = countFiles(files);
      expect(counts).toHaveProperty('finished', 0);
      expect(counts).toHaveProperty('uploading', 0);
      expect(counts).toHaveProperty('invalid', 0);
      expect(counts).toHaveProperty('total', 0);
    });
    it('should return the correct counts for invalid set', () => {
      const files = [{ invalid: true }];
      const counts = countFiles(files);
      expect(counts).toHaveProperty('finished', 0);
      expect(counts).toHaveProperty('uploading', 0);
      expect(counts).toHaveProperty('invalid', 1);
      expect(counts).toHaveProperty('total', 1);
    });
  });

  describe('sortFiles', () => {
    it('should ensure error files are first', () => {
      const files = [
        { index: 0, status: FILE_UPLOAD_STATUS.COMPLETE },
        { index: 1, status: FILE_UPLOAD_STATUS.EDIT },
        { index: 2, status: FILE_UPLOAD_STATUS.UPLOADING },
      ];
      const sorted = files.sort((a, b) => {
        return sortFiles(a, b, files.length);
      });
      expect(sorted[0]).toHaveProperty('status', FILE_UPLOAD_STATUS.EDIT);
    });

    it('should ensure invalid files are sorted', () => {
      const files = [
        { index: 1, status: FILE_UPLOAD_STATUS.UPLOADING },
        { index: 0, status: FILE_UPLOAD_STATUS.EDIT, invalid: true },
        { index: 2, status: FILE_UPLOAD_STATUS.UPLOADING },
      ];
      const sorted = files.sort((a, b) => {
        return sortFiles(a, b, files.length);
      });
      expect(sorted[0]).toHaveProperty('status', FILE_UPLOAD_STATUS.EDIT);
    });

    it('should handle two matching files', () => {
      const files = [
        { index: 1, status: FILE_UPLOAD_STATUS.UPLOADING },
        { index: 0, status: FILE_UPLOAD_STATUS.EDIT },
        { index: 1, status: FILE_UPLOAD_STATUS.UPLOADING },
      ];
      const sorted = files.sort((a, b) => {
        return sortFiles(a, b, files.length);
      });
      expect(sorted[0]).toHaveProperty('status', FILE_UPLOAD_STATUS.EDIT);
    });
  });

  describe('validateFileAdded', () => {
    it('should validate the file added', () => {
      const props = { validExtensions: ['png'] };
      const testFile = { file: { size: 1000, name: 'foo.png' } };
      const result = validateFileAdded(testFile, props, jest.fn());
      expect(result).toHaveProperty('invalid', false);
    });

    it('should validate filename', () => {
      const props = { validExtensions: ['png'] };
      const testFile = { file: { size: 1000, name: '*' } };
      const result = validateFileAdded(testFile, props, jest.fn());
      expect(result).toHaveProperty('invalid', true);
    });
  });

  describe('text props', () => {
    it('should allow overriding all text props', () => {
      const customTextProps = {
        verbLabel: 'CUSTOM',
        uploadDescription:
          'CUSTOM Use the inputs below to select file(s) to be uploaded.',
        importDescription:
          'CUSTOM Use the inputs below to select file(s) to be imported.',
        headingPlural: 'CUSTOM Select Files to import',
        headingSingular: 'CUSTOM Select a File import',
        fileTabLabel: 'CUSTOM File',
        urlTabLabel: 'CUSTOM URL',
        invalidFileNameText: 'CUSTOM You must provide a valid file name.',
        fileDropLabelSingular:
          'CUSTOM Drag and drop a single file here or click to import',
        fileDropLabelPlural:
          'CUSTOM Drag and drop files here or click to import',
        filenameRequiredText: 'CUSTOM A filename is required.',
        invalidUrlText: 'CUSTOM Enter a valid URL',
        maxFileSizeSubject: 'CUSTOM File size exceeds limit',
        maxFileSizeMessage: 'CUSTOM File is larger than the max file size.',
        addUrlBttonLabel: 'CUSTOM Add File',
        extensionIsRequiredText: 'CUSTOM File must have a valid extension.',
        extensionIsInvalidText: 'CUSTOM Extension is not valid.',
        errorTextSingular: 'CUSTOM Failed to import file.',
        errorTextPlural: 'CUSTOM Failed to import files.',
        successTextSingular: 'CUSTOM Your file has been imported.',
        successTextPlural: 'CUSTOM Your files have been imported.',
        invalidFileText: 'CUSTOM Invalid File',
        mustBeExtensionTextSingular: 'CUSTOM Must be a $EXT file.',
        mustBeExtensionTextPlural: 'CUSTOM Must be one of: $EXT.',
        defaultUncaughtErrorSubject: 'CUSTOM Import Failed',
        defaultUncaughtErrorBody: 'CUSTOM Failed to import file.',
        filesToUploadTextPlural: 'CUSTOM Files to import',
        filesToUploadTextSingular: 'CUSTOM File to import',
        fileDropHeader: 'CUSTOM Add by File',
        urlInputHeader: 'CUSTOM Add by URL',
      };

      function testCustomTextProps(customProps = {}) {
        const mockHandleFileAdded = jest.fn();
        const props = {
          validExtensions: ['png'],
          onFileAdded: mockHandleFileAdded,
          ...customTextProps,
          ...customProps,
        };
        const wrapper = new IdeImportingWrapper(props);
        wrapper.dropAFewPngFiles();
      }

      // simple override
      testCustomTextProps();

      // enableUpload
      testCustomTextProps({
        enableUpload: true,
      });

      // default import text
      testCustomTextProps({
        enableUpload: false,
        verbLabel: undefined,
      });
    });
  });
});

// This should eventually be used to implement
// the gherkin rules
class IdeImportingWrapper {
  constructor(props) {
    this.props = props;
    this.wrapper = mount(<IdeImporting {...props} />);
  }
  unmount() {
    return this.wrapper.unmount();
  }
  async resolveAsync() {
    // allow timers and promises to resolve
    await sleep(1);
    // force a re-render
    // see https://airbnb.io/enzyme/docs/api/ReactWrapper/update.html
    this.wrapper.update();
  }
  printDebug() {
    // eslint-disable-next-line no-console
    console.error(this.wrapper.debug());
  }
  strictFind(selector) {
    const found = this.wrapper.find(selector);
    if (found.length === 0) {
      let name = typeof selector === 'string' ? selector : selector.name;
      this.printDebug();
      throw new Error(`${name} not found when using strictFind()`);
    }
    return found;
  }
  findFilenameInput() {
    return this.strictFind(TextInput).find('input');
  }
  clickButton(selector) {
    const button = this.strictFind(selector);
    button.simulate('click');
  }
  changeValue(selector, value) {
    const target = this.strictFind(selector);
    target.simulate('change', { target: { value } });
  }
  expectPropCalled(name) {
    expect(this.props[name]).toBeCalled();
  }
  changeFilename(value) {
    const input = this.findFilenameInput();
    input.simulate('change', { target: { value } });
  }
  hasFilename(value) {
    return this.findFilenameInput().prop('value') === value;
  }
  changeUrl(url) {
    this.changeValue('.ide-importing-flex-input input', url);
  }
  addFileViaUrl(url) {
    this.changeUrl(url);
    this.clickButton('.ide-importing-flex-button button');
  }
  simulateDropFiles(files) {
    const e = {
      stopPropagation: jest.fn(),
    };
    this.wrapper.instance().handleFilesAdded(e, { addedFiles: files });
    this.wrapper.update();
  }
  dropAFewPngFiles() {
    this.simulateDropFiles([{ name: 'foo.png' }, { name: 'bar.png' }]);
  }
  removeFirstFile() {
    const inst = this.wrapper.instance();
    const firstFile = inst.state.filesToUpload[0];
    inst.handleRemoveFile(firstFile.uuid);
  }
  expectNoFiles() {
    expect(this.wrapper.instance().state.filesToUpload).toHaveLength(0);
  }
  simulateDeleteFile() {
    this.strictFind(FileUploaderItem).first().invoke('onDelete');
  }
}
