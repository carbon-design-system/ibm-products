/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import {
  Button,
  Grid,
  Row,
  Column,
  TextInput,
  NumberInput,
  Dropdown,
  FormGroup,
} from 'carbon-components-react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import { CreateSidePanel, deprecatedProps } from './CreateSidePanel';
import mdx from './CreateSidePanel.mdx';

import styles from './_storybook-styles.scss';

const blockClass = `${pkg.prefix}--create-side-panel`;

export default {
  title: getStoryTitle(CreateSidePanel.displayName),
  component: CreateSidePanel,
  argTypes: getDeprecatedArgTypes(deprecatedProps),
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const prefix = 'create-side-panel-stories__';

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

const items = ['Day(s)', 'Month(s)', 'Year(s)'];

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

const DefaultTemplate = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="cloud-and-cognitive-page-content">
        <Row>
          <Column>
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Close side panel' : 'Open side panel'}
            </Button>
          </Column>
        </Row>
      </Grid>
      <CreateSidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        selectorPrimaryFocus=".bx--text-input">
        <TextInput
          id="create-side-panel-topic-name-a"
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
        <div
          style={{
            display: 'grid',
            alignItems: 'flex-end',
            gridGap: '0.75rem',
            gridTemplateColumns: '1fr 1fr',
          }}>
          <NumberInput
            id="4"
            className={`${prefix}form-item`}
            label="Retention time"
            min={0}
            max={50}
            value={30}
          />
          <Dropdown
            id="create-side-panel-dropdown-options-a"
            ariaLabel="Dropdown"
            items={items}
            initialSelectedItem="Day(s)"
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
      </CreateSidePanel>
    </>
  );
};

const TemplateWithFormValidation = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="cloud-and-cognitive-page-content">
        <Row>
          <Column>
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Close side panel' : 'Open side panel'}
            </Button>
          </Column>
        </Row>
      </Grid>
      <CreateSidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        disableSubmit={!textInput.length}>
        <TextInput
          id="create-side-panel-topic-name-b"
          labelText="Topic name"
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
            id="create-side-panel-dropdown-options-b"
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
      </CreateSidePanel>
    </>
  );
};

const TemplateWithMultipleForms = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="cloud-and-cognitive-page-content">
        <Row>
          <Column>
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Close side panel' : 'Open side panel'}
            </Button>
          </Column>
        </Row>
      </Grid>
      <CreateSidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        disableSubmit={!textInput.length}>
        <FormGroup
          className={`${blockClass}__form ${prefix}example-form-group`}
          legendText="Personal information">
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
          legendText="Topic information">
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

export const Default = prepareStory(DefaultTemplate, {
  args: {
    selectorPageContent: '#cloud-and-cognitive-page-content',
    ...defaultStoryProps,
  },
});

export const WithFormValidation = prepareStory(TemplateWithFormValidation, {
  args: {
    selectorPageContent: '#cloud-and-cognitive-page-content',
    ...defaultStoryProps,
  },
});

export const WithMultipleForms = prepareStory(TemplateWithMultipleForms, {
  args: {
    selectorPageContent: '#cloud-and-cognitive-page-content',
    ...defaultStoryProps,
  },
});
