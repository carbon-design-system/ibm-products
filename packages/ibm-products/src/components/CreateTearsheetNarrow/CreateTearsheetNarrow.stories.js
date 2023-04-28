/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';
import {
  Button,
  Dropdown,
  NumberInput,
  TextInput,
  FormGroup,
} from '@carbon/react';
import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { CreateTearsheetNarrow } from '.';
import mdx from './CreateTearsheetNarrow.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CreateTearsheetNarrow.displayName),
  component: CreateTearsheetNarrow,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const createTearsheetNarrowBlockClass = `${pkg.prefix}--create-tearsheet-narrow--story`;

const defaultStoryProps = {
  title: 'Create partition',
  className: 'test-class-name',
  description: 'Select the number of partitions you want to create',
  formTitle: 'Core configuration',
  formDescription:
    'We recommend you fill out and evaluate these details at a minimum before deploying your topic.',
  primaryButtonText: 'Create',
  secondaryButtonText: 'Cancel',
  label: 'Test label',
  selectorPrimaryFocus: '#tearsheet-narrow-story-text-input--1',
};

const Template = (args) => {
  const [open, setOpen] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const numberInputsInvalid =
    partitionCount <= 0 ||
    replicaCount <= 0 ||
    minimumInSyncReplicaCount <= 0 ||
    retentionTime <= 0 ||
    quantity <= 0;
  return (
    <div>
      <style>{`.${defaultStoryProps.className} { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheetNarrow' : 'Open CreateTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow
        open={open}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={action('onRequestSubmit action called')}
        disableSubmit={!topicName || numberInputsInvalid}
        {...args}
      >
        <TextInput
          labelText="Topic name"
          id="tearsheet-narrow-story-text-input--1"
          value={topicName}
          placeholder="Enter topic name"
          onChange={(event) => setTopicName(event.target.value)}
        />
        <NumberInput
          iconDescription="Choose a number"
          id="partition-count"
          min={1}
          max={100}
          value={partitionCount}
          label="Partitions"
          invalidText="Max partitions is 100, min is 1"
          onChange={(event) => setPartitionCount(event.imaginaryTarget.value)}
        />
        <NumberInput
          iconDescription="Choose a number"
          id="replica-count"
          min={1}
          max={100}
          value={replicaCount}
          label="Replicas"
          invalidText="Max replicas is 10, min is 1"
          onChange={(event) => setReplicaCount(event.imaginaryTarget.value)}
        />
        <NumberInput
          iconDescription="Choose a number"
          id="minimum-in-sync-count"
          min={1}
          max={100}
          value={minimumInSyncReplicaCount}
          label="Minimum in-sync replicas"
          invalidText="Max is 5, min is 1"
          onChange={(event) =>
            setMinimumInSyncReplicaCount(event.imaginaryTarget.value)
          }
        />
        <div className={`${createTearsheetNarrowBlockClass}__flex-container`}>
          <NumberInput
            iconDescription="Choose a number"
            id="retention-time"
            min={1}
            max={60}
            value={retentionTime}
            label="Retention time"
            invalidText="Max is 60, min is 1"
            onChange={(event) => setRetentionTime(event.imaginaryTarget.value)}
          />
          <Dropdown
            id="create-tearsheet-narrow-dropdown-options-c"
            ariaLabel="Dropdown"
            initialSelectedItem="Day(s)"
            items={items}
            label="Options"
            titleText="Options"
          />
        </div>
        <NumberInput
          iconDescription="Choose a number"
          id="quantity"
          min={1}
          max={100}
          value={quantity}
          label="Quantity"
          invalidText="Max is 10, min is 1"
          onChange={(event) => setQuantity(event.imaginaryTarget.value)}
        />
      </CreateTearsheetNarrow>
    </div>
  );
};

const WithValidationTemplate = (args) => {
  const [open, setOpen] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
  const [invalid, setInvalid] = useState(false);
  const numberInputsInvalid =
    partitionCount <= 0 ||
    replicaCount <= 0 ||
    minimumInSyncReplicaCount <= 0 ||
    retentionTime <= 0 ||
    quantity <= 0;
  return (
    <div>
      <style>{`.${defaultStoryProps.className} { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheetNarrow' : 'Open CreateTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow
        open={open}
        onRequestClose={() => {
          setOpen(false);
          setTopicName('');
          setInvalid(false);
        }}
        onRequestSubmit={action('onRequestSubmit action called')}
        disableSubmit={!topicName || numberInputsInvalid}
        {...args}
      >
        <FormGroup
          className={`${createTearsheetNarrowBlockClass}__form ${createTearsheetNarrowBlockClass}__example-form-group`}
          legendText="Topic information"
        >
          <TextInput
            labelText="Topic name"
            id="tearsheet-narrow-story-text-input--1"
            value={topicName}
            placeholder="Enter topic name"
            onChange={(event) => setTopicName(event.target.value)}
            onBlur={() => !topicName.length && setInvalid(true)}
            invalid={invalid}
            invalidText="This is a required field"
          />
          <NumberInput
            iconDescription="Choose a number"
            id="partition-count"
            min={1}
            max={100}
            value={partitionCount}
            label="Partitions"
            invalidText="Max partitions is 100, min is 1"
            onChange={(event) => setPartitionCount(event.imaginaryTarget.value)}
          />
          <NumberInput
            iconDescription="Choose a number"
            id="replica-count"
            min={1}
            max={100}
            value={replicaCount}
            label="Replicas"
            invalidText="Max replicas is 10, min is 1"
            onChange={(event) => setReplicaCount(event.imaginaryTarget.value)}
          />
          <NumberInput
            iconDescription="Choose a number"
            id="minimum-in-sync-count"
            min={1}
            max={100}
            value={minimumInSyncReplicaCount}
            label="Minimum in-sync replicas"
            invalidText="Max is 5, min is 1"
            onChange={(event) =>
              setMinimumInSyncReplicaCount(event.imaginaryTarget.value)
            }
          />
        </FormGroup>
        <FormGroup
          className={`${createTearsheetNarrowBlockClass}__form ${createTearsheetNarrowBlockClass}__example-form-group`}
          legendText="Scheduling"
        >
          <div className={`${createTearsheetNarrowBlockClass}__flex-container`}>
            <NumberInput
              iconDescription="Choose a number"
              id="retention-time"
              min={1}
              max={60}
              value={retentionTime}
              label="Retention time"
              invalidText="Max is 60, min is 1"
              onChange={(event) =>
                setRetentionTime(event.imaginaryTarget.value)
              }
            />
            <Dropdown
              id="create-tearsheet-narrow-dropdown-options-c"
              ariaLabel="Dropdown"
              initialSelectedItem="Day(s)"
              items={items}
              label="Options"
              titleText="Options"
            />
          </div>
          <NumberInput
            iconDescription="Choose a number"
            id="quantity"
            min={1}
            max={100}
            value={quantity}
            label="Quantity"
            invalidText="Max is 10, min is 1"
            onChange={(event) => setQuantity(event.imaginaryTarget.value)}
          />
        </FormGroup>
      </CreateTearsheetNarrow>
    </div>
  );
};

const createTearsheetNarrowStoryName = 'Default';
export const createTearsheetNarrow = prepareStory(Template, {
  storyName: createTearsheetNarrowStoryName,
  args: {
    ...defaultStoryProps,
  },
});

const withValidationStoryName = 'With Form Validation';
export const withValidation = prepareStory(WithValidationTemplate, {
  storyName: withValidationStoryName,
  args: {
    ...defaultStoryProps,
  },
});

const withMultipleFormsStoryName = 'With Multiple Forms';
export const withMultipleForms = prepareStory(WithValidationTemplate, {
  storyName: withMultipleFormsStoryName,
  args: {
    ...defaultStoryProps,
    multiForm: true,
  },
});
