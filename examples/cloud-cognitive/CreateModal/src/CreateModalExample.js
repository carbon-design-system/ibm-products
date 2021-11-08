// cspell:words humio

import React, { useState } from 'react';

import { CreateModal } from '@carbon/ibm-cloud-cognitive/es/components';

import {
  TextInput,
  Dropdown,
  TextArea,
  RadioButton,
  RadioButtonGroup,
  Button,
} from 'carbon-components-react';

export const CreateModalExample = () => {
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [selection, setSelection] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidSelection, setInvalidSelection] = useState(false);

  const items = ['Humio-01', 'Humio-02', 'Humio-03', 'ServiceNow'];

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <CreateModal
        title="Add data set"
        subtitle="Add your anomalous data to the data set for filtering"
        description="To create a data set, start by giving your data set a name and selecting where that data will come from"
        selectorPrimaryFocus=".bx--text-input"
        primaryButtonText="Create"
        secondaryButtonText="Cancel"
        open={open}
        onRequestClose={() => setOpen(false)}
        disableSubmit={
          textInput.length === 0 ? true : selection.length === 0 ? true : false
        }
      >
        <TextInput
          id="1"
          key="form-field-1"
          labelText="Data set name"
          placeholder="Name"
          onChange={(e) => {
            setTextInput(e.target.value);
            setInvalidName(false);
          }}
          onBlur={() => {
            textInput.length === 0 && setInvalidName(true);
          }}
          invalid={invalidName}
          invalidText="This is a required field"
        />
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={items}
          label="Dropdown menu options"
          titleText="Data assets"
          invalid={invalidSelection}
          onChange={(e) => {
            setSelection(e.selectedItem);
            setInvalidSelection(false);
          }}
          onBlur={() => {
            selection.length === 0 && setInvalidSelection(true);
          }}
        />
        <TextArea
          labelText="Data set notes (optional)"
          placeholder="Notes go here"
        />
        <RadioButtonGroup
          legendText="Timeframe (days)"
          name="radio-button-group"
          defaultSelected="radio-1"
        >
          <RadioButton labelText="30" value="radio-1" id="radio-1" />
          <RadioButton labelText="60" value="radio-2" id="radio-2" />
          <RadioButton labelText="90" value="radio-3" id="radio-3" />
        </RadioButtonGroup>
      </CreateModal>
    </>
  );
};
