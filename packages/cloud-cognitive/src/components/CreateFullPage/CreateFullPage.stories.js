/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { action } from '@storybook/addon-actions';
import { CreateFullPage } from '.';
import { CreateFullPageStep } from './CreateFullPageStep';
import mdx from './CreateFullPage.mdx';

import styles from './_storybook-styles.scss';
const storyClass = 'create-full-page-stories';

import {
  TextInput,
  NumberInput,
  InlineNotification,
  Toggle,
  Tooltip,
  RadioButtonGroup,
  RadioButton,
  FormGroup,
} from 'carbon-components-react';

export default {
  title: getStoryTitle(CreateFullPage.displayName),
  component: CreateFullPage,
  subcomponents: {
    CreateFullPageStep,
  },
  parameters: {
    styles,
    layout: 'fullscreen',
    docs: { page: mdx },
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    includeViewAllToggle: { table: { disable: true } },
  },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
};

const defaultFullPageProps = {
  nextButtonText: 'Next',
  backButtonText: 'Back',
  cancelButtonText: 'Cancel',
  submitButtonText: 'Create',
  modalTitle: 'Are you sure you want to cancel?',
  modalDescription:
    "If you cancel, the information you have entered won't be saved.",
  modalDangerButtonText: 'Cancel partition',
  modalSecondaryButtonText: 'Return to form',
  onRequestSubmit: action('Submit handler called'),
  onClose: action('Close handler called'),
  sideNavAriaLabel: 'Create topic side nav',
};

const Template = ({ ...args }) => {
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);

  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep
        className={`${storyClass}__step-fieldset--no-label`}
        title="Partition"
        subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages."
        description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group."
        formLegendText="Partition"
        onNext={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              // Example usage of how to prevent the next step if some kind
              // of error occurred during the `onNext` handler.
              if (shouldReject) {
                setHasSubmitError(true);
                reject();
              }
              setIsInvalid(false);
              resolve();
            }, simulatedDelay);
          });
        }}
        disableSubmit={!textInput}>
        <TextInput
          id="test1"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
          onChange={(e) => {
            setTextInput(e.target.value);
            setIsInvalid(false);
          }}
          onBlur={() => {
            textInput.length === 0 && setIsInvalid(true);
          }}
          invalid={isInvalid}
        />
        {hasSubmitError && (
          <InlineNotification
            lowContrast
            kind="error"
            title="Error"
            subtitle="Resolve errors to continue"
            onClose={() => setHasSubmitError(false)}
          />
        )}
        <div>
          <Tooltip
            triggerClassName={`${storyClass}__tooltip`}
            direction="right"
            tabIndex={0}>
            <p>
              Once toggled on, an inline error notification will appear upon
              clicking next. This is an example usage of how to prevent the next
              step if some kind of error occurred during the `onNext` handler.
            </p>
          </Tooltip>
          <Toggle
            className={`${storyClass}__error--toggle`}
            id="simulated-error-toggle"
            size="sm"
            labelText="Simulate error"
            onToggle={(event) => setShouldReject(event)}
          />
        </div>
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Empty"
        secondaryLabel="Optional"
        description="Empty step for demonstration purposes"
        hasForm={false}
      />
      <CreateFullPageStep
        className={`${storyClass}__step-fieldset--no-label`}
        title="Core configuration"
        description="Here is an example description for the 'Core configuration' step."
        secondaryLabel="Optional"
        formLegendText="Core configuration">
        <TextInput
          id="input-2"
          invalidText="A valid value is required"
          labelText="Topic name (optional)"
          placeholder="Enter topic name"
        />
        <NumberInput
          id="tj-input-3"
          invalidText="Number is not valid"
          label="Number input label (optional)"
          max={100}
          min={0}
          step={10}
          value={0}
        />
        <NumberInput
          id="tj-input-4"
          invalidText="Number is not valid"
          label="Number input label (optional)"
          max={100}
          min={0}
          step={10}
          value={0}
        />
        <TextInput
          id="input-5"
          invalidText="A valid value is required"
          labelText="Minimum in-sync replicas (optional)"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Message retention"
        subtitle="This is how many copies of a topic will be made for high availability"
        description="The partitions of each topic can be replicated across a configurable number of brokers."
        formLegendText="Replicas">
        <div>
          <RadioButtonGroup
            defaultSelected="standard"
            legend="Group Legend"
            name="radio-button-group"
            valueSelected="standard"
            orientation="vertical">
            <RadioButton
              id="radio-1"
              labelText="Replication factor: 1"
              value="standard"
            />
            <RadioButton
              id="radio-2"
              labelText="Replication factor: 2"
              value="default-selected"
            />
            <RadioButton
              id="radio-3"
              labelText="Replication factor: 3"
              value="disabled"
            />
          </RadioButtonGroup>
        </div>
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

const TemplateWithSections = ({ ...args }) => {
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);

  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep
        title="Partition"
        subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages."
        description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group."
        hasForm={false}
        onNext={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              // Example usage of how to prevent the next step if some kind
              // of error occurred during the `onNext` handler.
              if (shouldReject) {
                setHasSubmitError(true);
                reject();
              }
              setIsInvalid(false);
              resolve();
            }, simulatedDelay);
          });
        }}
        disableSubmit={!textInput}>
        <FormGroup
          className={`${storyClass}__step-fieldset ${storyClass}__step-fieldset--label`}
          legendText="Partition">
          <TextInput
            id="test1"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
            onChange={(e) => {
              setTextInput(e.target.value);
              setIsInvalid(false);
            }}
            onBlur={() => {
              textInput.length === 0 && setIsInvalid(true);
            }}
            invalid={isInvalid}
          />
          {hasSubmitError && (
            <InlineNotification
              lowContrast
              kind="error"
              title="Error"
              subtitle="Resolve errors to continue"
              onClose={() => setHasSubmitError(false)}
            />
          )}
          <div>
            <Tooltip
              triggerClassName={`${storyClass}__tooltip`}
              direction="right"
              tabIndex={0}>
              <p>
                Once toggled on, an inline error notification will appear upon
                clicking next. This is an example usage of how to prevent the
                next step if some kind of error occurred during the `onNext`
                handler.
              </p>
            </Tooltip>
            <Toggle
              className={`${storyClass}__error--toggle`}
              id="simulated-error-toggle"
              size="sm"
              labelText="Simulate error"
              onToggle={(event) => setShouldReject(event)}
            />
          </div>
        </FormGroup>
        <span className={`${storyClass}__section-divider`} />
        <FormGroup
          className={`${storyClass}__step-fieldset ${storyClass}__step-fieldset--label`}
          legendText="Core configuration">
          <h4 className={`${storyClass}__step-title`}>Core configuration</h4>
          <h6 className={`${storyClass}__step-subtitle`}>
            This is how long messages are retained before they are deleted.
          </h6>
          <p className={`${storyClass}__step-description`}>
            If your messages are not read by a consumer within this time, they
            will be missed.
          </p>
          <TextInput
            id="input-2"
            invalidText="A valid value is required"
            labelText="Topic name (optional)"
            placeholder="Enter topic name"
          />
          <NumberInput
            id="tj-input-3"
            invalidText="Number is not valid"
            label="Number input label (optional)"
            max={100}
            min={0}
            step={10}
            value={0}
          />
          <NumberInput
            id="tj-input-4"
            invalidText="Number is not valid"
            label="Number input label (optional"
            max={100}
            min={0}
            step={10}
            value={0}
          />
          <TextInput
            id="input-5"
            invalidText="A valid value is required"
            labelText="Minimum in-sync replicas (optional)"
            placeholder="Enter topic name"
          />
        </FormGroup>
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Message retention"
        subtitle="This is how many copies of a topic will be made for high availability"
        description="The partitions of each topic can be replicated across a configurable number of brokers."
        formLegendText="Replicas">
        <div>
          <RadioButtonGroup
            defaultSelected="standard"
            legend="Group Legend"
            name="radio-button-group"
            valueSelected="standard"
            orientation="vertical">
            <RadioButton
              id="radio-1"
              labelText="Replication factor: 1"
              value="standard"
            />
            <RadioButton
              id="radio-2"
              labelText="Replication factor: 2"
              value="default-selected"
            />
            <RadioButton
              id="radio-3"
              labelText="Replication factor: 3"
              value="disabled"
            />
          </RadioButtonGroup>
        </div>
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

export const createFullPage = prepareStory(Template, {
  args: {
    ...defaultFullPageProps,
  },
});

export const createFullPageWithSections = prepareStory(TemplateWithSections, {
  args: {
    ...defaultFullPageProps,
  },
});
