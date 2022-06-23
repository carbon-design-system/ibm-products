/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Button,
  Grid,
  Column,
  TextInput,
  NumberInput,
  Dropdown,
  Header,
  HeaderContainer,
  HeaderName,
  usePrefix,
} from '@carbon/react';
import { Copy, TrashCan, Settings } from '@carbon/icons-react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { EditSidePanel } from '.';
import mdx from './EditSidePanel.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(EditSidePanel.displayName),
  component: EditSidePanel,
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    formTitle: { control: { type: 'text' } },
    formDescription: { control: { type: 'text' } },
    open: { control: { disable: true } },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultStoryProps = {
  title: 'Edit platform quotas',
  subtitle: 'Specify the details of the quotas',
  formTitle: 'Core configuration',
  formDescription:
    'We recommend you fill out and evaluate these details at a minimum before deploying your topic.',
  primaryButtonText: 'Save',
  secondaryButtonText: 'Cancel',
};

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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const prefix = 'edit-side-panel-stories__';
  const carbonPrefix = usePrefix();
  const items = ['Day(s)', 'Month(s)', 'Year(s)'];
  const [open, setOpen] = useState(false);
  const [topicValue, setTopicValue] = useState('Cluster management');
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="ibm-products-page-content">
        <Column lg={{ span: 2, start: 8 }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close side panel' : 'Open side panel'}
          </Button>
        </Column>
      </Grid>
      <EditSidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => setOpen(false)}
        disableSubmit={!topicValue.length}
        selectorPrimaryFocus={`.${carbonPrefix}--text-input`}
      >
        <TextInput
          id="create-side-panel-topic-name-a"
          labelText="Topic name"
          className={`${prefix}form-item`}
          placeholder="Enter topic name"
          value={topicValue}
          onChange={(event) => setTopicValue(event.target.value)}
        />
        <NumberInput
          iconDescription="Choose a number"
          id="1"
          className={`${prefix}form-item`}
          label="Partitions"
          min={0}
          max={50}
          value={1}
        />
        <NumberInput
          iconDescription="Choose a number"
          id="2"
          className={`${prefix}form-item`}
          label="Replicas"
          min={0}
          max={50}
          value={1}
        />
        <NumberInput
          iconDescription="Choose a number"
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
          }}
        >
          <NumberInput
            iconDescription="Choose a number"
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
          iconDescription="Choose a number"
          id="3"
          className={`${prefix}form-item`}
          label="Minimum in-sync replicas"
          min={0}
          max={50}
          value={1}
        />
      </EditSidePanel>
    </>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */

export const editSidePanel = prepareStory(Template, {
  args: {
    actionToolbarButtons: [
      {
        label: 'Copy platform id',
        icon: (props) => <Copy size={16} {...props} />,
        onClick: action('Toolbar button clicked: Copy'),
      },
      {
        label: 'Settings',
        icon: (props) => <Settings size={16} {...props} />,
        onClick: action('Toolbar button clicked: Settings'),
      },
      {
        label: 'Delete',
        icon: (props) => <TrashCan size={16} {...props} />,
        onClick: action('Toolbar button clicked: Delete'),
      },
    ],
    includeOverlay: true,
    ...defaultStoryProps,
  },
});
