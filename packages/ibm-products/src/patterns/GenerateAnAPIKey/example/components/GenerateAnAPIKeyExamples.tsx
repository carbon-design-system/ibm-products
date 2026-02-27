/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button, Modal, TextInput, PasswordInput } from '@carbon/react';

// Local wait utility
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API call
const apiCall = async () => {
  await wait(1000);
  return '082be29c-3622-4276-bc58-695e2a12bd93';
};

export const InstantGenerateExample = () => {
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
        <PasswordInput
          id="instant-api-key"
          value={key}
          helperText="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
        />
      </Modal>
    </div>
  );
};

export const GenerateExample = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');
  const [name, setName] = useState('');

  const handleName = (evt: React.ChangeEvent<HTMLInputElement>) => {
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

  const getLoadingStatus = (): 'inactive' | 'active' | 'finished' => {
    if (key) {
      return 'finished';
    }

    if (loading) {
      return 'active';
    }

    return 'inactive';
  };

  const getModalProps = () => {
    const props: any = {
      loadingDescription: 'Loading',
      loadingStatus: getLoadingStatus(),
      modalHeading: 'Generate an API key',
      onLoadingSuccess: () => {},
      open,
      onRequestClose: toggleModal,
      onRequestSubmit: fetchKey,
      primaryButtonDisabled: loading || name.length === 0,
      primaryButtonText: 'Generate API key',
      secondaryButtonText: 'Close',
    };

    if (key) {
      props.loadingStatus = 'inactive';
      props.modalHeading = 'API key successfully created';
      props.onRequestSubmit = copyKey;
      props.primaryButtonText = 'Copy';
    }

    return props;
  };

  const props = getModalProps();

  return (
    <div className="app">
      <Button onClick={toggleModal}>Generate</Button>
      <Modal {...props}>
        {key ? (
          <TextInput
            id="generated-api-key"
            labelText="Unique API key"
            value={key}
            readOnly
            helperText="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
          />
        ) : (
          <>
            <p style={{ marginBlockEnd: '1rem' }}>
              (Optional description text) To connect securely to [product name],
              your application or tool needs an API key with permission to
              access resources such as [product resource name].
            </p>
            <TextInput
              id="app-name"
              labelText="Name your application"
              value={name}
              onChange={handleName}
              disabled={loading}
              helperText="Providing a name will help you identify your API key later."
            />
          </>
        )}
      </Modal>
    </div>
  );
};

export const EditExample = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('resource_name_1');
  const [success, setSuccess] = useState(false);

  const handleName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (success) {
      setSuccess(false);
    }
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

  const getLoadingStatus = (): 'inactive' | 'active' | 'finished' => {
    if (success) {
      return 'finished';
    }

    if (loading) {
      return 'active';
    }

    return 'inactive';
  };

  const getModalProps = () => {
    return {
      loadingDescription: success ? 'Edited' : 'Loading',
      loadingStatus: getLoadingStatus(),
      modalHeading: 'Edit API key',
      onLoadingSuccess: () => {},
      open,
      onRequestClose: toggleModal,
      onRequestSubmit: putName,
      primaryButtonDisabled: loading || name.length === 0,
      primaryButtonText: 'Edit API key',
      secondaryButtonText: 'Close',
    };
  };

  const props = getModalProps();

  return (
    <div className="app">
      <Button onClick={toggleModal}>Edit</Button>
      <Modal {...props}>
        <p style={{ marginBlockEnd: '1rem' }}>
          (Optional description text) To connect securely to [product name],
          your application or tool needs an API key with permission to access
          resources such as [product resource name].
        </p>
        <TextInput
          id="edit-app-name"
          labelText="Name your application"
          value={name}
          onChange={handleName}
          disabled={loading}
          helperText={success ? 'API key successfully saved' : ''}
        />
      </Modal>
    </div>
  );
};
