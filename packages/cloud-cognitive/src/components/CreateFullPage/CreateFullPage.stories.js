/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { action } from '@storybook/addon-actions';
import { CreateFullPage } from '.';
import { CreateFullPageSection } from './CreateFullPageSection';
import { CreateFullPageStep } from './CreateFullPageStep';
import mdx from './CreateFullPage.mdx';

// import styles from './_storybook-styles.scss';
import styles from "./_create-full-page.scss"
const storyClass = 'create-full-page-stories';

import {
  TextInput,
  NumberInput,
  InlineNotification,
  Toggle,
  Dropdown,
  RadioButton,
  RadioButtonGroup,
} from 'carbon-components-react';
import cx from 'classnames';

const storybookPrefix = getStorybookPrefix(pkg, CreateFullPage.displayName);

const blockClass = `${pkg.prefix}--create-full-page`;

export default {
  title: `${storybookPrefix}/${CreateFullPage.displayName}`,
  component: CreateFullPage,
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
  sideNavAriaLabel: 'Create topic side nav',
};

const defaultStepProps = {
  title: 'Partition',
  subtitle: 'This is the unique name used to recognize your topic.',
  description:
    'It will also be used by your producers and consumers as part of the connection information, so make something easy to recognize.',
  onNext: action('Next handler called'),
  hasForm: true,
};

const Template = ({ ...args }) => {
  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep {...defaultStepProps}>
        <TextInput
          id="test1"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Core configuration"
        description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
        <TextInput
          id="input-2"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
        <NumberInput
          id="tj-input-3"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <NumberInput
          id="tj-input-4"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <TextInput
          id="input-5"
          invalidText="A valid value is required"
          labelText="Minimum in-sync replicas"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

const TemplateWithSections = ({ ...args }) => {
  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep {...defaultStepProps}>
        <CreateFullPageSection hasDivider={false}>
          <TextInput
            id="test1"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
        </CreateFullPageSection>
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Core configuration"
        description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
        <TextInput
          id="test41"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
        <NumberInput
          id="tj-input-3"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <NumberInput
          id="tj-input-2"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <TextInput
          id="test72"
          invalidText="A valid value is required"
          labelText="Minimum in-sync replicas"
          placeholder="Enter topic name"
        />
        <CreateFullPageSection
          id="2"
          title="Configuration 2"
          description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
          <TextInput
            id="test4"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
          <NumberInput
            id="tj-input-3"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <NumberInput
            id="tj-input-2"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <TextInput
            id="test73"
            invalidText="A valid value is required"
            labelText="Minimum in-sync replicas"
            placeholder="Enter topic name"
          />
        </CreateFullPageSection>
        <CreateFullPageSection
          id="3"
          hasDivider={false}
          title="Configuration 3"
          description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
          <TextInput
            id="test42"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
          <NumberInput
            id="tj-input-3"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <NumberInput
            id="tj-input-2"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <TextInput
            id="test74"
            invalidText="A valid value is required"
            labelText="Minimum in-sync replicas"
            placeholder="Enter topic name"
          />
        </CreateFullPageSection>
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

const TemplateWithToggle = ({ ...args }) => {
  const [shouldReject, setShouldReject] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [simulatedDelay] = useState(750);
  const [stepOneTextInputValue, setStepOneTextInputValue] = useState('');
  const [topicDescriptionValue, setTopicDescriptionValue] = useState('');
  const [topicVersionValue, setTopicVersionValue] = useState('');
  const [topicMetaData, setTopicMetaData] = useState('');
  const [partitionName, setPartitionName] = useState('');
  const [allTopicOwners, setAllTopicOwners] = useState([]);
  const [selectedTopicOwner, setSelectedTopicOwner] = useState(null);
  const [apiFailed, setApiFailed] = useState(false);
  const [stepTwoTextInputValue, setStepTwoTextInputValue] = useState(1);
  const [stepThreeTextInputValue, setStepThreeTextInputValue] =
    useState('one-day');

  // const clearCreateData = () => {
  //   setStepOneTextInputValue('');
  //   setTopicDescriptionValue('');
  //   setTopicVersionValue('');
  //   setStepTwoTextInputValue(1);
  //   setStepThreeTextInputValue('one-day');
  //   setHasSubmitError(false);
  //   setIsInvalid(false);
  //   setAllTopicOwners([]);
  //   setSelectedTopicOwner(null);
  //   setApiFailed(false);
  // };

  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep
        onMount={async () => {
          try {
            const data = await fetch('https://randomuser.me/api/?results=5');
            const json = await data.json();
            if (!data.ok) {
              throw new Error('received non 200 response');
            }
            setAllTopicOwners(json.results);
          } catch (error) {
            console.warn(
              `CreateFullPage [storybook example]: API request failed.`
            );
            setApiFailed(true);
          }
        }}
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
        title="Topic name"
        disableSubmit={!stepOneTextInputValue}>
        <CreateFullPageSection
          title="General"
          id="create-full-page-section-general">
          <h6
            className={cx(
              `${blockClass}__description`,
              `${blockClass}__heading`
            )}>
            This is the unique name used to recognize your topic
          </h6>
          <p className={`${blockClass}__description`}>
            It will also be used by your producers and consumers as part of the
            connection information, so make it something easy to recognize.
          </p>
          <TextInput
            labelText="Topic name*"
            id="tearsheet-multi-step-story-text-input-multi-step-1"
            value={stepOneTextInputValue}
            placeholder="Enter topic name"
            onChange={(event) => {
              if (event.target.value.length) {
                setIsInvalid(false);
              }
              setStepOneTextInputValue(event.target.value);
            }}
            invalid={isInvalid}
            invalidText="This is a required field"
            onBlur={() => {
              if (!stepOneTextInputValue.length) {
                setIsInvalid(true);
              }
            }}
          />
          <TextInput
            labelText="Topic description"
            id="tearsheet-multi-step-story-text-input-multi-step-1-input-2"
            value={topicDescriptionValue}
            placeholder="Enter topic description"
            onChange={(event) => setTopicDescriptionValue(event.target.value)}
          />
          <TextInput
            labelText="Topic version"
            id="tearsheet-multi-step-story-text-input-multi-step-1-input-3"
            value={topicVersionValue}
            placeholder="Enter topic version"
            onChange={(event) => setTopicVersionValue(event.target.value)}
          />
          <Dropdown
            ariaLabel="Topic owner dropdown"
            className="bx--form-item"
            id="create-full-page-topic-owner"
            items={allTopicOwners}
            itemToString={(item) => (item ? item.email : '')}
            label="Select a topic owner"
            onChange={({ selectedItem }) => setSelectedTopicOwner(selectedItem)}
            selectedItem={selectedTopicOwner}
            titleText="Topic owner"
            warn={apiFailed}
            warnText="API request failed."
          />
          {hasSubmitError && (
            <InlineNotification
              kind="error"
              title="Error"
              subtitle="Resolve errors to continue"
              onClose={() => setHasSubmitError(false)}
            />
          )}
          <Toggle
            className={`${blockClass}__error--toggle`}
            id="simulated-error-toggle"
            size="sm"
            labelText="Simulate error"
            onToggle={(event) => setShouldReject(event)}
          />
          <CreateFullPageSection
            viewAllOnly
            title="Meta data"
            id="create-full-page-section-meta-data">
            <TextInput
              labelText="Topic meta data"
              id="tearsheet-multi-step-story-text-input-multi-step-1-input-4"
              value={topicMetaData}
              placeholder="Enter topic meta data"
              onChange={(event) => setTopicMetaData(event.target.value)}
            />
          </CreateFullPageSection>
        </CreateFullPageSection>
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Empty"
        secondaryLabel="Optional"
        hasForm={false}>
        <CreateFullPageSection
          title="Empty"
          id="create-full-page-section-empty">
          Empty step for demonstration purposes
        </CreateFullPageSection>
      </CreateFullPageStep>
      <CreateFullPageStep title="Partitions" disableSubmit={!partitionName}>
        <CreateFullPageSection
          title="Partitions"
          id="create-full-page-section-partitions">
          <h6
            className={cx(
              `${blockClass}__description`,
              `${blockClass}__heading`
            )}>
            One or more partitions make up a topic. A partition is an ordered
            list of messages.
          </h6>
          <p className={`${blockClass}__description`}>
            Partitions are distributed across the brokers in order to increase
            the scalability of your topic. You can also use them to distribute
            messages across the members of a consumer group.
          </p>
          <NumberInput
            id="carbon-number"
            min={1}
            max={100}
            value={stepTwoTextInputValue}
            label="Partitions"
            helperText="1 partition is sufficient for getting started but, production systems often have more."
            invalidText="Max partitions is 100, min is 1"
            onChange={(event) =>
              setStepTwoTextInputValue(event.imaginaryTarget.value)
            }
          />
          <TextInput
            labelText="Partition name*"
            id="tearsheet-multi-step-story-text-input-multi-step-3-input-1"
            // value={partitionName}
            placeholder="Enter partition name"
            onChange={(event) => setPartitionName(event.target.value)}
          />
        </CreateFullPageSection>
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Message retention"
        disableSubmit={!stepThreeTextInputValue}
        onNext={() => Promise.resolve()}>
        <CreateFullPageSection
          title="Messages"
          id="create-full-page-section-messages">
          <h6
            className={cx(
              `${blockClass}__description`,
              `${blockClass}__heading`
            )}>
            This is how long messages are retained before they are deleted.
          </h6>
          <p className={`${blockClass}__description`}>
            If your messages are not read by a consumer within this time, they
            will be missed.
          </p>
          <RadioButtonGroup
            legendText="Message retention"
            name="radio-button-group"
            defaultSelected={stepThreeTextInputValue}
            onChange={(value) => setStepThreeTextInputValue(value)}
            orientation="vertical">
            <RadioButton labelText="A day" value="one-day" id="one-day" />
            <RadioButton labelText="A week" value="one-week" id="one-week" />
            <RadioButton labelText="A month" value="one-month" id="one-month" />
            <RadioButton labelText="Custom" value="custom" id="custom" />
          </RadioButtonGroup>
        </CreateFullPageSection>
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

export const createFullPage = Template.bind({});
createFullPage.args = {
  ...defaultFullPageProps,
};

export const createFullPageWithSections = TemplateWithSections.bind({});
createFullPageWithSections.args = {
  ...defaultFullPageProps,
};

export const createFullPageWithToggle = TemplateWithToggle.bind({});
createFullPageWithToggle.args = {
  ...defaultFullPageProps,
  includeViewAllToggle: true,
  viewAllToggleLabelText: 'Show all available options',
  viewAllToggleOffLabelText: 'Off',
  viewAllToggleOnLabelText: 'On',
};
