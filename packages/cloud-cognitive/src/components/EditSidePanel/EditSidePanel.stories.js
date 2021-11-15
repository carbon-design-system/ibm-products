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
import { Copy20, Delete20, Settings20 } from '@carbon/icons-react';

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
  selectorPrimaryFocus: '.bx--text-input',
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
  const items = ['Day(s)', 'Month(s)', 'Year(s)'];
  const [open, setOpen] = useState(false);
  const [topicValue, setTopicValue] = useState('Cluster management');
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="ibm-products-page-content">
        <Row>
          <Column>
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Close side panel' : 'Open side panel'}
            </Button>
          </Column>
        </Row>
      </Grid>
      <EditSidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => setOpen(false)}
        disableSubmit={!topicValue.length}
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
          }}
        >
          <NumberInput
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
        icon: Copy20,
        onClick: action('Toolbar button clicked: Copy'),
      },
      {
        label: 'Settings',
        icon: Settings20,
        onClick: action('Toolbar button clicked: Settings'),
      },
      {
        label: 'Delete',
        icon: Delete20,
        onClick: action('Toolbar button clicked: Delete'),
      },
    ],
    includeOverlay: true,
    ...defaultStoryProps,
  },
});
