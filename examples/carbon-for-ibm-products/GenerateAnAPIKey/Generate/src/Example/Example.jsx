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

export default Example;
