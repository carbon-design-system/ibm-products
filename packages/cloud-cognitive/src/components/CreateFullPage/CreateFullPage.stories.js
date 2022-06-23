/**
 * Copyright IBM Corp. 2021, 2022
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
import { usePrefix } from '@carbon/react';
import { CreateFullPage } from '.';
import { CreateFullPageStep } from './CreateFullPageStep';
import { pkg } from '../../settings';
import mdx from './CreateFullPage.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'create-full-page-stories';
const blockClass = `${pkg.prefix}--create-full-page`;

import {
  Checkbox,
  TextInput,
  NumberInput,
  InlineNotification,
  Toggle,
  Tooltip,
  RadioButtonGroup,
  RadioButton,
  FormGroup,
  Grid,
  Column,
} from '@carbon/react';

export default {
  title: getStoryTitle(CreateFullPage.displayName),
  component: CreateFullPage,
  subcomponents: { CreateFullPageStep },
  parameters: {
    styles,
    layout: 'fullscreen',
    docs: { page: mdx },
    controls: { sort: 'requiredFirst' },
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
};

const Template = ({ ...args }) => {
  const carbonPrefix = usePrefix();
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [shouldIncludeAdditionalStep, setShouldIncludeAdditionalStep] =
    useState(false);

  return (
    <>
      <style>{`.${carbonPrefix}--modal { opacity: 0; }`};</style>
      <CreateFullPage {...args}>
        <CreateFullPageStep
          className={`${storyClass}__step-fieldset--no-label`}
          title="Partition"
          subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages."
          description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group."
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
          disableSubmit={!textInput}
        >
          <Grid>
            <Column lg={6}>
              <TextInput
                id="test-1"
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
                  tabIndex={0}
                >
                  <p className={`${storyClass}__error--text`}>
                    Once toggled on, an inline error notification will appear
                    upon clicking next. This is an example usage of how to
                    prevent the next step if some kind of error occurred during
                    the `onNext` handler.
                  </p>
                </Tooltip>
                <Toggle
                  className={`${storyClass}__error--toggle`}
                  id="simulated-error-toggle"
                  size="sm"
                  labelText="Simulate error"
                  onClick={() => setShouldReject((prev) => !prev)}
                />
              </div>
              <Checkbox
                labelText={`Include additional step`}
                id="include-additional-step-checkbox"
                onChange={(event, { checked }) =>
                  setShouldIncludeAdditionalStep(checked)
                }
                checked={shouldIncludeAdditionalStep}
              />
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep
          title="Dynamic step"
          description="Example dynamic step"
          includeStep={shouldIncludeAdditionalStep}
        />
        <CreateFullPageStep
          title="Empty"
          secondaryLabel="Optional"
          description="Empty step for demonstration purposes"
        />
        <CreateFullPageStep
          className={`${storyClass}__step-fieldset--no-label`}
          title="Core configuration"
          description="Here is an example description for the 'Core configuration' step."
          secondaryLabel="Optional"
        >
          <Grid>
            <Column lg={{ span: 6, start: 1 }}>
              <TextInput
                id="test-2"
                invalidText="A valid value is required"
                labelText="Topic name (optional)"
                placeholder="Enter topic name"
              />
            </Column>
            <Column lg={{ span: 4, start: 1 }}>
              <NumberInput
                id="test-3"
                invalidText="Number is not valid"
                label="Label (optional)"
                max={100}
                min={0}
                step={10}
                value={0}
                iconDescription="Choose a number"
              />
              <NumberInput
                id="test-4"
                invalidText="Number is not valid"
                label="Label (optional)"
                max={100}
                min={0}
                step={10}
                value={0}
                iconDescription="Choose a number"
              />
            </Column>
            <Column lg={{ span: 6, start: 1 }}>
              <TextInput
                id="test-5"
                invalidText="A valid value is required"
                labelText="Minimum in-sync replicas (optional)"
                placeholder="Enter topic name"
              />
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep
          title="Message retention"
          subtitle="This is how many copies of a topic will be made for high availability"
          description="The partitions of each topic can be replicated across a configurable number of brokers"
        >
          <Grid>
            <Column lg={8}>
              <RadioButtonGroup
                defaultSelected="standard"
                legend="Group Legend"
                name="radio-button-group"
                valueSelected="standard"
                orientation="vertical"
              >
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
            </Column>
          </Grid>
        </CreateFullPageStep>
      </CreateFullPage>
    </>
  );
};

const TemplateWithSections = ({ ...args }) => {
  const carbonPrefix = usePrefix();
  const [textInput, setTextInput] = useState('');
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [shouldReject, setShouldReject] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);

  return (
    <>
      <style>{`.${carbonPrefix}--modal { opacity: 0; }`};</style>
      <CreateFullPage className={`${blockClass}`} {...args}>
        <CreateFullPageStep
          title="Partition"
          subtitle="One or more partitions make up a topic. A partition is an ordered list
        of messages."
          description="Partitions are distributed across the brokers in order to increase the
        scalability of your topic. You can also use them to distribute
        messages across the members of a consumer group."
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
          disableSubmit={!textInput}
        >
          <Grid>
            <Column lg={8}>
              <FormGroup
                className={`${blockClass}__step-fieldset ${storyClass}__step-fieldset--label`}
                legendText="Partition"
              >
                <TextInput
                  id="test-6"
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
                    tabIndex={0}
                  >
                    <p className={`${storyClass}__error--text`}>
                      Once toggled on, an inline error notification will appear
                      upon clicking next. This is an example usage of how to
                      prevent the next step if some kind of error occurred
                      during the `onNext` handler.
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
            </Column>
          </Grid>
          <span className={`${blockClass}__section-divider`} />
          <h5 className={`${blockClass}__step-title`}>Core configuration</h5>
          <h6 className={`${blockClass}__step-subtitle`}>
            This is how long messages are retained before they are deleted.
          </h6>
          <Grid>
            <Column lg={8}>
              <FormGroup
                className={`${blockClass}__step-fieldset ${storyClass}__step-fieldset--label`}
                legendText="Core configuration"
              >
                <p
                  className={`${blockClass}__step-description ${storyClass}__step-description`}
                >
                  If your messages are not read by a consumer within this time,
                  they will be missed.
                </p>
                <TextInput
                  id="test-7"
                  invalidText="A valid value is required"
                  labelText="Topic name (optional)"
                  placeholder="Enter topic name"
                />
                <NumberInput
                  id="test-8"
                  invalidText="Number is not valid"
                  label="Label (optional)"
                  max={100}
                  min={0}
                  step={10}
                  value={0}
                  iconDescription="Choose a number"
                />
                <NumberInput
                  id="test-9"
                  invalidText="Number is not valid"
                  label="Label (optional)"
                  max={100}
                  min={0}
                  step={10}
                  value={0}
                  iconDescription="Choose a number"
                />
                <TextInput
                  id="test-10"
                  invalidText="A valid value is required"
                  labelText="Minimum in-sync replicas (optional)"
                  placeholder="Enter topic name"
                />
              </FormGroup>
            </Column>
          </Grid>
        </CreateFullPageStep>
        <CreateFullPageStep
          title="Message retention"
          subtitle="This is how many copies of a topic will be made for high availability"
          description="The partitions of each topic can be replicated across a configurable number of brokers."
        >
          <Grid>
            <Column lg={8}>
              <RadioButtonGroup
                defaultSelected="standard"
                legend="Group Legend"
                name="radio-button-group"
                valueSelected="standard"
                orientation="vertical"
              >
                <RadioButton
                  id="radio-4"
                  labelText="Replication factor: 1"
                  value="standard"
                />
                <RadioButton
                  id="radio-5"
                  labelText="Replication factor: 2"
                  value="default-selected"
                />
                <RadioButton
                  id="radio-6"
                  labelText="Replication factor: 3"
                  value="disabled"
                />
              </RadioButtonGroup>
            </Column>
          </Grid>
        </CreateFullPageStep>
      </CreateFullPage>
    </>
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
