//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { IdeImporting } from '.';
import Readme from './README.md';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import sleep from '../../component_helpers/sleep';
import PropTypes from 'prop-types';
import styles from './_storybook.scss';

let attempt = 0;

const StoryWrapper = ({ children }) => {
  return <div style={{ maxWidth: '800px', margin: '50px' }}>{children}</div>;
};

StoryWrapper.propTypes = {
  children: PropTypes.node,
};

storiesOf(`${getComponentLabel('IdeImporting')}/Uploading`, module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'Upload multiple files by selecting or specifying URLs',
    () => {
      const props = {
        validExtensions: ['png'],
        onFileAdded: async () => {
          await sleep(Math.random() * 10);
        },
      };

      return (
        <StoryWrapper>
          <IdeImporting {...props} />
        </StoryWrapper>
      );
    },
    {
      info: {
        text:
          'Minimum configuration. Use this to enable the importing of a file. Use this state if you do not require additional customizations.',
      },
    }
  )
  .add(
    'Unexpected Error Example',
    () => {
      const props = {
        validExtensions: ['png'],
        onFileAdded: async () => {
          await sleep(Math.random() * 3);
          attempt++;
          if (attempt === 5) {
            throw new Error(
              'Connection Error: failed to accept file! Connection closed unexpectedly.'
            );
          }
        },
      };

      return (
        <StoryWrapper>
          <IdeImporting {...props} />
        </StoryWrapper>
      );
    },
    {
      info: {
        text:
          'Minimum configuration. Use this to enable the importing of a file. Use this state if you do not require additional customizations.',
      },
    }
  )
  .add(
    'Sync Example',
    () => {
      const files = [];
      function Story() {
        const fileState = useState([]);
        const props = {
          sync: true,
          validExtensions: ['png'],
          onFileAdded: async (fileToUpload) => {
            files.push(fileToUpload);
            // TODO(ritch) this is a hack... need to support this some other way
            // trigger render
            fileState[1](files);
          },
        };
        return (
          <div>
            {files.length ? buildFilesList(files) : null}
            <IdeImporting {...props} />
          </div>
        );
      }

      const buildFilesList = (files) => {
        return (
          <div>
            <h1>List of files...</h1>
            <ul>
              {files.map((f) => (
                <li key={f.toString()}>
                  <h2>
                    {f.file.name}{' '}
                    <strong>{Math.round(f.file.size / 1000)}kb</strong>
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        );
      };

      return <Story />;
    },
    {
      info: {
        text:
          'Minimum configuration. Use this to enable the importing of a file. Use this state if you do not require additional customizations.',
      },
    }
  )
  .add(
    'Max Size 100kb',
    () => {
      const props = {
        maxFileSize: 100000,
        validExtensions: ['png'],
        onFileAdded: async () => {
          await sleep(1 + Math.random() * 3);
          attempt++;
          if (attempt === 2) {
            throw new Error('server failed to upload...');
          }
        },
      };

      return (
        <StoryWrapper>
          <IdeImporting {...props} />
        </StoryWrapper>
      );
    },
    {
      info: {
        text:
          'Minimum configuration. Use this to enable the importing of a file. Use this state if you do not require additional customizations.',
      },
    }
  )

  .add(
    'Import a single file by selecting it or specifying a URL',
    () => {
      const props = {
        onImport: () => {},
        multiple: false,
        validExtensions: ['png'],
        onFileAdded: async () => {
          await sleep(Math.random() * 3);
        },
      };

      return (
        <StoryWrapper>
          <IdeImporting {...props} />
        </StoryWrapper>
      );
    },
    {
      info: {
        text:
          'Minimum configuration. Use this to enable the importing of a file. Use this state if you do not require additional customizations.',
      },
    }
  )
  .add('Select multiple files to upload', () => {
    const props = {
      enableUrlInput: false,
      validExtensions: ['png'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error('fail');
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Select a single file to upload', () => {
    const props = {
      enableUrlInput: false,
      multiple: false,
      validExtensions: ['png'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error('fail');
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Hide the file drop area after uploading a single file', () => {
    const props = {
      enableUrlInput: false,
      multiple: false,
      enableUpload: false,
      hideImport: true,
      validExtensions: ['png'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error('fail');
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Provide an initial state of a single file', () => {
    const props = {
      enableUrlInput: false,
      multiple: false,
      enableUpload: false,
      hideImport: true,
      validExtensions: ['yml'],
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
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error('fail');
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Import multiple files by URL', () => {
    const props = {
      enableFileDrop: false,
      validExtensions: ['png'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error('fail');
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Import a single file by URL', () => {
    const props = {
      enableFileDrop: false,
      multiple: false,
      validExtensions: ['png'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error('fail');
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Extension validation', () => {
    const props = {
      maxFileSize: 100000,
      validExtensions: ['png'],
      extensionRequired: true,
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Import from URL Server Side Validation', () => {
    const props = {
      enableFileDrop: false,
      maxFileSize: 100000,
      validExtensions: ['png'],
      extensionRequired: true,
      onFileAdded: async () => {
        await sleep(2);
        throw new Error(
          'Invalid File:' + IdeImporting.defaultProps.maxFileSizeMessage
        );
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('API Connect Example', () => {
    const props = {
      enableUrlInput: false,
      validExtensions: ['yaml', 'yml'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('API Connect Example (validation error)', () => {
    const props = {
      enableUrlInput: false,
      validExtensions: ['yaml', 'yml'],
      onFileAdded: async () => {
        await sleep(Math.random() * 3);
        attempt++;
        if (attempt === 2) {
          throw new Error(
            'Ivalid API Definition: this file is not valid yaml!'
          );
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  });

storiesOf(`${getComponentLabel('IdeImporting')}/Importing`, module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add('Importing multiple files...', () => {
    const props = {
      validExtensions: ['yml', 'yaml'],
      enableUpload: false,

      onFileAdded: async (file) => {
        if (file.url) {
          // simulate fetching the url
          await sleep(Math.random() * 4);
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Importing one file...', () => {
    const props = {
      validExtensions: ['yml', 'yaml'],
      enableUpload: false,
      multiple: false,
      onFileAdded: async (file) => {
        if (file.url) {
          // simulate fetching the url
          await sleep(Math.random() * 4);
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })

  .add('Validation Support (single file)', () => {
    const props = {
      validExtensions: ['yml', 'yaml'],
      enableUpload: false,
      multiple: false,
      onFileAdded: async (file) => {
        if (file.url) {
          // simulate fetching the url
          await sleep(Math.random() * 4);
        }
        throw new Error(
          'My Custom Error: this is the custom body of the validation error...'
        );
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  })
  .add('Validation Support (multiple files)', () => {
    const props = {
      validExtensions: ['yml', 'yaml'],
      enableUpload: false,
      multiple: true,
      onFileAdded: async (file) => {
        attempt++;
        if (file.url) {
          // simulate fetching the url
          await sleep(Math.random() * 4);
        }
        if (attempt == 2) {
          throw new Error(
            'My Custom Error: this is the custom body of the validation error...'
          );
        }
      },
    };

    return (
      <StoryWrapper>
        <IdeImporting {...props} />
      </StoryWrapper>
    );
  });
