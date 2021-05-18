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
} from 'carbon-components-react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';

import { CreateSidePanel } from '.';
import mdx from './CreateSidePanel.mdx';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, CreateSidePanel.displayName);

export default {
  title: `${storybookPrefix}/${CreateSidePanel.displayName}`,
  component: CreateSidePanel,
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
        slideIn={true}
        open={open}
        onRequestClose={() => setOpen(false)}
        selectorPrimaryFocus=".bx--text-input">
        <TextInput
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
        slideIn={true}
        open={open}
        onRequestClose={() => setOpen(false)}
        disableSubmit={textInput.length === 0 ? true : false}>
        <TextInput
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

export const Default = DefaultTemplate.bind({});
Default.args = {
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const WithFormValidation = TemplateWithFormValidation.bind({});
WithFormValidation.args = {
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};
