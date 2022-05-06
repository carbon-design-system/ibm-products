//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { Button } from '@carbon/react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ExportModal } from '.';
import mdx from './ExportModal.mdx';
import wait from '../../global/js/utils/wait';

export default {
  title: getStoryTitle(ExportModal.displayName),
  component: ExportModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  filename: 'Sample02.pdf',
  inputLabel: 'File name',
  onClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: 'Export',
  secondaryButtonText: 'Cancel',
  title: 'Export',
  inputType: 'text',
};

const Template = (args) => {
  return <ExportModal {...args} />;
};

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };

  return (
    <>
      <ExportModal
        {...args}
        open={open}
        onClose={onCloseHandler}
        onRequestSubmit={onSubmitHandler}
        loading={loading}
        successful={successful}
        loadingMessage="Exporting file..."
        successMessage="The file has been exported."
        error={error}
        errorMessage="Server error 500"
      />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>
  );
};

export const WithSuccessMessage = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
    successful: true,
  },
});

export const WithErrorMessage = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
    successful: false,
  },
});

export const Standard = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const WithExtensionValidation = prepareStory(Template, {
  args: {
    ...defaultProps,
    validExtensions: ['pdf'],
    filename: '',
    invalidInputText: 'File must have valid extension .pdf',
    body: 'File must be exported in a PDF format.',
  },
});

export const WithPreformattedExtensions = prepareStory(Template, {
  args: {
    ...defaultProps,
    filename: 'test',
    preformattedExtensions: [
      {
        extension: 'YAML',
        description: 'best for IBM managed cloud',
      },
      {
        extension: 'BAR',
        description: 'best for integration server',
      },
    ],
    preformattedExtensionsLabel: 'Choose an export format',
  },
});
