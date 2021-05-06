/**
 * Copyright IBM Corp. 2020, 2021
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
  TextArea,
  TextInput,
  DataTable,
  Table,
  TableHeader,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  NumberInput,
  Dropdown,
} from 'carbon-components-react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';
import { Copy20, Delete20, Settings20 } from '@carbon/icons-react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';

import { CreateSidePanel } from '.';
import mdx from './CreateSidePanel.mdx';
// import './_storybook-styles.scss';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, CreateSidePanel.displayName);

export default {
  title: `${storybookPrefix}/${CreateSidePanel.displayName}`,
  component: CreateSidePanel,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        options: {
          'One button': 0,
          'One button (ghost)': 1,
          'Two buttons': 2,
          'Three buttons with ghost': 3,
          'Three buttons': 4,
          None: 5,
        },
        default: 0,
      },
    },
    slideIn: {
      table: {
        disable: true,
      },
    },
  },
};

const prefix = 'create-side-panel-stories__';

const defaultStoryProps = {
  title:
    'Incident management for your application, testing a very long title to see how this behaves with a longer title',
  subtitle:
    'This is some text that would talk about how you could investigate incidednt management within this side panel.',
};

const headerData = [
  { id: 1, header: 'Column header', key: 'value' },
  { id: 2, header: 'Column header', key: 'value' },
];

const rowData = [
  {
    id: 'a',
    value: 'Cell text',
  },
  {
    id: 'b',
    value: 'Cell text',
  },
  {
    id: 'c',
    value: 'Cell text',
  },
  {
    id: 'd',
    value: 'Cell text',
  },
  {
    id: 'e',
    value: 'Cell text',
  },
  {
    id: 'f',
    value: 'Cell text',
  },
  {
    id: 'g',
    value: 'Cell text',
  },
  {
    id: 'h',
    value: 'Cell text',
  },
];

const actions_1 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
];

const actions_2 = [
  {
    label: 'Ghost button',
    onPrimaryActionClick: () => {},
    kind: 'ghost',
  },
];

const actions_3 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
];

const actions_4 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
  {
    label: 'Ghost button',
    onPrimaryActionClick: () => {},
    kind: 'ghost',
  },
];

const actions_5 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
];

const actionSets = [actions_1, actions_2, actions_3, actions_4, actions_5, []];

// eslint-disable-next-line react/prop-types
const ChildrenContent = () => {
  const [notesValue, setNotesValue] = useState('');
  const items = ['Day(s)', 'Month(s)', 'Year(s'];
  return (
    <>
      <TextInput
        labelText="Topic name"
        className={`${prefix}form-item`}
        placeholder="Enter topic name"
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
        }}>
        <NumberInput
          id="4"
          className={`${prefix}form-item`}
          label="Retention time"
          min={0}
          max={50}
          value={30}
        />
        <Dropdown
          ariaLabel="Dropdown"
          items={items}
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
    </>
  );
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

// eslint-disable-next-line react/prop-types
const SlideOverTemplate = ({ minimalContent, actions, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <CreateSidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        actions={actionSets[actions]}
        selectorPrimaryFocus=".bx--text-input"
        primaryButtonLabel="Create"
        secondaryButtonLabel="Cancel">
        {!minimalContent && <ChildrenContent />}
      </CreateSidePanel>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const SlideInTemplate = ({ actions, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="cloud-and-cognitive-page-content">
        <Row>
          <Column>
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Close side panel' : 'Open side panel'}
            </Button>
          </Column>
        </Row>
      </Grid>
      <CreateSidePanel
        {...args}
        slideIn={true}
        open={open}
        onRequestClose={() => setOpen(false)}
        actions={actionSets[actions]}
        selectorPrimaryFocus=".bx--text-input"
        primaryButtonLabel="Create"
        secondaryButtonLabel="Cancel">
        <ChildrenContent />
      </CreateSidePanel>
    </>
  );
};

export const SlideIn = SlideInTemplate.bind({});
SlideIn.args = {
  // placement: 'right',
  // slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  actions: 0,
  ...defaultStoryProps,
};
