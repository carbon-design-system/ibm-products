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

const Template = ({ storyInitiallyOpen = true, story, children, ...args }) => {
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
  story: PropTypes.object,
  storyInitiallyOpen: PropTypes.bool,
  ...CreateModal.propTypes,
};

export const Basic = Template.bind({});
Basic.storyName = 'Create Modal';
Basic.args = {
  story: Basic,
  ...defaultProps,
  children: (
    <>
      <TextInput
        id="1"
        labelText="Text input label"
        helperText="Helper text goes here"
        placeholder="Placeholder"
      />
      <NumberInput
        id="1"
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
        id="1"
        placeholder="Placeholder text"
        labelText="Text area label"
        helperText="Optional helper text"
      />
    </>
  ),
};

export const BasicNoSubtitle = Template.bind({});
BasicNoSubtitle.storyName = 'Create Modal with no subtitle';
BasicNoSubtitle.args = {
  story: BasicNoSubtitle,
  title: 'Title',
  description:
    'This is example description text that will appear here in your modal ',
  children: (
    <>
      <TextInput id="1" labelText="First name" placeholder="Jane" />
      <TextInput id="2" labelText="Last name" placeholder="Doe" />
      <RadioButtonGroup
        legendText="Interested in opportunities?"
        name="radio-button-group"
        defaultSelected="radio-1">
        <RadioButton labelText="Yes" value="radio-1" id="radio-1" />
        <RadioButton labelText="No" value="radio-2" id="radio-2" />
        <RadioButton labelText="Maybe" value="radio-23" id="radio-3" />
      </RadioButtonGroup>
      <DatePicker datePickerType="single">
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText="Date of birth"
          id="date-picker-single"
        />
      </DatePicker>
    </>
  ),
};

export const BasicWithMultiFields = Template.bind({});
BasicWithMultiFields.storyName = 'Create Modal with Multifields';
BasicWithMultiFields.args = {
  story: BasicWithMultiFields,
  ...defaultProps,
  children: (
    <>
      <div className="example-wrapper">
        <TextInput id="1" labelText="First name" placeholder="Jane" />
        <TextInput id="2" labelText="Last name" placeholder="Doe" />
      </div>
      <DatePicker datePickerType="single">
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText="Date of birth"
          id="date-picker-single"
        />
      </DatePicker>
    </>
  ),
};

export const BasicWithDisabledButton = Template.bind({});
BasicWithDisabledButton.storyName =
  'Create modal with disabled primary form button';
BasicWithDisabledButton.args = {
  disabled: true,
  story: BasicWithDisabledButton,
  ...defaultProps,
  children: (
    <>
      <TextInput
        required
        id="1"
        labelText="Text input label"
        helperText="Helper text goes here"
        placeholder="Placeholder"
      />
      <NumberInput
        required
        id="1"
        className="create-modal--storybook-input"
        label="Number input label"
        helperText="Optional helper text goes here"
        min={0}
        max={50}
        value={1}
      />
      <Dropdown
        required
        direction="top"
        id="default"
        titleText="Dropdown label"
        helperText="This is some helper text"
        label="Dropdown menu options"
        items={['Option 0', 'Option 1', 'Option 2']}
      />
    </>
  ),
};

export const BasicWithDarkTheme = Template.bind({});
BasicWithDarkTheme.storyName = 'Create Modal using dark theme';
BasicWithDarkTheme.args = {
  story: Basic,
  className: 'sb--use-carbon-theme-g90',
  ...defaultProps,
  children: (
    <>
      <TextInput
        id="1"
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
        id="1"
        placeholder="Placeholder text"
        labelText="Text area label"
        helperText="Optional helper text"
      />
    </>
  ),
};
