import React, { useState } from 'react';
import { Button, Modal, PasswordInput } from '@carbon/react';

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const apiCall = async () => {
  await wait(1000);
  return '082be29c-3622-4276-bc58-695e2a12bd93';
};

export const Example = () => {
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

export default Example;
