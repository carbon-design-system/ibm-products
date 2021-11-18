import React, { useState } from 'react';
import { RemoveModal } from '@carbon/ibm-cloud-cognitive';
import { Button } from 'carbon-components-react';

export const TestComponent = () => {
  const [open, setOpen] = useState(true);
  const resourceName = 'bx1001';
  const props = {
    body: `Deleting ${resourceName} will permanently delete the configuration. This action cannot be undone.`,
    className: 'remove-modal-test',
    title: 'Confirm delete',
    iconDescription: 'close',
    inputInvalidText: 'A valid value is required',
    inputLabelText: `Type ${resourceName} to confirm`,
    inputPlaceholderText: 'Name of resourceName',
    open,
    onClose: () => setOpen(false),
    primaryButtonText: 'Delete',
    resourceName,
    secondaryButtonText: 'Close',
    label: `Delete ${resourceName}`,
    textConfirmation: true,
  };
  return (
    <>
      <RemoveModal {...props} />
      <Button onClick={() => setOpen(true)}>Open modal</Button>
    </>
  );
};
