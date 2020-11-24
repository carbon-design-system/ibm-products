//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

export const coreConfigFunc = (customProps = {}) => {
  return {
    open: true,
    heading: 'Generate an API key',
    labelText: 'API key generation',
    descriptionText:
      'Optional description text. To connect securely to {{product}}, your application or tool needs an API key with permission to access the cluster and resources.',
    generatingLabelText: 'Generating API key',
    apiKey: '123456-abcdef-12345678-abcdef',
    apiKeyLabelText: 'API key',
    isAPIKeyVisible: true,
    apiKeyVisibilityToggleAltText: 'Show/hide API key visibility.',
    apiKeySecret: '',
    apiKeySecretLabelText: 'API key secret',
    apiKeySecretVisibilityToggleAltText: 'Show/hide API key secret visibility.',
    copyLabelText: 'Copy',
    closeLabelText: 'Close',
    apiKeyHelperText:
      'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
    downloadLinkText: 'Download as JSON',
    onCopyAPIKeyData: () => {},
    onClose: () => {},
    onDownload: () => {},
    ...customProps,
  };
};

export const coreTextProps = [
  'labelText',
  'heading',
  'descriptionText',
  'generatingLabelText',
  'apiKey',
  'apiKeyLabelText',
  'apiKeyVisibilityToggleAltText',
  'apiKeySecret',
  'apiKeySecretLabelText',
  'apiKeySecretVisibilityToggleAltText',
  'apiKeyHelperText',
  'downloadLinkText',
];

export const coreActionProps = ['onDownload', 'onClose', 'onCopyAPIKeyData'];

export const descriptiveNameStepConfigFunc = (
  customDescriptiveNameStepProps = {}
) => {
  return {
    generateLabelText: 'Generate',
    descriptiveNameStep: {
      isRequired: true,
      heading: 'Provide a descriptive name to identify your API key',
      descriptionText:
        'A descriptive name identifies the API key in the IAM registry.',
      labelText: 'Descriptive name',
      placeholder: 'Name of application',
      invalid: false,
      onChange: () => {},
      ...customDescriptiveNameStepProps,
    },
  };
};

export const descriptiveNameStepTextProps = [
  'value',
  'heading',
  'descriptionText',
  'labelText',
  'helperText',
  'placeholder',
];

export const customStepsConfigFunc = (customProps = {}) => {
  return {
    nextLabelText: 'Next',
    backLabelText: 'Back',
    generateLabelText: 'Generate',
    isAPIKeyGenerating: true,
    customSteps: [
      {
        stepId: 'CustomStep1',
        stepHeading: 'Custom step 1 of 3',
        nextButtonDisabled: false,
        renderStep: () => <div>Rendering step 1. This is custom content.</div>,
      },
      {
        stepId: 'CustomStep2',
        stepHeading: 'Custom step 2 of 3',
        descriptionText: 'Optional description text for step 2 of 3. ',
        nextButtonDisabled: false,
        renderStep: () => (
          <div>
            Rendering step 2. This is custom content with a description.
          </div>
        ),
      },
      {
        stepId: 'CustomStep3',
        nextButtonDisabled: false,
        renderStep: () => (
          <div>
            Rendering step 3. This is custom content with a default heading.
          </div>
        ),
      },
    ],
    ...customProps,
  };
};

export const stepTextProps = ['stepHeading'];

export const customStepsActionProps = ['onNext', 'onBack'];
