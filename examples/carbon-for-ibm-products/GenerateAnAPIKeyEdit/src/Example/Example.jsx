import React, { useState } from 'react';
import { Button, Modal, TextInput } from '@carbon/react';

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

export default Example;
