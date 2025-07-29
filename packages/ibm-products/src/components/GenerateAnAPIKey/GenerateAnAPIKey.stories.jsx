/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button, Modal, TextInput, PasswordInput } from '@carbon/react';
import styles from './_storybook-styles.scss?inline';
import DocsPage from './GenerateAnAPIKey.mdx';
import wait from '../../global/js/utils/wait';

export default {
  title: 'Patterns/Generate an API key',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

async function apiCall() {
  await wait(1000);
  return '082be29c-3622-4276-bc58-695e2a12bd93';
}

const InstantTemplate = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');

  const fetchKey = async () => {
    setLoading(true);
    const data = await apiCall();
    setLoading(false);
    setKey(data);
    toggleModal();
  };

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(key);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="app">
      <Button onClick={fetchKey} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </Button>
      <Modal
        open={open}
        onRequestClose={toggleModal}
        modalHeading="API key successfully created"
        primaryButtonText="Copy"
        secondaryButtonText="Close"
        onRequestSubmit={copyKey}
      >
        <PasswordInput value={key} />
        <p>
          This is your unique API key and is non-recoverable. If you lose this
          API key, you will have to reset it.
        </p>
      </Modal>
    </div>
  );
};

export const instantGenerate = InstantTemplate.bind({});
instantGenerate.storyName = 'Instant generate';
instantGenerate.args = {};

const GenerateTemplate = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');
  const [name, setName] = useState('');

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const fetchKey = async () => {
    setLoading(true);
    const data = await apiCall();
    setLoading(false);
    setKey(data);
  };

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(key);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleModal = () => {
    if (open) {
      setKey('');
      setName('');
      setLoading(false);
    }
    setOpen(!open);
  };

  const getModalProps = () => {
    const props = {
      primaryButtonText: 'Generate API key',
      secondaryButtonText: 'Close',
      modalHeading: 'Generate an API key',
      onRequestSubmit: fetchKey,
    };

    if (key) {
      props.primaryButtonText = 'Copy';
      props.modalHeading = 'API key successfully created';
      props.onRequestSubmit = copyKey;
    }

    return props;
  };

  const {
    primaryButtonText,
    secondaryButtonText,
    modalHeading,
    onRequestSubmit,
  } = getModalProps();

  const canSubmit = !loading && name.length > 0;

  return (
    <div className="app">
      <Button onClick={toggleModal}>Generate</Button>
      <Modal
        open={open}
        onRequestClose={toggleModal}
        modalHeading={modalHeading}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onRequestSubmit={onRequestSubmit}
        primaryButtonDisabled={!canSubmit}
      >
        {key ? (
          <>
            <TextInput value={key} readOnly />
            <p>
              This is your unique API key and is non-recoverable. If you lose
              this API key, you will have to reset it.
            </p>
          </>
        ) : (
          <>
            <p>
              (Optional description text) To connect securely to [product name],
              your application or tool needs an API key with permission to
              access resources such as [product resource name].
            </p>
            <TextInput value={name} onChange={handleName} disabled={loading} />
          </>
        )}
      </Modal>
    </div>
  );
};

export const generate = GenerateTemplate.bind({});
generate.storyName = 'Generate';
generate.args = {};

const EditTemplate = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('resource_name_1');
  const [success, setSuccess] = useState(false);

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const putName = async () => {
    setSuccess(false);
    setLoading(true);
    await apiCall();
    setLoading(false);
    setSuccess(true);
  };

  const toggleModal = () => {
    if (open) {
      setName('resource_name_1');
      setSuccess(false);
      setLoading(false);
    }
    setOpen(!open);
  };

  const canSubmit = !loading && name.length > 0;

  return (
    <div className="app">
      <Button onClick={toggleModal}>Edit</Button>
      <Modal
        open={open}
        onRequestClose={toggleModal}
        modalHeading="Edit API key"
        primaryButtonText="Edit API key"
        secondaryButtonText="Close"
        onRequestSubmit={putName}
        primaryButtonDisabled={!canSubmit}
      >
        <p>
          (Optional description text) To connect securely to [product name],
          your application or tool needs an API key with permission to access
          resources such as [product resource name].
        </p>
        <TextInput value={name} onChange={handleName} disabled={loading} />
        {success && <small>API key successfully saved</small>}
      </Modal>
    </div>
  );
};

export const edit = EditTemplate.bind({});
edit.storyName = 'Edit';
edit.args = {};
