//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import {
  Button,
  TextInput,
  RadioButton,
  RadioButtonGroup,
  FormGroup,
  Toggle,
  InlineLoading,
} from 'carbon-components-react';
import { action } from '@storybook/addon-actions';
import { APIKeyModal } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './APIKeyModal.mdx';
import { expPrefix } from '../../global/js/settings';

export default {
  title: 'Experimental/APIKeyModal',
  component: APIKeyModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  apiKey: '123-456-789',
  apiKeyInputId: 'apiKeyInput',
  apiKeyLabel: 'API key',
  copyButtonText: 'Copy',
  open: true,
  secondaryButtonText: 'Close',
  successBody: (
    <p>
      This is your unique API key and is non-recoverable. If you lose this API
      key, you will have to reset it.
    </p>
  ),
  successHeader: 'API key successully created',
};

const Template = (args) => {
  return <APIKeyModal {...args} />;
};

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const setKeyHandler = async (resourceName) => {
    action('submitted');
    setLoading(true);
    const timeout = () => new Promise((resolve) => setTimeout(resolve, 2000));
    await timeout();
    setApiKey('111-111-111-111');
    setLoading(false);
  };

  const onCloseHandler = () => {
    setApiKey('');
    setOpen(false);
  };

  const modalToggler = () => {
    setOpen(!open);
  };

  return (
    <>
      <APIKeyModal
        {...args}
        apiKey={apiKey}
        loading={loading}
        onRequestClose={onCloseHandler}
        onRequestSubmit={setKeyHandler}
        open={open}
      />
      <Button onClick={modalToggler}>Add API key</Button>
    </>
  );
};

const MultiStepTemplate = (args) => {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  // multi step options
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('read and write');
  const [allResources, setAllResources] = useState(false);
  const [resource, setResource] = useState('');

  // eslint-disable-next-line
  const setKeyHandler = async (resourceName) => {
    action('submitted');
    setLoading(true);
    const timeout = () => new Promise((resolve) => setTimeout(resolve, 2000));
    await timeout();
    setApiKey('111-111-111-111');
    setLoading(false);
  };

  const onCloseHandler = () => {
    setApiKey('');
    setOpen(false);
  };

  const modalToggler = () => {
    setOpen(!open);
  };

  const steps = [
    <div key={1}>
      <p className={`${expPrefix}--apikey-modal-body`}>
        Optional description text. To connect securely to product, your
        application or tool needs an API key with permissions to access the
        cluster and resources such as topics.
      </p>
      <FormGroup>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          labelText="Descriptive name"
          placeholder="Descriptive name"
        />
      </FormGroup>
      <FormGroup legendText="What do you want your application to be able to do">
        <RadioButtonGroup
          onChange={(opt) => setPermissions(opt)}
          valueSelected={permissions}>
          <RadioButton value="Read and write" labelText="Read and write" />
          <RadioButton value="Read only" labelText="Read only" />
          <RadioButton value="Write only" labelText="Write only" />
        </RadioButtonGroup>
      </FormGroup>
    </div>,
    <div key={2}>
      <FormGroup>
        <Toggle
          onChange={(e) => setAllResources(e.target.checked)}
          labelText="All resources"
          labelA="Off"
          labelB="On"
          toggled={allResources}
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          value={resource}
          onChange={(e) => setResource(e.target.value)}
          labelText="Which resource?"
          placeholder="Resources name"
        />
      </FormGroup>
      {loading && <InlineLoading description="loading..." />}
    </div>,
  ];

  return (
    <>
      <APIKeyModal
        {...args}
        apiKey={apiKey}
        loading={loading}
        onRequestClose={onCloseHandler}
        onRequestSubmit={setKeyHandler}
        open={open}
        customSteps={steps}
      />
      <Button onClick={modalToggler}>Add API key</Button>
    </>
  );
};

export const Standard = TemplateWithState.bind({});
Standard.args = {
  ...defaultProps,
  apiKeyVisibility: true,
  createButtonText: 'Generate API key',
  createHeader: 'Generate an API key',
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
  loadingMessage: 'your key is being created. please wait...',
  modalBody:
    'Optional description text. To connect securely to {{product}}, your application or tool needs an API key with permission to access the cluster and resources.',
  nameHelperText:
    'Providing the application name will help you idenfity your api key later.',
  nameInputId: 'nameInput',
  nameLabel: 'Name your application',
  namePlaceholder: 'Application name',
  nameRequired: true,
};

export const Minimal = Template.bind({});
Minimal.args = {
  ...defaultProps,
};

export const CustomSteps = MultiStepTemplate.bind({});
CustomSteps.args = {
  ...defaultProps,
  createButtonText: 'Generate',
  modalLabel: 'Genreate API key',
  stepHeaders: [
    'Generate API key',
    'Choose which resources the API will have access to',
  ],
  nextStepButtonText: 'Next',
  previousStepButtonText: 'Previous',
};
