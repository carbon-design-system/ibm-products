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
} from 'carbon-components-react';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';

import { CreateTearsheetNarrow } from '.';
import mdx from './CreateTearsheetNarrow.mdx';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(
  pkg,
  CreateTearsheetNarrow.displayName
);

export default {
  title: `${storybookPrefix}/${CreateTearsheetNarrow.displayName}`,
  component: CreateTearsheetNarrow,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const [open, setOpen] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [partitionCount, setPartitionCount] = useState(1);
  const [replicaCount, setReplicaCount] = useState(1);
  const [minimumInSyncReplicaCount, setMinimumInSyncReplicaCount] = useState(1);
  const [retentionTime, setRetentionTime] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [items] = useState(['Day(s)', 'Month(s)', 'Year(s']);
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
        disableSubmit={!topicName}
        {...args}>
        <TextInput
          labelText="Topic name*"
          id="tearsheet-narrow-story-text-input--1"
          value={topicName}
          placeholder="Enter topic name"
          onChange={(event) => setTopicName(event.target.value)}
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
        <div className={`${createTearsheetNarrowBlockClass}__flex-container`}>
          <NumberInput
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

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const createTearsheetNarrow = Template.bind({});
createTearsheetNarrow.args = {
  ...defaultStoryProps,
};
