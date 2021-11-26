import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  NumberInput,
  TextInput,
  FormGroup,
} from 'carbon-components-react';
import { CreateTearsheetNarrow } from '@carbon/ibm-cloud-cognitive';
import { pkg } from '@carbon/ibm-cloud-cognitive/es/settings';

export const TestComponent = () => {
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
  const createTearsheetNarrowBlockClass = `${pkg.prefix}--create-tearsheet-narrow--story`;
  return (
    <div>
      <style>{`.${defaultStoryProps.className} { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(!open)} className="story--button">
        {open ? 'Close CreateTearsheetNarrow' : 'Open CreateTearsheetNarrow'}
      </Button>
      <CreateTearsheetNarrow
        {...defaultStoryProps}
        open={open}
        onRequestClose={() => {
          setOpen(false);
          setTopicName('');
          setInvalid(false);
          console.log('onRequestClose action called');
        }}
        onRequestSubmit={() => {
          console.log('onRequestSubmit action called');
          setTopicName('');
          setInvalid(false);
          setOpen((prev) => !prev);
        }}
        disableSubmit={!topicName || numberInputsInvalid}
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
            onChange={(event) => {
              setTopicName(event.target.value);
              if (event.target.value.length) {
                setInvalid(false);
              }
            }}
            onBlur={() => !topicName.length && setInvalid(true)}
            invalid={invalid}
            invalidText="This is a required field"
          />
          <NumberInput
            id="partition-count"
            min={1}
            max={100}
            value={partitionCount}
            label="Partitions"
            invalidText="Max partitions is 100, min is 1"
            onChange={(event) => setPartitionCount(event.imaginaryTarget.value)}
          />
          <NumberInput
            id="replica-count"
            min={1}
            max={100}
            value={replicaCount}
            label="Replicas"
            invalidText="Max replicas is 10, min is 1"
            onChange={(event) => setReplicaCount(event.imaginaryTarget.value)}
          />
          <NumberInput
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
