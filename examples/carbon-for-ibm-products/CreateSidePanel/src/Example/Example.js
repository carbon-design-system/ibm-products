import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  Button,
  FormGroup,
  NumberInput,
  TextInput,
  Dropdown,
} from 'carbon-components-react';
import { pkg } from '@carbon/ibm-products/es/settings';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

import './_example.scss';

import { CreateSidePanel } from '@carbon/ibm-products';

const defaultStoryProps = {
  title: 'Create partitions',
  subtitle: "Specify the details of the partitions you're creating",
  formTitle: 'Core configuration',
  formDescription:
    'We recommend you fill out and evaluate these details at a minimum before deploying your topic.',
  primaryButtonText: 'Create',
  secondaryButtonText: 'Cancel',
  selectorPrimaryFocus: '.bx--text-input',
};

const items = ['Day(s)', 'Month(s)', 'Year(s'];

const renderUIShellHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="IBM Cloud Pak">
        <HeaderName href="/" prefix="IBM">
          Cloud Pak
        </HeaderName>
      </Header>
    )}
  />
);

export const Example = () => {
  const blockClass = `${pkg.prefix}--create-side-panel`;
  const prefix = 'create-side-panel-stories__';
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <div id="ibm-products-page-content">
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Close panel' : 'Open panel'}
        </Button>
      </div>
      <CreateSidePanel
        {...defaultStoryProps}
        open={open}
        onRequestClose={() => setOpen(false)}
        disableSubmit={!textInput.length}
        selectorPageContent="#ibm-products-page-content"
      >
        <FormGroup
          className={`${blockClass}__form ${prefix}example-form-group`}
          legendText="Personal information"
        >
          <TextInput
            id="create-side-panel-first-name"
            labelText="First name"
            className={`${prefix}form-item`}
            placeholder="Enter topic name"
            onChange={(e) => {
              setTextInput(e.target.value);
              setInvalid(false);
            }}
            onBlur={() => {
              textInput.length === 0 && setInvalid(true);
            }}
            invalid={invalid}
            invalidText="This is a required field"
          />
          <Dropdown
            id="create-side-panel-dropdown-bu"
            titleText="Business unit"
            ariaLabel="Dropdown"
            initialSelectedItem="IBM Cloud platform"
            items={['IBM Cloud platform', 'AI Ops', 'Watson']}
            label="Business unit"
            className={`${prefix}form-item`}
          />
        </FormGroup>
        <FormGroup
          className={`${blockClass}__form ${prefix}example-form-group`}
          legendText="Topic information"
        >
          <TextInput
            id="create-side-panel-topic-name-c"
            labelText="Topic name"
            className={`${prefix}form-item`}
            placeholder="Enter topic name"
          />
          <NumberInput
            id="1"
            className={`${prefix}form-item`}
            label="Partitions"
            min={0}
            max={50}
            value={1}
          />
          <NumberInput
            id="2"
            className={`${prefix}form-item`}
            label="Replicas"
            min={0}
            max={50}
            value={1}
          />
          <NumberInput
            id="3"
            className={`${prefix}form-item`}
            label="Minimum in-sync replicas"
            min={0}
            max={50}
            value={1}
          />
          <div className={`${prefix}example-container`}>
            <NumberInput
              id="4"
              className={`${prefix}form-item`}
              label="Retention time"
              min={0}
              max={50}
              value={30}
            />
            <Dropdown
              id="create-side-panel-dropdown-options-c"
              ariaLabel="Dropdown"
              initialSelectedItem="Day(s)"
              items={items}
              label="Options"
              className={`${prefix}form-item`}
            />
          </div>
          <NumberInput
            id="3"
            className={`${prefix}form-item`}
            label="Minimum in-sync replicas"
            min={0}
            max={50}
            value={1}
          />
        </FormGroup>
      </CreateSidePanel>
    </>
  );
};
