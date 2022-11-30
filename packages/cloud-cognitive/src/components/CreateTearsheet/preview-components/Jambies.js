import React, { useState } from "react";

import { Button, TextInput } from "carbon-components-react";
import { CreateTearsheetStep } from '../CreateTearsheetStep';
import { CreateTearsheet } from '../CreateTearsheet';

export const Jambos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => setIsOpen(true)}>Open tearsheet</Button>
      </div>
      <CreateTearsheet
        open={isOpen}
        backButtonText="Back"
        cancelButtonText="Cancel"
        nextButtonText="Next"
        submitButtonText="Save"
        onClose={() => setIsOpen(false)}
        onRequestSubmit={() => {}}
      >
        <CreateTearsheetStep hasFieldset={false} title="Step 1" description="">
          <TextInput
            id="field1"
            labelText="Field 1"
            onFocus={() => console.log("Focused!")}
          />
        </CreateTearsheetStep>
        <CreateTearsheetStep hasFieldset={false} title="Step 2" description="">
          <TextInput id="field2" labelText="Field 2" />
        </CreateTearsheetStep>
      </CreateTearsheet>
    </>
  );
};
