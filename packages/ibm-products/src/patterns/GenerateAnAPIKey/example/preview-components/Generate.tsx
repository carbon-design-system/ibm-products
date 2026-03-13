/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button, TextInput } from '@carbon/react';
import { GenerateAnAPIKey } from '../components/GenerateAnAPIKey';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const apiCall = async () => {
  await wait(1000);
  return '082be29c-3622-4276-bc58-695e2a12bd93';
};

export const Generate = () => {
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
    if (key) return 'finished';
    if (loading) return 'active';
    return 'inactive';
  };

  const modalProps = key
    ? {
        modalHeading: 'API key successfully created',
        primaryButtonText: 'Copy',
        onRequestSubmit: copyKey,
        loadingStatus: 'inactive' as const,
      }
    : {
        modalHeading: 'Generate an API key',
        primaryButtonText: 'Generate API key',
        onRequestSubmit: fetchKey,
        loadingStatus: getLoadingStatus(),
      };

  return (
    <div className="app">
      <Button onClick={toggleModal}>Generate</Button>
      <GenerateAnAPIKey
        open={open}
        onRequestClose={toggleModal}
        primaryButtonDisabled={loading || name.length === 0}
        secondaryButtonText="Close"
        loadingDescription="Loading"
        onLoadingSuccess={() => {}}
        {...modalProps}
      >
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
      </GenerateAnAPIKey>
    </div>
  );
};
