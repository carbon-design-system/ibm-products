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

export const Edit = () => {
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
    if (success) return 'finished';
    if (loading) return 'active';
    return 'inactive';
  };

  return (
    <div className="app">
      <Button onClick={toggleModal}>Edit</Button>
      <GenerateAnAPIKey
        open={open}
        onRequestClose={toggleModal}
        onRequestSubmit={putName}
        modalHeading="Edit API key"
        primaryButtonText="Edit API key"
        secondaryButtonText="Close"
        primaryButtonDisabled={loading || name.length === 0}
        loadingStatus={getLoadingStatus()}
        loadingDescription={success ? 'Edited' : 'Loading'}
        onLoadingSuccess={() => {}}
      >
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
      </GenerateAnAPIKey>
    </div>
  );
};
