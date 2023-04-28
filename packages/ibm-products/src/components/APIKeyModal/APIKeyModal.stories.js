//
// Copyright IBM Corp. 2021, 2021
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
  Form,
} from '@carbon/react';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { APIKeyModal } from '.';
import mdx from './APIKeyModal.mdx';
import wait from '../../global/js/utils/wait';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: getStoryTitle(APIKeyModal.displayName),
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
  apiKeyLabel: 'API key',
  showAPIKeyLabel: 'Show key',
  hideAPIKeyLabel: 'Hide key',
  copyButtonText: 'Copy',
  copyIconDescription: 'Copy',
  hasAPIKeyVisibilityToggle: true,
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  hasDownloadLink: true,
  downloadFileName: 'apikey',
  downloadFileType: 'json',
  open: true,
  closeButtonText: 'Close',
  generateSuccessBody: (
    <p>
      This is your unique API key and is non-recoverable. If you lose this API
      key, you will have to reset it.
    </p>
  ),
  generateSuccessTitle: 'API key successfully created',
  editSuccessTitle: 'API key successfully saved',
  loadingText: 'Generating...',
};

const blockClass = `${pkg.prefix}--apikey-modal`;

const InstantTemplate = (args) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateKey = async () => {
    setLoading(true);
    await wait(1000);
    setOpen(true);
    setLoading(false);
  };

  return (
    <>
      <style>{`.${blockClass} { opacity: 0; }`};</style>
      <APIKeyModal {...args} onClose={() => setOpen(false)} open={open} />
      {loading ? (
        <Button
          renderIcon={InlineLoading}
          className={`${blockClass}__button-loading`}
        >
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
  const submitHandler = async (apiKeyName) => {
    action(`submitted ${apiKeyName}`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
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
      <style>{`.${blockClass} { opacity: 0; }`};</style>
      <APIKeyModal
        {...args}
        apiKey={apiKey}
        loading={loading}
        onClose={onCloseHandler}
        onRequestGenerate={submitHandler}
        open={open}
        error={fetchError}
      />
      <Button onClick={() => setOpen(!open)}>Generate API key</Button>
    </>
  );
};

const MultiStepTemplate = (args) => {
  const { editing } = args;
  const {
    savedName,
    savedPermissions,
    savedAllResources,
    savedResource,
    ...finalArgs
  } = args;
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  // multi step options
  const [name, setName] = useState(savedName);
  const [permissions, setPermissions] = useState(savedPermissions);
  const [allResources, setAllResources] = useState(savedAllResources);
  const [resource, setResource] = useState(savedResource);
  const [editSuccess, setEditSuccess] = useState(false);

  // eslint-disable-next-line
  const submitHandler = async () => {
    action('submitted')();
    setLoading(true);
    await wait(1000);
    if (editing) {
      setEditSuccess(true);
    } else {
      setApiKey('111-111-111-111');
    }
    setLoading(false);
  };

  const onCloseHandler = () => {
    setOpen(false);
    if (!editing) {
      setApiKey('');
      setName('');
      setPermissions('');
      setAllResources(false);
      setResource('');
    }
  };

  const formHandler = (evt) => {
    evt.preventDefault();
    submitHandler();
  };

  const allResourcesHandler = () => {
    if (allResources && resource) {
      setResource('');
    }
    setAllResources((prev) => !prev);
  };

  const steps = [
    {
      valid: Boolean(name && permissions),
      title: editing ? 'Edit API key' : 'Generate API key',
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
            id="name-input"
            data-modal-primary-focus
          />
          <FormGroup
            legendText="What do you want your application to be able to do"
            className={`${blockClass}__permissions`}
          >
            <RadioButtonGroup
              onChange={(opt) => setPermissions(opt)}
              valueSelected={permissions}
              name="permission"
              orientation="vertical"
            >
              <RadioButton value="Read and write" labelText="Read and write" />
              <RadioButton value="Read only" labelText="Read only" />
              <RadioButton value="Write only" labelText="Write only" />
            </RadioButtonGroup>
          </FormGroup>
        </>
      ),
    },
    {
      valid: allResources || (!allResources && !!resource),
      title: 'Choose which resources the API will have access to',
      content: (
        <>
          <Form onSubmit={formHandler}>
            <FormGroup
              legendText="What do you want your application to be able to do"
              className={`${blockClass}__resource-toggle`}
            >
              <Toggle
                onClick={allResourcesHandler}
                labelText="All resources"
                toggled={allResources}
                disabled={loading}
                id="toggle1"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
            </FormGroup>
            <FormGroup
              legendText="What do you want your application to be able to do"
              className={`${blockClass}__resource-name`}
            >
              <TextInput
                value={resource}
                onChange={(e) => setResource(e.target.value)}
                labelText="Which resource?"
                placeholder="Resources name"
                disabled={loading || allResources}
                id="resource-input"
              />
            </FormGroup>
          </Form>
          {loading && (
            <InlineLoading
              description={loading ? 'Saving...' : 'Generating...'}
            />
          )}
          {editSuccess && (
            <div className={`${blockClass}__messaging`}>
              Edited successfully
            </div>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`.${blockClass} { opacity: 0; }`};</style>
      <APIKeyModal
        {...finalArgs}
        apiKey={apiKey}
        loading={loading}
        onClose={onCloseHandler}
        onRequestEdit={submitHandler}
        onRequestGenerate={submitHandler}
        open={open}
        customSteps={steps}
        nameRequired={false}
        editSuccess={editSuccess}
      />
      <Button onClick={() => setOpen(!open)}>
        {editing ? 'Edit API key' : 'Generate API key'}
      </Button>
    </>
  );
};

const EditTemplate = (args) => {
  const { error, apiKeyName } = args;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const submitHandler = async () => {
    action(`submitted ${apiKeyName}`)();
    setFetchError(false);
    setLoading(true);
    await wait(1000);
    if (error) {
      setFetchError(true);
    } else {
      setFetchSuccess(true);
    }
    setLoading(false);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  const onOpenHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <style>{`.${blockClass} { opacity: 0; }`};</style>
      <APIKeyModal
        {...args}
        loading={loading}
        onClose={onCloseHandler}
        onRequestEdit={submitHandler}
        open={open}
        error={fetchError}
        editSuccess={fetchSuccess}
      />
      <Button onClick={onOpenHandler}>Edit API key</Button>
    </>
  );
};

export const Generate = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
    generateButtonText: 'Generate API key',
    generateTitle: 'Generate an API key',
    body: '(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].',
    nameHelperText:
      'Providing the application name will help you identify your API key later.',
    nameLabel: 'Name your application',
    namePlaceholder: 'Application name',
    nameRequired: true,
  },
});

export const GenerateWithError = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
    hasAPIKeyVisibilityToggle: true,
    generateButtonText: 'Generate API key',
    generateTitle: 'Generate an API key',
    body: '(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].',
    nameHelperText:
      'Providing the application name will help you identify your API key later.',
    nameLabel: 'Name your application',
    namePlaceholder: 'Application name',
    nameRequired: true,
    error: true,
    errorText: 'Failed to create API key',
  },
});

export const InstantGenerate = prepareStory(InstantTemplate, {
  args: {
    ...defaultProps,
    apiKeyLabel: '',
  },
});

export const CustomGenerate = prepareStory(MultiStepTemplate, {
  args: {
    ...defaultProps,
    generateButtonText: 'Generate',
    modalLabel: 'Generate API key',
    nextStepButtonText: 'Next',
    previousStepButtonText: 'Previous',
    downloadFileName: 'apikey',
    savedName: '',
    savedAllResources: false,
    savedResource: '',
    savedPermissions: '',
  },
  parameters: {
    docs: {
      source: {
        // TODO provide better alternative source code, or remove this once the issue is resolved:
        // https://github.com/storybookjs/storybook/issues/11554
        code: 'Sorry, this feature is not currently available for this story',
      },
    },
  },
});

export const Edit = prepareStory(EditTemplate, {
  args: {
    ...defaultProps,
    editButtonText: 'Save API key',
    generateTitle: 'Save an API key',
    body: '(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].',
    nameHelperText:
      'Providing the application name will help you identify your API key later.',
    nameLabel: 'Name your application',
    namePlaceholder: 'Application name',
    nameRequired: true,
    editing: true,
    apiKey: '',
    loadingText: 'Saving...',
    apiKeyName: 'test_key_1',
  },
});

export const EditWithError = prepareStory(EditTemplate, {
  args: {
    ...defaultProps,
    editButtonText: 'Save API key',
    generateTitle: 'Save an API key',
    body: '(Optional description text) To connect securely to [product name], your application or tool needs an API key with permission to access resources such as [product resource name].',
    nameHelperText:
      'Providing the application name will help you identify your API key later.',
    nameLabel: 'Name your application',
    namePlaceholder: 'Application name',
    nameRequired: true,
    editing: true,
    apiKey: '',
    loadingText: 'Saving...',
    generateSuccessBody: 'API Key saved.',
    apiKeyName: 'test_key_1',
    error: true,
    errorText: 'Failed to edit API key',
  },
});

export const CustomEdit = prepareStory(MultiStepTemplate, {
  args: {
    ...defaultProps,
    generateButtonText: 'Generate',
    modalLabel: 'Generate API key',
    nextStepButtonText: 'Next',
    previousStepButtonText: 'Previous',
    downloadFileName: 'apikey',
    savedName: 'test_key_1',
    savedAllResources: false,
    savedResource: 'resource_1',
    savedPermissions: 'Read only',
    editing: true,
    editButtonText: 'Save API key',
  },
  parameters: {
    docs: {
      source: {
        // TODO provide better alternative source code, or remove this once the issue is resolved:
        // https://github.com/storybookjs/storybook/issues/11554
        code: 'Sorry, this feature is not currently available for this story',
      },
    },
  },
});
