import React, { useState } from 'react';
import { Saving } from '@carbon/ibm-products';

import './_example.scss';

export const Example = () => {
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
