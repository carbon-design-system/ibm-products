import React, { useState } from 'react';
import { Saving } from '@carbon/ibm-cloud-cognitive';

export const TestComponent = () => {
  const [status, setStatus] = useState('default');
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSaveHandler = async () => {
    setStatus('in-progress');
    await wait(2000);
    setStatus('success');
  };
  return (
    <Saving
      type="manual"
      className="saving-example"
      defaultText="Save"
      failText="Failed to save"
      inProgressText="Saving..."
      secondaryButtonText="Cancel"
      successText="Saved"
      status={status}
      onRequestSave={onSaveHandler}
    />
  );
};
