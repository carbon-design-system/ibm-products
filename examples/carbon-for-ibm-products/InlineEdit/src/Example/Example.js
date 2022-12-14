import React, { useState } from 'react';
import { InlineEdit } from '@carbon/ibm-products';

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
    <InlineEdit
      cancelLabel="Cancel"
      className="inline-edit-example"
      editLabel="Edit"
      id="example-id"
      invalidLabel="This field is required"
      labelText="Label text"
      onCancel={onCancel}
      onChange={onChange}
      onSave={onSave}
      saveLabel="Save"
      v2
      value={value}
    />
  );
};
