/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button, PasswordInput } from '@carbon/react';
import { GenerateAnAPIKey } from '../components/GenerateAnAPIKey';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const apiCall = async () => {
  await wait(1000);
  return '082be29c-3622-4276-bc58-695e2a12bd93';
};

export const InstantGenerate = () => {
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
      <GenerateAnAPIKey
        open={open}
        onRequestClose={toggleModal}
        onRequestSubmit={copyKey}
        modalHeading="API key successfully created"
        primaryButtonText="Copy"
        secondaryButtonText="Close"
      >
        <PasswordInput
          id="instant-api-key"
          labelText="API key"
          value={key}
          helperText="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
        />
      </GenerateAnAPIKey>
    </div>
  );
};
