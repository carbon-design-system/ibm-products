/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextInput,
  NumberInput,
  TextArea,
  Dropdown,
  DatePicker,
  DatePickerInput,
  RadioButton,
  RadioButtonGroup,
} from 'carbon-components-react';

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { CreateModal } from '.';
import mdx from './CreateModal.mdx';
const storybookPrefix = getStorybookPrefix(pkg, CreateModal.displayName);

import styles from './_storybook-styles.scss';

export default {
  title: `${storybookPrefix}/${CreateModal.displayName}`,
  component: CreateModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = ({ children, ...args }) => {
  return (
    <CreateModal {...args} open>
      {children}
    </CreateModal>
  );
};

const TemplateWithStateManager = ({
  storyInitiallyOpen = false,
  story,
  children,
  ...args
}) => {
  const [open, setOpen] = useState(storyInitiallyOpen);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {story?.storyName}</Button>
      <style>{`.${pkg.prefix}-create-modal { opacity: 0 }`};</style>
      <CreateModal {...args} open={open} onClose={() => setOpen(false)}>
        {children}
      </CreateModal>
    </>
  );
};

const defaultProps = {
  title: 'Title',
  subtitle: 'Your subtitle text will appear here',
  description:
    'This is example description text that will appear here in your modal ',
};

Template.propTypes = {
  children: PropTypes.node,
};

TemplateWithStateManager.propTypes = {
  story: PropTypes.object,
  storyInitiallyOpen: PropTypes.bool,
  ...CreateModal.propTypes,
};

export const Default = Template.bind({});
Default.storyName = 'Create Modal';
Default.args = {
  story: Default,
  ...defaultProps,
  children: (
    <>
      <TextInput
        id="1"
        key="form-field-1"
        labelText="Text input label"
        helperText="Helper text goes here"
        placeholder="Placeholder"
      />
      <NumberInput
        id="2"
        className="create-modal--storybook-input"
        label="Number input label"
        helperText="Optional helper text goes here"
        min={0}
        max={50}
        value={1}
      />
      <RadioButtonGroup
        legendText="Radio button legend text goes here"
        name="radio-button-group"
        defaultSelected="radio-1">
        <RadioButton labelText="Radio-1" value="radio-1" id="radio-1" />
        <RadioButton labelText="Radio-2" value="radio-2" id="radio-2" />
        <RadioButton labelText="Radio-3" value="radio-3" id="radio-3" />
      </RadioButtonGroup>
      <DatePicker datePickerType="single">
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText="Date picker input label"
          id="date-picker-single"
        />
      </DatePicker>
    </>
  ),
};

export const DefaultWithDarkTheme = Template.bind({});
DefaultWithDarkTheme.storyName = 'Create Modal using dark theme';
DefaultWithDarkTheme.args = {
  story: DefaultWithDarkTheme,
  className: 'sb--use-carbon-theme-g90',
  ...defaultProps,
  children: (
    <>
      <TextInput
        id="1"
        key="form-field-1"
        labelText="Text input label"
        helperText="Helper text goes here"
        placeholder="Placeholder"
      />
      <Dropdown
        id="default"
        titleText="Dropdown label"
        helperText="This is some helper text"
        label="Dropdown menu options"
        items={['Option 0', 'Option 1', 'Option 2']}
      />
      <TextArea
        id="2"
        placeholder="Placeholder text"
        labelText="Text area label"
        helperText="Optional helper text"
      />
    </>
  ),
};

export const WithStateManager = TemplateWithStateManager.bind({});
WithStateManager.storyName = 'Create Modal with state manager';
WithStateManager.args = {
  story: WithStateManager,
  ...defaultProps,
  children: (
    <>
      <TextInput
        id="1"
        key="form-field-1"
        labelText="Text input label"
        helperText="Helper text goes here"
        placeholder="Placeholder"
      />
      <NumberInput
        id="2"
        className="create-modal--storybook-input"
        label="Number input label"
        helperText="Optional helper text goes here"
        min={0}
        max={50}
        value={1}
      />
      <Dropdown
        id="default"
        titleText="Dropdown label"
        helperText="This is some helper text"
        label="Dropdown menu options"
        items={['Option 0', 'Option 1', 'Option 2']}
      />
      <TextArea
        id="3"
        placeholder="Placeholder text"
        labelText="Text area label"
        helperText="Optional helper text"
      />
    </>
  ),
};
