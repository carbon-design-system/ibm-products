import React, { useState } from 'react';
import { EditInPlace } from '@carbon/ibm-products';

import './_example.scss';

// This example uses the V2 API. It is strongly encouraged to use V2.
export const Example = () => {
  const [value, setValue] = useState('example value');

  const onChange = (val) => {
    setValue(val);
  };

  const onSave = () => {
    console.log('saved!');
  };

  const onCancel = (initialVal) => {
    setValue(initialVal);
  };

  return (
    <div className="container">
      <div>The following is an example of EditInPlace.</div>
      <br />
      <EditInPlace
        // cancelLabel="Cancel"
        className="inline-edit-example"
        // editLabel="Edit"
        id="example-id"
        // invalidLabel="This field is required"
        labelText="Label text"
        onCancel={onCancel}
        onChange={onChange}
        onSave={onSave}
        // saveLabel="Save"
        // v2
        value={value}
        cancelLabel="Cancel the current action"
        editLabel="Edit the current value"
        saveLabel="Save the current value"
        size="md"
        inheritTypography={true}
      />
    </div>
  );
};

export default Example;
