//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  TextInput,
  RadioButton,
  RadioButtonGroup,
  FormGroup,
  Toggle,
  InlineLoading,
  Form,
} from 'carbon-components-react';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { APIKeyModal } from '.';
import mdx from './APIKeyModal.mdx';
const storybookPrefix = getStorybookPrefix(pkg, APIKeyModal.displayName);
import wait from '../../global/js/utils/wait';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: `${storybookPrefix}/${APIKeyModal.displayName}`,
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

const blockClass = `${pkg.prefix}--apikey-modal`;

const InstantTemplate = (args) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateKey = async () => {
    setLoading(true);
    await wait(2000);
    setOpen(true);
    setLoading(false);
  };

  return (
    <>
      <APIKeyModal {...args} onClose={() => setOpen(false)} open={open} />
      {loading ? (
        <Button
          renderIcon={InlineLoading}
          className={`${blockClass}__button-loading`}>
          Generating...
        </Button>
      ) : (
        <Button onClick={generateKey}>Generate</Button>
      )}
    </>
  );
};

const TemplateWithState = (args) => {
  const { error } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted');
    setFetchError(false);
    setLoading(true);
    await wait(2000);
    if (error) {
      setFetchError(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };

  const onCloseHandler = () => {
    setOpen(false);
    setApiKey('');
  };

  return (
    <>
      <APIKeyModal
        {...args}
        apiKey={apiKey}
        loading={loading}
        onClose={onCloseHandler}
        onRequestSubmit={submitHandler}
        open={open}
        error={fetchError}
      />
      <Button onClick={() => setOpen(!open)}>Generate API key</Button>
    </>
  );
};

const MultiStepTemplate = (args) => {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current && open) {
      inputRef.current.focus();
    }
  }, [open]);

  // multi step options
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');
  const [allResources, setAllResources] = useState(false);
  const [resource, setResource] = useState('');

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted');
    setLoading(true);
    await wait(2000);
    setApiKey('111-111-111-111');
    setLoading(false);
  };

  const onCloseHandler = () => {
    setOpen(false);
    setApiKey('');
    setName('');
    setPermissions('');
    setAllResources(false);
    setResource('');
  };

  const formHandler = (evt) => {
    evt.preventDefault();
    submitHandler();
  };

  const steps = [
    {
      valid: Boolean(name && permissions),
      content: (
        <>
          <p className={`${blockClass}__body`}>
            (Optional description text) To connect securely to [product name],
            your application or tool needs an API key with permission to access
            resources such as [product resource name].
          </p>
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            labelText="Name your application"
            placeholder="Application name"
            ref={inputRef}
          />
          <FormGroup
            legendText="What do you want your application to be able to do"
            className={`${blockClass}__permissions`}>
            <RadioButtonGroup
              onChange={(opt) => setPermissions(opt)}
              valueSelected={permissions}
              name="permission"
              orientation="vertical">
              <RadioButton value="Read and write" labelText="Read and write" />
              <RadioButton value="Read only" labelText="Read only" />
              <RadioButton value="Write only" labelText="Write only" />
            </RadioButtonGroup>
          </FormGroup>
        </>
      ),
    },
    {
      valid: Boolean(resource),
      content: (
        <>
          <Form onSubmit={formHandler}>
            <FormGroup className={`${blockClass}__resource-toggle`}>
              <Toggle
                onChange={(e) => setAllResources(e.target.checked)}
                labelText="All resources"
                labelA="Off"
                labelB="On"
                toggled={allResources}
                disabled={loading}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
            </FormGroup>
            <FormGroup className={`${blockClass}__resource-name`}>
              <TextInput
                value={resource}
                onChange={(e) => setResource(e.target.value)}
                labelText="Which resource?"
                placeholder="Resources name"
                disabled={loading}
              />
            </FormGroup>
          </Form>
          {loading && <InlineLoading description="Generating..." />}
        </>
      ),
    },
  ];

  return (
    <>
      <APIKeyModal
        {...args}
        apiKey={apiKey}
        loading={loading}
        onClose={onCloseHandler}
        onRequestSubmit={submitHandler}
        open={open}
        customSteps={steps}
      />
      <Button onClick={() => setOpen(!open)}>Generate API key</Button>
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
  loadingMessage: 'Generating...',
  body: '(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].',
  nameHelperText:
    'Providing the application name will help you idenfity your API key later.',
  nameInputId: 'nameInput',
  nameLabel: 'Name your application',
  namePlaceholder: 'Application name',
  nameRequired: true,
};

export const WithError = TemplateWithState.bind({});
WithError.args = {
  ...defaultProps,
  apiKeyVisibility: true,
  createButtonText: 'Generate API key',
  createHeader: 'Generate an API key',
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
  loadingMessage: 'Generating...',
  body: '(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].',
  nameHelperText:
    'Providing the application name will help you idenfity your API key later.',
  nameInputId: 'nameInput',
  nameLabel: 'Name your application',
  namePlaceholder: 'Application name',
  nameRequired: true,
  error: true,
  errorMessage: 'An error occured.',
};

export const Instant = InstantTemplate.bind({});
Instant.args = {
  ...defaultProps,
  apiKeyVisibility: true,
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
  apiKeyLabel: '',
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
  apiKeyVisibility: true,
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
};
